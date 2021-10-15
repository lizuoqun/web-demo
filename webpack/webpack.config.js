/**
 * 使用path的resolve进行拼接绝对路径
 * */

const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'main.js',
        // 路径
        path: resolve(__dirname, 'build')
    },
    // loader
    module: {
        rules: [{
            // 匹配哪些文件
            test: /\.css$/,
            // 使用哪些loader进行处理
            use: [
                // 从下到上进行执行
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                // 大小限制，大于 8k 改成 base64
                limit: 8 * 1024,
                // esModule: false,
                // name: '[hash:2].[ext]'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 模式 （开发、生产）
    //  mode: 'development'
}