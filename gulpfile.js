var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webserver = require('gulp-webserver');
var webpackDevConfig = require('./dev.config.js');

var compiler = webpack(webpackDevConfig);

gulp.task('default', ['watch']);

gulp.task('pack', function(callback){
    compiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
        	colors: true
        }));
        callback();
    });
});

gulp.task('serve', function() {
  gulp.src(__dirname)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', ['pack'], function(){
	gulp.watch('src/**/*.js', ['pack']);
});
