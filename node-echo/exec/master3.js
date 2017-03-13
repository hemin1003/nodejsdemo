const child_process = require('child_process');

for(var i=0; i<3; i++){
	var workerProcess = child_process.fork("support3.js", [i]);
	
	workerProcess.on('close', function(code){
		console.log('the sub process is stopped. the code=' + code);
	});
}
