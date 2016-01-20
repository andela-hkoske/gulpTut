var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  jshint = require('gulp-jshint'),
  path = require('path'),

  paths = {
    scripts: 'js/*.js'
  };

gulp.task('js', function() {
  return gulp.src([paths.scripts])
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function() {
  return gulp.src([paths.scripts])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint']);
});


gulp.task('default', ['js', 'lint', 'watch']);
