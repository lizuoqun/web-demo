var template = require('art-template');

template.defaults.root = './';

var  str = template('./art.html',{value:'zhangsan'});

console.log(str)