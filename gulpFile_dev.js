
var gulp = require('gulp'),
  fs = require('fs'),
  less = require('gulp-less'),
  csso = require('gulp-csso'),
  livereload = require('gulp-livereload'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  replace = require('gulp-replace'),
  revCollector = require('gulp-rev-collector'),
  connect = require('gulp-connect');
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  notify=require('gulp-notify'),
  plumber=require('gulp-plumber'),
  nodemon=require('gulp-nodemon'),
  express=require('gulp-express'),
  clean = require('gulp-clean'),

  gulp_webpack = require('gulp-webpack'),
  webpack= require('webpack'),
  webpack_config = require('./webpack.config_dev.js'),

  devHtml = require('gulp-devHtml');

  var basePath = 'public/';

  // less 编译
  gulp.task('less',(event) => {
      console.log('less 编译');
      gulp.src(basePath + 'src/less/*.less')
        .pipe(plumber({errorHandler:notify.onError('Error:<%=error.message%>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(basePath + 'src/css'))
        // .pipe(gulp.dest(basePath + 'dist/css'));
      gulp.src(basePath + 'src/less/page/*.less')
        .pipe(plumber({errorHandler:notify.onError('Error:<%=error.message%>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(basePath + 'src/css/page'))
        // .pipe(gulp.dest(basePath + 'dist/css'));

  });
  gulp.task('lessClean',(event) => {
      gulp.src(basePath + 'dist/css')
        .pipe(clean());
  });
  // less 编译
  gulp.task('lessTest',(event) => {
      console.log('gulp.task: lessTest');
      gulp.src(basePath + 'src/less/*.less')
        .pipe(plumber({errorHandler:notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(gulp.dest(basePath + 'dist/css'));

  });

  //定义监听文件修改任务
  gulp.task('watchBuild',(event) => {
      // livereload.listen();
      gulp.watch([basePath + 'src/*.js'], ['buildjs']);

  });

  //定义监听文件修改任务
  gulp.task('watchLess', (event) => {
      // livereload.listen();
      gulp.watch(basePath + 'src/less/*.less', ['less','revCss']);
      gulp.watch(basePath + 'src/less/page/*.less', ['less']);
      // gulp.watch(basePath + 'src/less/index.less', ['lessTest']);
      // fs.watch(basePath + 'src/less', function (event,filename) {
      //     console.log('fs.watch');
      //     gulp.run('default');
      // });

  });

  // 生成js文件
  gulp.task('buildjs',() => {
    // src 与打包文件无关
    gulp.src(basePath + 'src/index.js')
      .pipe(gulp_webpack(webpack_config,webpack))
      .pipe(gulp.dest(basePath + 'dist/'))
      // .pipe(devHtml({
      //   files: ['./public/html/demo04.html']
      // }))
      // .pipe(livereload());
  });

  //CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
  gulp.task('revCss', () => {
      console.log('revCss');
      return gulp.src(basePath + 'src/css/*.css')
          .pipe(rev())
          .pipe(rev.manifest())
          .pipe(gulp.dest(basePath + 'rev/css'));
  });
  // 根据 rev-manifest.json文件名对照 替换文件名称 版本号
  gulp.task('revHtml',['revCss'], () => {
    return gulp.src([basePath + 'html/demo08.html',basePath + 'rev/**/*.json'])
      .pipe(revCollector())
      .pipe(gulp.dest(basePath + 'dist/'))
  });
  gulp.task('rev',['revCss','revHtml']);

  //定义默认任务
  gulp.task('default',['watchBuild','watchLess']);
//   gulp.task('default',['watchLess']);
  gulp.run('default');
  // gulp.run('rev');
  // express.run(['./app/bin/www']);
