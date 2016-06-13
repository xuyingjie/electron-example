const electron = require('electron');
const {app, BrowserWindow, ipcMain, globalShortcut, Menu, Tray} = electron;
// const path = require('path')
const window = require('./window')

const CONTENTS_PATH = `${__dirname}/renderer`
const configuration = require('./configuration')

let mainWindow = null;
let settingWindow = null;
let appIcon = null;

function createWindow() {
    // win = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     frame: false,
    //     resizable: false,
    // });
    // win.loadURL(`file://${CONTENTS_PATH}/index.html`);
    // console.log(win.id);
    mainWindow = window.create('index')

    let webContents = mainWindow.webContents
    webContents.openDevTools()
    // console.log(webContents.id);

    // webContents.on('dom-ready', () => {
    //     webContents.executeJavaScript('require("./index.js")')
    // })

    // win.on('closed', () => {
    //     win = null;
    // });


    if (!configuration.readSettings('shortcutKeys')) {
        configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
    }
    createShortcut(mainWindow);


    // Tray
    appIcon = new Tray(`${CONTENTS_PATH}/fluidicon.png`)
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
})



// 主进程（main.js）订阅「close-main-window」通道的消息，
// 渲染进程（index.js）通过通道发出消息。
ipcMain.on('close-main-window', () => {
    app.quit()
})

ipcMain.on('close-setting-window', (event) => {
    if (settingWindow) {
        let sender = event.sender // Returns the webContents that sent the message
        var id = BrowserWindow.fromWebContents(sender).id // The unique ID of this window.
        console.log(id);
        settingWindow.close()
    }
})

ipcMain.on('open-setting-window', () => {
    if (settingWindow) {
        return
    }
    
    settingWindow = new BrowserWindow({
        width: 200,
        height: 200,
        frame: false,
        resizable: false,
    });
    settingWindow.loadURL(`file://${CONTENTS_PATH}/setting.html`)
    settingWindow.on('closed', () => {
        settingWindow = null
    })
    // console.log(settingWindow.id);
})


function createShortcut(window) {
    globalShortcut.unregisterAll();
    
    var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
    var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

    globalShortcut.register(shortcutPrefix + '1', () => {
        // 通过ipc从主进程发送消息到渲染进程
        window.webContents.send('global-shortcut', 0);
    })
}




// 错误处理
try {
    var x = 1;
    var y = 0;
    console.log(z);
} catch(e) {
    // statements
    console.log(e.message); //z is not defined
    console.log(e.name); //ReferenceError
}

// function CustomError (message) {
//     this.name = "CustomError";
//     this.message = message;
// }
// CustomError.prototype = new Error();
// var somebug = new CustomError("wtf");
class NoData extends Error {
    constructor(msg) {
        super()
        this.name = 'noName'
        this.message = msg
    }
}
var somebug = new NoData('sfasdflkljjjj')

try {
    throw somebug
} catch(e) {
    console.log(e.name); //CustomError
    console.log(e.message); //wtf
    // console.log(e.stack);
}

