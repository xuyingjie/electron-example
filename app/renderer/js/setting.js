const {ipcRenderer, remote} = require('electron')
const {BrowserWindow, Menu, MenuItem} = remote;

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

// 右键 menu
const menu = new Menu();
menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked'); }}));
menu.append(new MenuItem({type: 'separator'}));
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);