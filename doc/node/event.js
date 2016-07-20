// 'use strict' // node v^4.0.0 need
const fs = require('fs');

const EventEmitter = require('events');
const util = require('util');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
	
	setImmediate(() => {
		console.log('setImmediate');
	})

	console.log(a, b, this);
});

myEmitter.emit('event', 'aa', 'bb');

// console.log(util.inspect(myEmitter, {
//     showHidden: true,
//     colors: true
// }));



// Process
// const fork = require('child_process')


fs.readdir('.', (err, files) => {
	console.log(files)
})