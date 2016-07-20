

const exec = require('child_process').exec;
const os = require('os')


exec('wmic csproduct get UUID', (error, stdout, stderr) => {
	if (error) {
		console.log(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout} stderr: ${stderr}`);
})

console.log(`arch: ${os.arch()} & platform: ${os.platform()}`)
