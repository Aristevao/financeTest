const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets']);

gulp.task('app.html', () => {
    return gulp.src('app/**/*.html') // get all .html files
        .pipe(htmlmin({ collapseWhitespace: true })) // remove whitespace from .html file
        .pipe(gulp.dest('public')); // set a destine file to the above files
});

gulp.task('app.css', () => {
    return gulp.src('app/**/*.css') // get all css files
        .pipe(uglifycss({ "uglyComments": true })) // remove whitespace and comments
        .pipe(concat('app.min.css')) // concat all file to reduce its size
        .pipe(gulp.dest('public/assets/css')); // set a destine 
});

gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', () => {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})