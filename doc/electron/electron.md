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

