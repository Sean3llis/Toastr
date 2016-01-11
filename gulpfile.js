var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackDevConfig = require('./dev.config.js');
var WebpackDevServer = require("webpack-dev-server");

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

gulp.task('serve', function(callback){
	new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        callback();
    });
});

gulp.task('watch', ['pack'], function(){
	gulp.watch('src/**/*.js', ['pack']);
});