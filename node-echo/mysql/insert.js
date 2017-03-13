var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.0.152',
  user     : 'root',
  password : '123456',
  database : 'AylsonDev'
});

connection.connect();

var addSql = 'INSERT INTO sys_user(userName,pwd,type,status,roleId,roleName) VALUES (?, ?, ?, ?, ?, ?)';
var sqlParams = ['hemin','123',1,2,3,'admin'];



//增
connection.query(addSql, sqlParams, function(err, result){
	if(err){
		console.log(err.message);
		return;
	}

	console.log('-----insert record----');
	console.log('insert id:', result);
	console.log('--------------------\n');
	
});


connection.end();
