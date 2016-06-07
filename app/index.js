const {ipcRenderer} = require('electron')

const close = document.querySelector('#close')
close.addEventListener('click', () => {
    ipcRenderer.send('close-main-window')
})

const setting = document.querySelector('#setting')
setting.addEventListener('click', () => {
    ipcRenderer.send('open-setting-window')
})


// 
ipcRenderer.on('global-shortcut', (event, message) => {
    console.log(message)
})