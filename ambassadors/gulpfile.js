
const babel       = require('gulp-babel');
      browserSync = require('browser-sync');
      buffer      = require('vinyl-buffer');
      concat      = require('gulp-concat');
      fileinclude = require('gulp-file-include');
      gulp        = require('gulp');
      htmlmin     = require('gulp-htmlmin');
      imagemin    = require('gulp-imagemin');
      merge       = require('merge-stream');
      newer       = require('gulp-newer');
      notify      = require('gulp-notify');
      plumber     = require('gulp-plumber');
      rename      = require('gulp-rename');
      sass        = require('gulp-sass');
      source      = require('vinyl-source-stream');
      sourcemaps  = require('gulp-sourcemaps');
      spritesmith = require('gulp.spritesmith');
      uglify      = require('gulp-uglify');
      reload      = browserSync.reload;

// ////////////////////////////////////////////////
// PATHS
// ////////////////////////////////////////////////

const ROOT_PATH          = '.',
      HTML_DEV_PATH      = 'dev/*.html',
      HTML_ZH_DEV_PATH   = 'dev/zh/*.html',
      SASS_PATH          = 'dev/scss/**/*.scss',
      JS_DEV_PATH        = 'dev/js/*.js',
      SPRITE_PATH    	   = 'dev/sprite/*.+(png|jpg|jpeg|gif|svg)',
      IMGS_DEV_PATH      = 'dev/img/**/*.+(png|jpg|jpeg|gif|svg)',
      FONTS_DEV_PATH     = 'dev/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      MEDIA_DEV_PATH 	   = 'dev/**/*.{mp4,webm,ogv,mp3,wma}',

      HTML_PATH      = 'site/',
      HTML_ZH_PATH   = 'site/zh',
      CSS_PATH       = 'site/css/',
      JS_PATH        = 'site/js/',
      IMGS_PATH      = 'site/img/',
      FONTS_PATH     = 'site/fonts/',
      MEDIA_PATH     = 'site/media/';


// ////////////////////////////////////////////////
// SASS / MINIFICAÇÃO DE CSS task
// ///////////////////////////////////////////////

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

function css() {
  return gulp
    .src(SASS_PATH)
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('/', {
      addComment: false,
      includeContent: false,
      sourceRoot: CSS_PATH
    }))
    .pipe(gulp.dest(CSS_PATH))
    .pipe(browserSync.reload({stream:true}));
}

// ////////////////////////////////////////////////
// MINIFICAÇÃO DE JS
// ///////////////////////////////////////////////

function scripts() {
	//return gulp.src(JS_DEV_PATH)
	return gulp.src([
		'dev/js/vendor/jquery.js',
    'dev/js/vendor/bootstrap.js',
    'dev/js/vendor/jquery.localize.min.js',
		//'dev/js/vendor/jquery.fancybox.js',
		// 'dev/js/vendor/slick.js',
		// 'dev/js/vendor/jquery.matchHeight-min.js',
		// 'dev/js/vendor/jquery.smooth-scroll.js',
    'dev/js/vendor/jquery.nicescroll.js',
		'dev/js/vendor/jquery.mask.min.js',
		'dev/js/scripts.js',
	])
	.pipe(sourcemaps.init({largeFile: true}))
	// .pipe(babel({
	// 	presets: ['@babel/preset-env']
	// }))
	//.pipe(babel())
	.pipe(plumber())
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(rename(function (path) {
		path.basename += ".min"
	}))
	.pipe(sourcemaps.write('/', {
		addComment: false,
		includeContent: false,
		sourceRoot: JS_PATH
	}))
	.pipe(gulp.dest(JS_PATH))
	.pipe(browserSync.reload({stream:true}));
}

// ////////////////////////////////////////////////
// COMPRESS - SPRITE IMGS task
// ///////////////////////////////////////////////

function images() {
  return gulp.src(IMGS_DEV_PATH)
    .pipe(newer(IMGS_PATH))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest(IMGS_PATH));
}

function sprite() {
  const data = gulp.src(SPRITE_PATH)
  .pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: 'img/sprite.png',
    cssName: '_sprite.scss'
  }));

  const imgStream = data.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(IMGS_PATH));

  const cssStream = data.css
    .pipe(gulp.dest('dev/scss'));

  return merge(imgStream, cssStream);
}

// /////////////////////////////////////////////////////
// COPYING FONTS
// /////////////////////////////////////////////////////

function fonts() {
  return gulp
    .src(FONTS_DEV_PATH)
    .pipe(gulp.dest(FONTS_PATH));
}

// /////////////////////////////////////////////////////
// COPYING MEDIA
// /////////////////////////////////////////////////////

function media() {
  return gulp
    .src(MEDIA_DEV_PATH)
    .pipe(gulp.dest(MEDIA_PATH));
}


// /////////////////////////////////////////////////////
// COPYING dev FILES
// /////////////////////////////////////////////////////

function extras() {
  return gulp.src([
    'dev/**/*',
    // 'dev/**/*', '!dev/scripts/vendor{,/**/*}',
    // 'dev/**/*', '!dev/sprite{,/**/*}',
    '!dev/js/vendor{,/**/*}',
    '!dev/sprite{,/**/*}',
    '!dev/scss{,/**/*}',
    '!site/css/free{,/**/*}',
    '!dev/inc{,/**/*}',
    //'!dev/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('site'));
}

// ////////////////////////////////////////////////
// HTML MINIFY TASK
// ///////////////////////////////////////////////

// https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4

function html() {
  return gulp
    .src(HTML_DEV_PATH)
    .pipe(fileinclude({ //include files
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(HTML_PATH));
}
function html_zh() {
  return gulp
    .src(HTML_ZH_DEV_PATH)
    .pipe(fileinclude({ //include files
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(HTML_ZH_PATH));
}

// /////////////////////////////////////////////////////
// BROWSER-SYNC / WATCH - RELOAD BROWSERS
// /////////////////////////////////////////////////////

function serve() {
  browserSync.init({
    server: {
      baseDir: "./site",
    } //SITES EM HTML
    // proxy:'http://localhost/template-mdb/site/',
    // port: 8080,
    // open: false,
    // notify: true
  });
  gulp.watch(SASS_PATH, css);
  gulp.watch(JS_DEV_PATH, scripts);
  gulp.watch(SPRITE_PATH, sprite);
  gulp.watch(IMGS_DEV_PATH, images);
  gulp.watch(HTML_DEV_PATH, html);
  gulp.watch(HTML_DEV_PATH).on('change', browserSync.reload);
  gulp.watch(HTML_ZH_DEV_PATH, html_zh);  
  gulp.watch(HTML_ZH_DEV_PATH).on('change', browserSync.reload);
}

// ////////////////////////////////////////////////
// EXPORT TASKS
// ///////////////////////////////////////////////

exports.html = html;
exports.html_zh = html_zh;
exports.images = images;
exports.sprite = sprite;
exports.css = css;
exports.scripts = scripts;
exports.extras = extras;
exports.serve = serve;

// var build = gulp.parallel(serve);
// gulp.task('default', build);

// /////////////////////////////////////////////////////
// BUILD TASKS
// /////////////////////////////////////////////////////

exports.default = exports.build = gulp.parallel(html, html_zh, css, scripts, images, sprite, extras/*, fonts, media*/);
