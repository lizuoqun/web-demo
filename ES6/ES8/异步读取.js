const fs = require('fs')

function read1() {
	return new Promise((resolve, reject) => {
		fs.readFile('./君子有所为.md', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

function read2() {
	return new Promise((resolve, reject) => {
		fs.readFile('./唯见青山不见君.md', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

function read3() {
	return new Promise((resolve, reject) => {
		fs.readFile('./我见众生皆草木.md', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

// async
async function read() {
	let r1 = await read1();
	let r2 = await read2()
	let r3 = await read3()
	console.log(r1 + r2 + r3)
}

read()
