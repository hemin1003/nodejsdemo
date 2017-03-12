var express = require('express');
var app = express();

app.use(express.static('../public'));

app.get('/', function(req,resp){
	resp.send('hello world demo3');
});

var server = app.listen(8083, function(){
	console.log('server is running demo3');
});
