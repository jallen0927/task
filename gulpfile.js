'use strict';

var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

var jsFiles = [
    './node_modules/angular/angular.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/underscore/underscore-min.js',
    './client/components/paragraph/paragraph.js',
    './client/components/paragraph/directives/letter.directive.js',
    './client/components/paragraph/directives/word.directive.js',
    './client/components/paragraph/controllers/paragraph.controller.js',
    './client/components/paragraph/services/paragraph.service.js'
];

gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(gp_concat('concat.js'))
        .pipe(gp_rename('app.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./client/dist'));
});

gulp.task('js:w', function () {
    gulp.watch(jsFiles, ['js']);
});

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