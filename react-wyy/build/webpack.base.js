const path = require('path')
const root = path.join(__dirname, '../')
const src = path.join(__dirname, '../src')
module.exports = {
    entry: path.join(src, 'index.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': src
        },
        extensions: [
            '.jsx',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
}