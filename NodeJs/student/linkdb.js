var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'student'
});

connection.connect();

module.exports.query = function(callback) {
	var sql = 'SELECT * from t_gread';
	connection.query(sql, function(error, data) {
		//console.log(data)
		callback(data)
		//module.exports.data = data;

	});
}
