const path = require('path')
const { content } = require('./util')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    devServer: {
        // contentBase: content,
        // hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}