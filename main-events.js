var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('connect successfully');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log('data is already done');
});

eventEmitter.emit('connection');

console.log('task is done');
