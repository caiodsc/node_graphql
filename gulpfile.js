const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {

    const tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('dist'));

});

gulp.start('scripts');