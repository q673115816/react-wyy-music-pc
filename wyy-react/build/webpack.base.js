const path = require('path')
const root = path.join(__dirname, '../')
module.exports = {
    entry: path.join(root, 'src/main.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': root
        },
        extensions: [
            '.jsx',
            '.js'
        ] 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}