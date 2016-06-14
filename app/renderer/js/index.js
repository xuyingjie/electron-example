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

// model.on('log.user', _fn_log_user);
// model.emit('log.user', msg);
let ev = {
    name: [],
    cb: [],
    on(name, cb) {
        this.name.push(name)
        this.cb.push(cb)
    },
    emit(name, msg) {
        console.log(this.name);
        this.name.forEach((v, k) => {
            if (v === name) {
                console.log(this.cb[k]);
                this.cb[k].call(null, msg)
            }
        })
    }
}
ev.on('log.user', console.log)
console.log(ev);
const customEvent = document.querySelector('#custom-event')
customEvent.addEventListener('click', () => {
    ev.emit('log.user', 'hello events.')
})