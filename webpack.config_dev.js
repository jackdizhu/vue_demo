const webpack = require('webpack')
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _path = './public/';

module.exports = {
    entry: {
        index: _path + 'src/index.js',
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, './'),
        // 正常配置
        // publicPath: 'dist/',
        // php 服务器配置
        publicPath: '../dist/',
        filename: 'js/[name].js',
        library: 'js/[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        // loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
                        loader: 'style-loader!css-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader?limit=8192&name=img/[name].[hash:8].[ext]',
                    },
                ],
            },
            {
    　　　　　　test: /\.html$/,
    　　　　　　loader: 'html-withimg-loader'
    　　　　},
            // 使用vue-loader 加载 .vue 结尾的文件
            {
             test: /\.vue$/,
             loader: ['vue-loader']
            }
        ],
    },
    resolve: {
        alias: {
            vue: path.resolve(__dirname,_path + 'dist/js/vue/vue.js'), //webpack打包时，需要设置别名
            store: '../../store' //设置别名
        }
    },
    // 配置外部模块
    // externals: {
    //     vue: "window.Vue"
    // }
    plugins.push(
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: _path + 'dist/html/index.html', //生成的html存放路径，相对于 path
            template: _path + 'src/html/index.html', //html模板路径
        })
    )
    // plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
}
