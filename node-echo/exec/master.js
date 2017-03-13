//child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++){
	var workerProcess = child_process.exec('node support.js '+i, 
		function(error, stdout, stderr){
			if(error){
				console.log(error.stack);
				console.log('error code=' + error.code);
				console.log('signal received=' + error.signal);
			}
			console.log('stdout=' + stdout);
			console.log('stderr=' + stderr);
		});
	workerProcess.on('exit', function(code){
		console.log('the sub process is stopped. the code=' + code);	
	});
}
