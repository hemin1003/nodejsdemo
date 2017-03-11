var fs = require('fs');
var data = "this is node write test";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on('finish', function(){
	console.log('write is done');
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("the task is done");


