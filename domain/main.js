var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();
var domain1 = domain.create();

emitter1.on('error', function(err){
	console.log("监听器处理此错误=" + err.message);
});

domain1.on('error', function(err){
	console.log('domain1 handles this error=' + err.message);
});
//显示绑定
domain1.add(emitter1);

emitter1.emit('error', new Error('通过监听器来处理'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('Throught domain1'));

var domain2 = domain.create();

domain2.on('error', function(err){
	console.log('domain2 handles this error=' + err.message);
});

//隐式绑定
domain2.run(function(){
	var emitter2 = new EventEmitter();
	emitter2.emit('error', new Error('throught domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('转换为异常，系统将奔溃'));

