# Style Guide
- "use strict"  // 类和模块的内部，默认就是严格模式
- require       // es6 modules都不支持；IIFE unnecessary


## ????
- 数据驱动开发的示例
- 阅读代码 代码结构 分解 - js组织
- ~~webcontents require 加载~~
- ~~模块 多页面事件如何合并源码(单页面应用用已有框架)(迁移到web端：尽量少使用依赖node环境的包,最后用`webpack`打包`CommonJS`标准的源码)~~
- gis
- ArrayBuffer (canvas)
- Drag and drop
- Canvas and D3.js


## tools
- vscode typings
- git
- mocha
- eslint http://eslint.cn/
- (http-server)[https://www.npmjs.com/package/http-server]

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

## web workers
process & thread

## event
- event driven || data driven
- web 自定义事件： Event, CustomEvent
  https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
  http://api.jquery.com/on/
- https://github.com/component/emitter/blob/master/index.js

## try catch


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

```
// 40 7
let sum = 0;
let start = 7;
for (let i = 0; i < 40; i++) {
    let r = i&1 ? 1 : 1
    if (sum >= 150) sum += start*r*0.5
    else if (sum >= 100) sum += start*r*0.8
    else sum += start*r
}
console.log(sum);

//
let origin = new Array(40).fill(7)
let sum0 = origin.reduce((sum, v, k) => {
    let r = k&1 ? 1 : 0.7
    if (sum >= 150) return sum + v*r*0.5
    else if (sum >= 100) return sum + v*r*0.8
    else return sum + v*r
}, 0)
console.log(sum0)
```

url = url.replace(/^\w+(?=:)/, (m) => m.toUpperCase())