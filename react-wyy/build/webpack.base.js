const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {src, root} = require('./util')

module.exports = {
    target: 'web',
    entry: path.join(src, 'index.js'),

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    // name: module => `vendor.${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]}`
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': src,
            'root': root
        },
        extensions: [
            '.jsx',
            '.js'
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        // 'react-redux': 'react-redux',
        // 'react-router-dom': 'react-router-dom',
        // 'redux': 'redux',
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
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            // publicPath: '/'
        })
    ],
}