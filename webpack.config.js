var webpack = require('webpack')
var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR  = path.resolve(__dirname, 'src')
var STYLE_DIR = path.resolve(__dirname, 'style')

var config = {
    mode: 'none',
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/',
    },
    module:{
        rules: [{
            test: /\.js?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
                presets: ["react", "env"]
            }
        },
        {
            test: /\.css?/,
            include: [STYLE_DIR, /node_modules/],
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader', 
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        },
        {
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
    }
}

module.exports = config