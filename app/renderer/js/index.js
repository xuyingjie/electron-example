"use strict"

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



// web workers

const fibonacci = document.querySelector('#fibonacci')
fibonacci.addEventListener('click', () => {
    // var worker = new Worker("./js/fibonacci.js");

    // worker.onmessage = function(event) {
    //   document.getElementById("result").textContent = event.data;
    //   console.log("Got: " + event.data + "\n");
    // };

    // worker.onerror = function(error) {
    //   console.log("Worker error: " + error.message + "\n");
    //   throw error;
    // };

    // worker.postMessage("5");

    var worker = new Worker('./js/workers.js')
    worker.onmessage = function (event) {
        document.getElementById('result').textContent = event.data;
    };

})


// create and dispatch DOM events
// let event = new Event('loading.show')
// let m = {}
// m.addEventListener('loading.show', (e) => { //error
//     console.log('object');
//     console.log(e);
// }, false)

// const customEvent = document.querySelector('#custom-event')
// customEvent.addEventListener('click', () => {
//     m.dispatchEvent(event)
// })

// https://github.com/component/emitter/blob/master/index.js
class Ev {
    constructor() {
        this._callbacks = {}
    }
    on(event, cb) {
        (this._callbacks['$'+event] = this._callbacks['$'+event] || []).push(cb)
    }
    emit(event) {
        let args = [].slice.call(arguments, 1)
        let callbacks = this._callbacks['$'+event]
        if (callbacks) {
            callbacks.forEach((v, k) => {
                callbacks[k].apply(this, args)
            })
        }
    }
}
let ev = new Ev
ev.on('log.user', (msg) => console.log(msg))
const customEvent = document.querySelector('#custom-event')
customEvent.addEventListener('click', () => {
    ev.emit('log.user', 'hello events.')
})