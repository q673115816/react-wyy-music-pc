const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const { src, img } = require('./util');

console.log('entry webpack dev');

const dev = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].[hash:8].js',
  },
  devServer: {
    // contentBase: content,
    hot: true,
    // hotOnly: true,
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(src, 'styles/_global.scss'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
  // devtool: 'source-map',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(base, dev);
