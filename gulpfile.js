const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS to CSS
gulp.task('sass', function() {
    return gulp.src('static/scss/**/*.scss')  // Source folder containing the SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css'));  // Destination folder for compiled CSS files
});

// Watch SCSS files for changes
gulp.task('watch', function() {
    gulp.watch('static/scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
