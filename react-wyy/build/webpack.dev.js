const path = require('path');
const webpack = require('webpack');
const { content, root } = require('./util');

module.exports = {
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
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
};
