var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp){
	console.log("cookies", req.cookies);
});

app.listen(8081);
