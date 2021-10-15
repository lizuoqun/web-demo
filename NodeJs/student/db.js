var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'student'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});


connection.query('SELECT sname from t_gread where java =75', function(error, results, fields) {
	if (error) throw error;
	console.log('error = ' + error)
	console.log('results = ' + results)
	console.log('fields = ' + fields)
});


connection.end()
