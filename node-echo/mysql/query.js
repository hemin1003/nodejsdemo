var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.0.152',
  user     : 'root',
  password : '123456',
  database : 'AylsonDev'
});

connection.connect();

var  sql = 'SELECT * FROM sys_user';

//查
connection.query(sql, function(err, result){
	if(err){
		console.log(err.message);
		return;
	}

	console.log('-----------');
	console.log(result);
	console.log('-----------');
});

connection.end();
