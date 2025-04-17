// const gulp = require('gulp');
// const concat = require('gulp-concat');
import gulp from "gulp";
import concat from "gulp-concat";

gulp.task('default', function () {
  return gulp.src('src/files/*')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/files'))
    .on('error', function (err) {
      console.error('Error in concat task', err.toString());
    });
});