var art = require('./art')
var fs = require('fs')

module.exports.bind = function(server) {
	server.on('request', (request, response) => {
		var url = request.url
		if (url == '/') {
			//console.log(art.data)
			response.end(art.data)
		} else {
			fs.readFile('.' + url, (err, data) => {
				response.end(data)
			})
		}
	})
}
