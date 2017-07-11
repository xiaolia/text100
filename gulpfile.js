var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('default',function(){
	console.log(123)
});
gulp.task('script',function(){
	return gulp.src(['./js/Itcast.core.js',
					'./js/Itcast.ctor.js',
					'./js/Itcast.dom.js',
					'./js/Itcast.event.js',
					'./js/Itcast.style.js',
					'./js/Itcast.attr.js'
		]).pipe(concat('Itcast.js'))
		.pipe(gulp.dest('./dist'))
});
var press = require('gulp-uglify');
gulp.task('pre',function(){
	gulp.src('./dist/*.js')
	.pipe(press())
	.pipe(gulp.dest('./dist'))
})