var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webpack = require("webpack");
var gutil = require("gulp-util");
var fs = require('fs');
require('babel/register');

gulp.task('build-babel', function() {
  var config = JSON.parse(fs.readFileSync('./.babelrc'));
  return gulp.src('src/**/*.js')
    .pipe(babel(config))
    .pipe(gulp.dest('lib/'));
});

gulp.task('build-sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/'));
});

var webpackConfig = require('./webpack/webpack.config.js');
gulp.task('webpack:build-minimize', function(callback) {
  webpack(webpackConfig({optimizeMinimize: true}), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({colors: true}));
		callback(err);
  });
});

gulp.task('webpack:build', function(callback) {
  webpack(webpackConfig(), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({colors: true}));
		callback(err);
  });
});

gulp.task('dist', ['webpack:build', 'webpack:build-minimize']);
