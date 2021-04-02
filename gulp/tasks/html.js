const gulp = require('gulp')
const fileinclude = require('gulp-file-include');

module.exports = 	gulp.task('html', function () {
	return gulp.src('app/[^_]*.html')
	.pipe(fileinclude())
	.pipe(gulp.dest('dist/'));
	// return 	gulp.src('app/[^_]*.html')
	// .pipe(fileinclude({
	// 	prefix: '@@',
	// 	basepath: '@file'
	// }))
	// 	.pipe(gulp.dest('dist/'))
})