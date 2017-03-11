function hello(){
	var name;
	this.setName = function(theName){
		name = theName;
	};
	this.sayHello = function(){
		console.log('hello ' + name);
	};
};

exports.world = function(){
	console.log('hello world');
};

module.exports = hello;
