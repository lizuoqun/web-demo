var http = require('http');
var fs = require('fs')
var server = http.createServer();

server.on('request', function(res, resp) {
	console.log(res.url);
	var urls = res.url;
	if (urls == '/') {
		resp.setHeader('Content-type', 'text/html;charset=utf-8')
		fs.readFile('./http2.html', 'utf8', (err, data) => {
			resp.end(data);
		})
	} else {
		fs.readFile('.' + urls, (err, data) => {
			resp.end(data);
		})
	}
});

server.listen(8080, function() {
	console.log("localhost:8080")
});
