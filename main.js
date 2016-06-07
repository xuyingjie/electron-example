const electron = require('electron');
const {app, BrowserWindow, ipcMain, globalShortcut} = electron;

const configuration = require('./configuration')

let win;
let settingWindow = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        resizable: false,
    });
    win.loadURL(`file://${__dirname}/app/index.html`);

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });


    if (!configuration.readSettings('shortcutKeys')) {
        configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
    }
    createShortcut(win);
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})



// 主进程（main.js）订阅「close-main-window」通道的消息，
// 渲染进程（index.js）通过通道发出消息。
ipcMain.on('close-main-window', () => {
    app.quit()
})

ipcMain.on('close-setting-window', () => {
    if (settingWindow) {
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
    settingWindow.loadURL(`file://${__dirname}/app/setting.html`)
    settingWindow.on('closed', () => {
        settingWindow = null
    })
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