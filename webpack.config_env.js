const webpack = require('webpack')
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var _path = './public/';
var demo_num = '09';

module.exports = {
    entry:
    // [_path + 'src/index.js',_path + 'src/css/base.css'],
    {
        index: _path + 'src/index'+demo_num+'.js',
    },
    // devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, './'),
        // 正常配置
        // publicPath: 'dist/',
        // php 服务器配置
        publicPath: '../dist/',
        filename: 'js/index'+demo_num+'/[name].js?v=[chunkhash:8]', // 每小块 单独的 hash 值
        // filename: 'js/[name].js?' + new Date().getTime(), // 时间戳 版本号
        library: 'js/index'+demo_num+'/[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: ['url-loader?limit=8192&name=./img/[name].[hash:8].[ext]'],
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
            store: '../../store', //设置别名
            img: path.resolve(__dirname,_path + 'src/img')
        }
    },
    // 配置外部模块
    // externals: {
    //     vue: "window.Vue"
    // }
    plugins:[
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            // filename: path.resolve(__dirname, _path + 'dist/html/demo'+demo_num+'.html'), //生成的html存放路径，相对于 path
            filename: '../html/demo'+demo_num+'.html', //生成的html存放路径，相对于 path
            template: path.resolve(__dirname, _path + 'src/html/demo'+demo_num+'.html'), //html模板路径
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}
