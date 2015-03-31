var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var open = require('gulp-open');
var imageOptimization = require('gulp-image-optimization');
var del = require('del');
var notify = require('gulp-notify');
var ghPages = require('gulp-gh-pages');

var JADE_FILES = './code/**/*.jade';
var SASS_FILES = './code/**/*.scss';
var IMAGE_FILES = ['./code/**/*.png','./code/**/*.jpg','./code/**/*.gif','./code/**/*.jpeg'];
var APP_JS_FILES = './code/scripts/app/**/*.js';
var LIB_JS_FILES = './code/scripts/lib/**/*.js';
var BROWSERIFY_ROOT = './code/scripts/app/main.js';
var BUILD_DEST = './dist/';
var BUILT_FILES = BUILD_DEST + '**/*';

function logError (error) {
  var errorString = error.toString()
  notify.onError({
    title: 'Build Error',
    message: errorString
  })(error);
  console.log(errorString);
  this.emit('end');
}

// ---------------------------------
// --------- BUILD TASKS -----------
// ---------------------------------
gulp.task('clean', function(callback) {
  del(BUILT_FILES, callback);
});

gulp.task('templates', function() {
  gulp.src(JADE_FILES)
    .pipe(jade({
      pretty: true
    }))
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src(SASS_FILES)
    .pipe(sass())
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src(IMAGE_FILES)
    .pipe(imageOptimization({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST));
});

gulp.task('app_scripts', function() {
  gulp.src(BROWSERIFY_ROOT)
    .pipe(browserify({
      glboal: true,
      debug : true
    }))
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST+'scripts/app/'));
});

gulp.task('lib_scripts', function() {
  gulp.src(LIB_JS_FILES)
    .pipe(uglify())
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST+'scripts/lib/'));
});

// ---------------------------------
// --------- WATCH TASKS -----------
// ---------------------------------
gulp.task('watch', function () {
  watch(JADE_FILES, function() {
    gulp.start('templates');
  });

  watch(SASS_FILES, function() {
    gulp.start('styles');
  });

  watch(IMAGE_FILES, function() {
    gulp.start('images');
  });

  watch(APP_JS_FILES, function() {
    gulp.start('app_scripts');
  });

  watch(LIB_JS_FILES, function() {
    gulp.start('lib_scripts');
  });
});

// ----------------------------------
// --------- SERVER TASKS -----------
// ----------------------------------
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('open', function(){
  gulp.src('./dist/index.html')
  .pipe(open('', {
    url: 'http://localhost:8080',
  }));
});

// ----------------------------------
// --------- DEPLOY TASKS -----------
// ----------------------------------
gulp.task('deploy', function() {
  gulp.src(BUILT_FILES)
    .pipe(ghPages({
      remoteUrl: 'git@github.com:leafagency/leafagency.github.io.git',
      force: true,
      branch: 'master'
    }))
    .on('error', logError);
});

// ----------------------------------
// --------- COMPOSITE TASKS --------
// ----------------------------------
gulp.task('build', ['clean'], function() {
  gulp.start('templates', 'styles', 'images', 'app_scripts', 'lib_scripts');
});
gulp.task('start', ['build'], function() {
  gulp.start('connect', 'watch', 'open');
});
