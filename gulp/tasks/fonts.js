const gulp = require('gulp')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')


module.exports = 	gulp.task('fonts', function () {
	gulp.src('app/fonts/**/*')
		.pipe(ttf2woff())
		.pipe(gulp.dest('dist/fonts/'))
		return gulp.src('app/fonts/**/*')
		.pipe(ttf2woff2())
		.pipe(gulp.dest('dist/fonts/'))
})