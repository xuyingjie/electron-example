# Synopsis

Main Process
Renderer Process

// ipc
ipcMain.on                          ipcRenderer.send
window.webContents.send             ipcRenderer.on

// RPC
webContents.executeJavaScript       remote

// remote
remote.require

// require 会自动用一个匿名函数包裹
```
(function (exports, require, module, __filename, __dirname, process, global) {
});
```


# Application Packaging (reference vscode)

## Generating asar Archive
An asar archive is a simple tar-like format that concatenates files into a single file.
Electron can read arbitrary files from it without unpacking the whole file.
Not an encryption scheme.

## electron-packager

## other electron app release process

- atom way
	`grunt-electron-installer` (https://github.com/atom/atom/blob/master/build/Gruntfile.coffee)
		使用 Squirrel.Windows 打包工具，效果像chrome一键安装

- vscode way
	- gulp-atom-electron (https://github.com/Microsoft/vscode/blob/master/build/gulpfile.vscode.js)
	- Inno (https://github.com/Microsoft/vscode/blob/master/build/gulpfile.vscode.win32.js)

```
var gulp = require('gulp');
var del = require('del');  // https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
var uglify = require('gulp-uglify');
var electron = require('gulp-atom-electron');  // https://github.com/joaomoreno/gulp-atom-electron


var config = {
  version: '1.2.8',
  platform: 'win32',  // should read package.json
  arch: 'x64',
  // ffmpegChromium: true,  // default: true
  productAppName: '蓝PI蚂蚁制图',
  winIcon: '../../app/ui/img/favicon.ico',
  companyName: '创新网络',
  copyright: 'Copyright (C) 2016 创新网络'
};


// 清理
gulp.task('clean', () => {
  return del([
    'target',
    'x64'
  ]);
});

// 复制应用文件
gulp.task('cp', ['clean'], () => {
  return gulp.src('../../app/**')
    .pipe(gulp.dest('target'));
});

// js 压缩
gulp.task('uglify', ['cp'], () => {
  return gulp.src('../../app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('target'));
});

// electron 打包
gulp.task('package', ['uglify'], () => {
  return gulp.src('target/**')
    .pipe(electron(config))
    .pipe(gulp.dest('x64'));
});

gulp.task('default', ['clean', 'cp', 'uglify', 'package']);



// gulp.task('download', () => {
//     return electron.dest('electron-build', { version: '1.2.8', platform: 'win32' });
// });

```
