var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var webpack = require('webpack');
var webserver = require('gulp-webserver');
var webpackDevConfig = require('./dev.config.js');

var compiler = webpack(webpackDevConfig);

gulp.task('default', ['watch']);

gulp.task('pack', function(callback){
    compiler.run(function(err, stats) {
        gutil.log("[webpack]", stats.toString({
        	colors: true
        }));
        callback();
    });
});

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/final/css'));
});

gulp.task('serve', function() {
  gulp.src(__dirname)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', ['pack', 'sass'], function(){
	gulp.watch(['src/**/*'], ['pack']);
	gulp.watch(['src/sass/**/*.scss'], ['sass']);
});
