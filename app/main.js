const electron = require('electron');
const {app, ipcMain} = electron;
const window = require('./window')

let indexWindow = null;
let settingWindow = null;
let appTray = null;


app.on('ready', init);

function init() {
    indexWindow = window.create('index', {openDevTools: true})
    // console.log(win.id);

    window.createShortcut(indexWindow);

    // Tray
    appTray = window.createTray(appTray);
}

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})
app.on('activate', () => {
    if (indexWindow === null) {
        init();
    }
})



// 主进程（main.js）订阅「close-main-window」通道的消息，
// 渲染进程（index.js）通过通道发出消息。
ipcMain.on('close-main-window', () => {
    app.quit()
})

ipcMain.on('close-setting-window', (event) => {
    if (settingWindow) {
        // let sender = event.sender // Returns the webContents that sent the message
        // var id = BrowserWindow.fromWebContents(sender).id // The unique ID of this window.
        // console.log(id);
        settingWindow.close()
        settingWindow = null
    }
})

ipcMain.on('open-setting-window', () => {
    if (settingWindow) {
        return
    }
    settingWindow = window.create('setting')
})




// 错误处理

// function CustomError (message) {
//     this.name = "CustomError";
//     this.message = message;
// }
// CustomError.prototype = new Error();
// var somebug = new CustomError("wtf");
class CustomError extends Error {
    constructor(msg) {
        super()
        this.name = 'CustomError'
        this.message = msg
    }
}
var somebug = new CustomError('sfasdflksdfasdf')

try {
    // console.log(z);
    throw somebug
} catch(e) {
    console.log(e.name); //CustomError
    console.log(e.message); //wtf
    // console.log(e.stack);
}

