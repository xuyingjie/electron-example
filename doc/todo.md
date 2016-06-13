- 阅读代码 代码结构 分解 - js组织
- ~~webcontents require 加载~~
- ~~模块 多页面事件如何合并源码(单页面应用用已有框架)~~
- gis
- ArrayBuffer


## tools
- vscode typings
- git
- mocha

## debug
- vscode `Main Process` debug
- executeJavaScript `Renderer Process` debug

## 安全
- web脚本中可以调用node api
- js代码是公开的

## es6
- nodejs es6 module: Keep in mind that there is no JavaScript engine yet that natively supports ES6 modules.
- uglify: https://github.com/mishoo/UglifyJS2/issues/448
  `webpack -p` used `uglify`

## require & webpack
- use `CommonJS`
- `webpack` 用于前端打包
```
// Electron's require 会自动用一个匿名函数包裹
(function (exports, require, module, __filename, __dirname, process, global) {
});

// webpack 用 webpackBootstrap。
```


## try catch


## ???
- 是否迁移到web端(尽量少使用依赖node环境的包,最后用`webpack`打包`CommonJS`标准的源码)



## article
代码组织及合并压缩（无框架，各页面事件合并？）


## OTHER
```
// gulp
// uglify: https://github.com/mishoo/UglifyJS2/issues/448
var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('compress', function() {
    return gulp.src('app/try.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})

gulp.task('default', ['compress'])
```