const fs = require('fs')

fs.readFile("file.txt", 'utf-8', (err, data) => {

	data += " hello changsha .";

	console.log("read");

	fs.writeFile("./file.txt", data, function(err) {
		if (!err) {
			console.log("success")
		} else {
			console.log(err)
		}
	})

})


