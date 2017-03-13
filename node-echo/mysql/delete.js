var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.0.152',
  user     : 'root',
  password : '123456',
  database : 'AylsonDev'
});

connection.connect();

var delSql = 'delete from sys_user where id=25';

//删
connection.query(delSql, function(err, result){
	if(err){
		console.log(err.message);
		return;
	}

	console.log('-----insert record----');
	console.log('insert id:', result);
	console.log('--------------------\n');
	
});

connection.end();
