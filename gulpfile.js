'use strict';

var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

var jsFiles = [

];

var scssFiles = [
    './client/scss/app.paragraph.scss'
];

gulp.task('scss', function () {
    return gulp.src(scssFiles)
        .pipe(sass.sync({outputStyle: 'compressed'})).on('error', sass.logError)
        .pipe(gp_rename('app.min.css'))
        .pipe(gulp.dest('./client/dist'));
});

gulp.task('scss:w', function () {
    gulp.watch(scssFiles, ['scss']);
});

gulp.task('default', ['scss', 'js']);