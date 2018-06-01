const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
var prepro = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

var srcCss = './src/css/*.*';
var css = './static/css';
var srcImages = './src/img/**/*.*';
var images = './static/img';

gulp.task('css', function() {
  gulp.src(srcCss)
    .pipe(plumber({
      handleError: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(prepro())
    .pipe(gulp.dest(css));
});

gulp.task('csso', function() {
  gulp.src(css + '/*.*')
    .pipe(cssnano())
    .pipe(gulp.dest(css));
});

gulp.task('imgo', function() {
  gulp.src(srcImages)
    .pipe(imagemin())
    .pipe(gulp.dest(images));
});

gulp.task('watch', ['css'], function() {
  return gulp.watch('./src/css/**/*.*', ['css'])
});

gulp.task('default', ['watch']);