const fs = require('fs')

//读取文件
// fs.readFile('./君子有所为.md', (err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString())
// })

// 使用Promise 进行封装

const p = new Promise(function(resolve, reject) {
	fs.readFile('./../君子有所为.md', (err, data) => {
		if (err) reject(err);
		if (data) resolve(data.toString())
	})
})

p.then(function(value) {
	console.log(value)
}, function(reason) {
	console.log(reason)
})
