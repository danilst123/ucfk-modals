"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var watch = require("gulp-watch");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");

gulp.task("less", function() {
  return gulp
    .src([
      "./src/less/**/index.less"
    ])
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ["last 10 versions"],
        grid: true,
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest("./src/css"));
});

gulp.task("less:watch", function() {
  gulp.watch("./src/less/**/*.less", gulp.series("less"));
});
