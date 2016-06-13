// 根据 json html 文件创建窗口

// require
const electron = require('electron');
const {app, BrowserWindow, ipcMain, globalShortcut, Menu, Tray} = electron;

// const path = require('path')
// const CONTENTS_PATH = `${__dirname}/renderer`;

// module.exports
module.exports = {
    
    create(name, {openDevTools = false} = {}) {
        const conf = require(`./conf/${name}.json`)
        let window = new BrowserWindow(conf)
        window.loadURL(`file://${__dirname}/renderer/${name}.html`)
        
        // webContents.on('dom-ready', () => {
        //     webContents.executeJavaScript('require("./index.js")')
        // })

        // window.on('closed', (e) => {
        //     console.log(window.id); // Object has been destroyed
        //     // window = null;
        // });

        if (openDevTools) {
            let webContents = window.webContents
            webContents.openDevTools()
            // console.log(webContents.id);
        }
        return window;
    },

    createTray(appTray) {
        appTray = new Tray(`${__dirname}/renderer/fluidicon.png`)
        const contextMenu = Menu.buildFromTemplate([
            {label: 'Item1', type: 'radio'},
            {label: 'Item2', type: 'radio'},
            {label: 'Item3', type: 'radio', checked: true},
            {label: 'Item4', type: 'radio'}
        ]);
        appTray.setToolTip('This is my application.');
        appTray.setContextMenu(contextMenu);
        return appTray;
    },

    createShortcut(window) {
        globalShortcut.unregister('Ctrl+Shift+1'); // Unregister a shortcut.
        globalShortcut.unregisterAll(); // Unregister all shortcuts.

        globalShortcut.register('Ctrl+Shift+1', () => {
            // 通过ipc从主进程发送消息到渲染进程
            window.webContents.send('global-shortcut', 0);
        })
    }
}
