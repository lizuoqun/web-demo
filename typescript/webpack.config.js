const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    // 入口
    entry: './src/index.ts',
    // 输出
    output: {
        // 输出文件名
        filename: 'main.js',
        // 路径
        path: resolve(__dirname, 'build'),
        // 兼容老版本IE 去掉打包后的箭头函数
        environment: {
            arrowFunction: false
        }
    },
    // loader
    module: {
        rules: [{
            // 匹配哪些文件
            test: /\.ts$/,
            // 使用哪些loader进行处理
            use: [
                // {
                //     //指定加载器
                //     loader: "babel-loader",
                //     // 设置babel
                //     options: {
                //         //设置预定义的环境
                //         presets: [
                //             [
                //                 //指定环境的插件
                //                 "@babel/preset-env",
                //                 // 配置信息
                //                 {
                //                     // 要兼容的目标浏览器及版本
                //                     targets: {
                //                         "chrome": "88",
                //                         // "ie": "11"
                //                     },
                //                     //指定corejs的版本
                //                     "corejs": "3",
                //                     //使用corejs的方式 "usage"  表示按需加载
                //                     "useBuiltIns": "usage"
                //                 }

                //             ]
                //         ]
                //     }
                // },
                'babel-loader',
                'ts-loader'
            ],
            exclude: /node_modules/
        }]
    },
    plugins: [
        // 1、默认的html文件
        // new HtmlWebpackPlugin(),
        // 2、自定义内容
        // new HtmlWebpackPlugin({
        //     title:"this is title"
        // })
        // 3、使用模板
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // 表示哪些文件可以作为模块进行导入
    resolve: {
        extensions: ['.js', '.ts']
    },
}