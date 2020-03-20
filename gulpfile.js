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
      tinypng     = require('gulp-tinypng-compress');
      uglify      = require('gulp-uglify');
      s3          = require( "gulp-s3-deploy" );
      reload      = browserSync.reload;

      let dev = true;

// /////////////////////////////////////////////////////
// DEPLOY 
// /////////////////////////////////////////////////////      

var s3Credentials = {
  "key":    process.env.AWS_ACCESS_KEY_ID,
  "secret": process.env.AWS_SECRET_ACCESS_KEY,
  "bucket": process.env.AWS_S3_BUCKET,
  "region": process.env.AWS_REGION

};

gulp.task('deploy', () => {
  console.log(process.env.AWS_S3_BUCKET);
  gulp.src( './dist/**' )
    .pipe( s3( s3Credentials ) );
});

// /////////////////////////////////////////////////////
// PATHS
// /////////////////////////////////////////////////////

const ROOT_PATH       = '.',
      HTML_DEV_PATH   = 'app/*.html'
      SASS_PATH       = 'app/styles/**/*.scss',
      JS_DEV_PATH     = 'app/scripts/*.js',
      SPRITE_PATH     = 'app/sprite/*.+(png|jpg|jpeg|gif|svg)',
      IMGS_DEV_PATH   = 'app/images/**/*.+(png|jpg|jpeg|gif|svg)',
      FONTS_DEV_PATH  = 'app/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      VIDEOS_DEV_PATH = 'app/**/*.{mp4,webm,ogv}',

      HTML_PATH       = "dist/",
      CSS_PATH        = 'dist/styles/',
      JS_PATH         = 'dist/scripts/',
      IMGS_PATH       = 'dist/images/',
      FONTS_PATH      = 'dist/fonts/',
      VIDEOS_PATH     = 'dist/';



// /////////////////////////////////////////////////////
// SASS / MINIFICAÇÃO DE CSS task
// /////////////////////////////////////////////////////

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

function css() {
  return gulp
    .src(SASS_PATH)
    // .pipe(sourcemaps.init({largeFile: true}))
    .pipe(sass(sassOptions).on('error', sass.logError))
    // .pipe(rename(function (path) {
    //     path.basename += ".min"
    // }))
    // .pipe(sourcemaps.write('/', {
    //   addComment: false,
    //   includeContent: false,
    //   sourceRoot: CSS_PATH
    // }))
    .pipe(gulp.dest(CSS_PATH))
    .pipe(browserSync.reload({stream:true}));
}

// /////////////////////////////////////////////////////
// MINIFICAÇÃO DE JS
// /////////////////////////////////////////////////////

function scripts() {
  return gulp.src(JS_DEV_PATH)
  // return gulp.src([
  //   'app/scripts/vendor/*.js',

  //   'app/scripts/vendor/jquery.js',
  //   'app/scripts/vendor/modernizr.js',
  //   'app/scripts/vendor/jquery.fancybox.js',
  //   'app/scripts/vendor/slick.js',
  //   'app/scripts/vendor/jquery.visible.js',
  //   'app/scripts/vendor/tweenlite.min.js',
  //   'app/scripts/vendor/css.min.js',
  //   'app/scripts/vendor/animus.min.js',
  //   'app/scripts/vendor/imagine.min.js',
  //   'app/scripts/vendor/jquery.mobile.custom.js',
  //   'app/scripts/main.js'
  // ])
  // .pipe(sourcemaps.init({largeFile: true}))
  // .pipe(babel({
  //   presets: ['@babel/preset-env']
  // }))
  .pipe(babel())
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(uglify())
  // .pipe(rename(function (path) {
  //     path.basename += ".min"
  // }))
  // .pipe(sourcemaps.write('/', {
  //   addComment: false,
  //   includeContent: false,
  //   sourceRoot: JS_PATH
  // }))
  .pipe(gulp.dest(JS_PATH))
  .pipe(browserSync.reload({stream:true}));
}

// /////////////////////////////////////////////////////
// COMPRESS - SPRITE IMGS task
// /////////////////////////////////////////////////////

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
    .pipe(gulp.dest('app/scss'));

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
// COPYING VIDEOS
// /////////////////////////////////////////////////////

// function videos() {
//   return gulp
//     .src(VIDEOS_DEV_PATH)
//     .pipe(gulp.dest(VIDEOS_PATH));
// }

// /////////////////////////////////////////////////////
// COPYING APP FILES
// /////////////////////////////////////////////////////

function extras() {
  return gulp.src([
    'app/**/*',
    'app/**/*', '!app/scripts/vendor{,/**/*}',
    '!app/styles/**/*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
}

// /////////////////////////////////////////////////////
// HTML MINIFY TASK
// /////////////////////////////////////////////////////

// https://goede.dist/transpile-and-minify-javascript-html-and-css-using-gulp-4

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

// /////////////////////////////////////////////////////
// BROWSER-SYNC / WATCH - RELOAD BROWSERS
// /////////////////////////////////////////////////////

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
	 //proxy:'http://localhost/nomedodist/dist/',
    // proxy:'http://localhost/nomedodist/wp/',
    // port: 8080,
    // open: true,
    // notify: true
  });
  gulp.watch(SASS_PATH, css);
  gulp.watch(JS_DEV_PATH, scripts);
  gulp.watch(SPRITE_PATH, sprite);
  gulp.watch(IMGS_DEV_PATH, images);
  gulp.watch(HTML_DEV_PATH, html);
  gulp.watch(HTML_DEV_PATH).on('change', browserSync.reload);
}

// /////////////////////////////////////////////////////
// EXPORT TASKS
// /////////////////////////////////////////////////////

exports.html = html;
exports.images = images;
exports.css = css;
exports.scripts = scripts;
exports.extras = extras;
exports.serve = serve;

// /////////////////////////////////////////////////////
// BUILD TASKS
// /////////////////////////////////////////////////////

exports.default = exports.build = gulp.parallel(html, css, scripts, images, fonts, extras);
