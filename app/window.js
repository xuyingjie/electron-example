// 根据 json html 文件创建窗口

// require
const electron = require('electron');
const {app, BrowserWindow, ipcMain, globalShortcut, Menu, Tray} = electron;

// const CONTENTS_PATH = `${__dirname}/renderer`;

// module.exports
module.exports = {
    
    create(name) {
        const conf = require(`./conf/${name}.json`)
        let window = new BrowserWindow(conf)
        window.loadURL(`file://${__dirname}/renderer/${name}.html`)
        window.on('closed', () => {
            window = null;
        });
        return window;
    }
}
