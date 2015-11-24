var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webpack = require("webpack");
var gutil = require("gulp-util");
var eslint = require('gulp-eslint');
var env = require('gulp-env');
var Server = require('karma').Server;
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

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

const karmaConfigPath = __dirname + '/karma.conf.js';
function startServer(callback) {
  new Server({
    configFile: karmaConfigPath,
    singleRun: true
  }, callback).start();
}

gulp.task('test', function(callback) {
  startServer(callback);
});

gulp.task('test-coverage', function(callback) {
  env({COVERAGE: true});
  startServer(callback);
});

gulp.task('test-watch', function(callback) {
  new Server({configFile:  karmaConfigPath}, callback).start();
});
