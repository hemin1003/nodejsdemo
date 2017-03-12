var net = require('net');

var server = net.createServer(function(connection){
	console.log('client connected');
	connection.on('end', function(){
		console.log('client is closed');
	});
	connection.write('hello world');
	connection.pipe(connection);
});

server.listen(8080, function(){
	console.log('server is listening');
});
