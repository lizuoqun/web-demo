var http = require('http')
var Slisten = require('./serverlisten')

var server = http.createServer();

Slisten.bind(server);


server.listen(8080, () => {
	console.log("success！ go to 127.0.0.1:8080")
})
