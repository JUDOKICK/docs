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
      s3          = require( "gulp-s3-deploy" );
      reload      = browserSync.reload;

// /////////////////////////////////////////////////////
// DEPLOY 
// /////////////////////////////////////////////////////      

var s3Credentials = {
  "key":    process.env.AWS_ACCESS_KEY_ID,
  "secret": process.env.AWS_SECRET_ACCESS_KEY,
  "bucket": process.env.AWS_S3_BUCKET,
  "region": process.env.AWS_REGION
};

var options = { 
  headers: {
    'Cache-Control': 'max-age=315360000, no-transform, public',
    'x-amz-acl': 'private'
  },
  gzippedOnly: true,
  failOnError: true
};

gulp.task('deploy', () => {
  console.log(process.env.AWS_S3_BUCKET);
  gulp.src( './dist/**' ).pipe(gzip())
    .pipe( s3( s3Credentials, options ) );
});

// /////////////////////////////////////////////////////
// PATHS
// /////////////////////////////////////////////////////

const HTML_DEV_PATH         = 'app/*.html',
	    HTML_AMB_DEV_PATH     = 'app/ambassadors/*.html',
      HTML_BOUNTY_DEV_PATH  = 'app/bounty/*.html',
      SASS_PATH             = 'app/styles/**/*.scss',
      SASS_AMB_PATH         = 'app/styles_amb/**/*.scss',
      JS_DEV_PATH           = 'app/scripts/*.js',
      SPRITE_PATH           = 'app/sprite/*.+(png|jpg|jpeg|gif|svg)',
      IMGS_DEV_PATH         = 'app/images/**/*.+(png|jpg|jpeg|gif|svg)',

      HTML_PATH          = "dist/",
	    HTML_AMB_PATH      = "dist/ambassadors/",
      HTML_BOUNTY_PATH   = "dist/bounty/",
      CSS_PATH           = 'dist/styles/',
      JS_PATH            = 'dist/scripts/',
      IMGS_PATH          = 'dist/images/',
      FONTS_PATH         = 'dist/fonts/',
      VIDEOS_PATH        = 'dist/';


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
    .pipe(sourcemaps.write('/', {
      addComment: false,
      includeContent: false,
      sourceRoot: CSS_PATH
    }))
    .pipe(gulp.dest(CSS_PATH))
    .pipe(browserSync.reload({stream:true}));
}

function css_amb() {
  return gulp
    .src(SASS_AMB_PATH)
    // .pipe(sourcemaps.init({largeFile: true}))
    .pipe(sass(sassOptions).on('error', sass.logError))
    // .pipe(rename(function (path) {
    //     path.basename += ".min"
    // }))
    .pipe(sourcemaps.write('/', {
      addComment: false,
      includeContent: false,
      sourceRoot: CSS_PATH
    }))
    .pipe(gulp.dest(CSS_PATH))
    .pipe(browserSync.reload({stream:true}));
}

// /////////////////////////////////////////////////////
// MINIFICAÇÃO DE JS
// /////////////////////////////////////////////////////

function scripts() {
  return gulp.src(JS_DEV_PATH)
  // return gulp.src([
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
  .pipe(babel({
	 presets: ['@babel/preset-env']
  }))
  //.pipe(babel())
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

function scripts_amb() {
  return gulp.src([
    'app/scripts/vendor/jquery.js',
    'app/scripts/vendor/bootstrap.js',
    // 'app/scripts/vendor/jquery.smooth-scroll.js',
    'app/scripts/scripts.js',
  ])
  .pipe(plumber())
  .pipe(concat('scripts.js'))
  .pipe(uglify())
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

// function sprite() {
//   const data = gulp.src(SPRITE_PATH)
//   .pipe(spritesmith({
//     imgName: 'sprite.png',
//     imgPath: 'images/sprite.png',
//     cssName: '_sprite.scss'
//   }));

//   const imgStream = data.img
//     .pipe(buffer())
//     .pipe(imagemin())
//     .pipe(gulp.dest(IMGS_PATH));

//   const cssStream = data.css
//     .pipe(gulp.dest('app/styles'));

//   return merge(imgStream, cssStream);
// }

// /////////////////////////////////////////////////////
// COPYING APP FILES
// /////////////////////////////////////////////////////

function extras() {
  return gulp.src([
    'app/**/*',
    // 'app/**/*', '!app/scripts/vendor{,/**/*}',
    // 'app/**/*', '!app/sprite{,/**/*}',
    '!app/scripts/vendor{,/**/*}',
    // '!app/sprite{,/**/*}',
    // '!app/styles/**/*.scss',
    '!app/styles{,/**/*}',
    '!app/styles_amb{,/**/*}',
    '!app/inc{,/**/*}',
    '!app/**/*.html'
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

function html_amb() {
  return gulp
    .src(HTML_AMB_DEV_PATH)
    .pipe(fileinclude({ //include files
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(HTML_AMB_PATH));
}

function html_bounty() {
  return gulp
    .src(HTML_BOUNTY_DEV_PATH)
    .pipe(fileinclude({ //include files
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(HTML_BOUNTY_PATH));
}

// /////////////////////////////////////////////////////
// BROWSER-SYNC / WATCH - RELOAD BROWSERS
// /////////////////////////////////////////////////////

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch(SASS_PATH, css);
  gulp.watch(SASS_AMB_PATH, css_amb);
  gulp.watch(JS_DEV_PATH, scripts);
  gulp.watch(JS_DEV_PATH, scripts_amb);
  // gulp.watch(SPRITE_PATH, sprite);
  gulp.watch(IMGS_DEV_PATH, images);
  gulp.watch(HTML_DEV_PATH, html);
  gulp.watch(HTML_DEV_PATH).on('change', browserSync.reload);
  gulp.watch(HTML_AMB_DEV_PATH, html_amb);
  gulp.watch(HTML_AMB_DEV_PATH).on('change', browserSync.reload); 
  gulp.watch(HTML_BOUNTY_DEV_PATH, html_bounty);
  gulp.watch(HTML_BOUNTY_DEV_PATH).on('change', browserSync.reload);
}

// /////////////////////////////////////////////////////
// EXPORT TASKS
// /////////////////////////////////////////////////////

// exports.html = html;
// exports.html_amb = html_amb;
// exports.html_bounty = html_bounty;
// exports.images = images;
// // exports.sprite = sprite;
// exports.css = css;
// exports.scripts = scripts;
exports.extras = extras;
exports.serve = serve;

// /////////////////////////////////////////////////////
// BUILD TASKS
// /////////////////////////////////////////////////////

exports.default = exports.build = gulp.parallel(html, html_amb, html_bounty, css, css_amb, scripts, scripts_amb, images, extras);
