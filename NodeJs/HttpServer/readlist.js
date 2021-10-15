var fs = require('fs')
var template = require('art-template');
var moment = require('moment')

fs.readdir('./', 'utf8', (err, data) => {
	console.log(data)

	for (var i = 0; i < data.length; i++) {
		(function(i) {
			fs.stat(data[i], (err, data) => {
				//console.log(data)
				console.log('文件大小 = ' + data.size)
				//console.log('最后修改时间 = ' + data.mtime)
				var mtime = moment(data.mtime).format('YYYY-MM-DD hh:mm:ss')
				console.log('最后修改时间 = ' + mtime)
				if (data.isFile()) {
					console.log('文件类型 = file')
				} else {
					console.log('文件类型 = 文件夹')
				}
				console.log()
			})
		})
		(i)
	}
})
