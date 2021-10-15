const fs = require('fs')

fs.writeFile("./file.txt", "this is write text", function(err) {
	if (!err) {
		console.log("success")
	} else {
		console.log(err)
	}
})
