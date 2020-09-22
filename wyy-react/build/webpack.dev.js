const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html')
        })
    ],
    devtool: 'cheap-module-source-map'
}