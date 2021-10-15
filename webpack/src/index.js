/**
 * webpack 起点文件
 * */

/**
 * 运行指令
 * 开发环境
 * webpack ./src/index.js -o ./build --mode=development
 * 将 index.js 做为入口文件进行打包，打包到./build/main.js
 * */

import data from './data.json'
import './index.css'
import './demo.less'

console.log(data)

function add(a, b) {
	return a + b
}

console.log(add(1, 5))
