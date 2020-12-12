const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

console.log('entry webpack dev');

const dev = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].[hash:8].js',
  },
  devServer: {
    // contentBase: content,
    // hot: true,
    hotOnly: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
  // devtool: 'source-map',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(base, dev);
