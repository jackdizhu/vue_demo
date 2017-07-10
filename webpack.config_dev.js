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
        filename: '[name].js',
        library: '[name].js',
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
            // 使用vue-loader 加载 .vue 结尾的文件
            {
             test: /\.vue$/,
             loader: ['vue-loader']
            }
        ],
    },
    plugins:[
        // 拆分插件
        new webpack.optimize.CommonsChunkPlugin({
            name:'user', // 上面入口定义的节点组
            filename:'build-user.js' //最后生成的文件名
        }),
    ]
    // plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
}
