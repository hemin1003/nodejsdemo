var express = require('express');

var app = express();

app.get('/', function(req, resp){
	resp.send('hello demo2');
});

app.post('/', function(req, resp){
	resp.send('hello post demo2');
});

app.get('/list_user', function(req, resp){
	resp.send('list_user');
});

app.get('/add_user', function(req, resp){
        resp.send('add_user');
});

app.get('/update_user', function(req, resp){
        resp.send('update_user');
});

app.get('/delete_user', function(req, resp){
        resp.send('delete_user');
});

var server = app.listen(8082, function(){
	console.log('server is running demo2');

});


