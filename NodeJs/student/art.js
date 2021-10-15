var template = require('art-template')

var linkdb = require('./linkdb')

template.defaults.root = './';

linkdb.query(function(data) {

	module.exports.data = template('./index.html', {
		data: linkdb.data,
	});

	//console.log(typeof data)
	//console.log(data[0])
})

var str = template('./index.html', {
	indexdata: linkdb.data
});

console.log(str)