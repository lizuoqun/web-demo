const fs = require('fs');

// fs.readFile('./君子有所为.md', (err, data1) => {
// 	fs.readFile('./我见众生皆草木.md', (err, data2) => {
// 		fs.readFile('./唯见青山不见君.md', (err, data3) => {
// 			console.log(data1 + data2 + data3)
// 		})
// 	})
// })

// 使用Promise
const p = new Promise((resolve, reject) => {
	fs.readFile('./君子有所为.md', (err, data) => {
		resolve(data.toString()) // 使用toString转字符串，或者使用 +'' 进行字符串拼接
	})
})

// p.then((value, reason) => {
// 	console.log(value)
// })

p.then((value, reason) => {
	return new Promise((resolve, reject) => {
		fs.readFile('./我见众生皆草木.md', (err, data) => {
			resolve(value + data)
		})
	})
}).then((value, reason) => {
	return new Promise((resolve, reject) => {
		fs.readFile('./唯见青山不见君.md', (err, data) => {
			let res = value + data
			resolve(res)
			console.log(res)
		})
	})
})
