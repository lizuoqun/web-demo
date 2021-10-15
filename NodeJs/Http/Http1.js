var http = require('http');

var server = http.createServer();

server.on('request', function(res, resp) {
	console.log(res.method);

	resp.setHeader('Content-type', 'text/plain;charset=utf-8')
	resp.write("hello changsha");
	resp.write("你好 长沙")
	resp.end();
});

server.listen(8080, function() {
	console.log("localhost:8080")
});
