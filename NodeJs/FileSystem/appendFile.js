const fs = require('fs')

fs.appendFile('file.txt', 'this is appendfile function', (err) => {
	if (!err) {
		console.log("append success!")
	}
})
