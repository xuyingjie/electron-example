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
