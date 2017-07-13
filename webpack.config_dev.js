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
                        loader: 'style-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader?limit=8192&name=img/[name].[hash:8].[ext]',
                    },
                ],
            },
            // 使用vue-loader 加载 .vue 结尾的文件
            {
             test: /\.vue$/,
             loader: ['vue-loader']
            }
        ],
    },
    // plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
}
