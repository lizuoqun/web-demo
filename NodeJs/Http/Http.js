var http = require('http');

var server = http.createServer();

server.on('request', function(res, resp) {
	console.log(res.method);
	resp.write("hello changsha");
	resp.end();
});

server.listen(8080, function() {
	console.log("localhost:8080")
});
