const {ipcRenderer, remote} = require('electron')
const BrowserWindow = remote.BrowserWindow

const close = document.querySelector('#close')
close.addEventListener('click', () => {
    ipcRenderer.send('close-setting-window')
})


// remote
const cha = document.querySelector('#cha')
cha.addEventListener('click', () => {

    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL('https://github.com')

    // ipcRenderer.send('change-shortcut')
})