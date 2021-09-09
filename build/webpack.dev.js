const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
require('dotenv').config({
  path: '.env.local',
});
const base = require('./webpack.base');

const { PUBLIC_URL } = process.env;
console.log('entry webpack dev');

const dev = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].[fullhash:8].js',
    path: path.join(__dirname, '../dist'),
  },
  devServer: {
    // contentBase: content,
    hot: true,
    // host: '0.0.0.0',
    // https: true,
    // hotOnly: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      new DefinePlugin({
        PUBLIC_URL: JSON.stringify(PUBLIC_URL),
      }),
    ],
  },
  plugins: [
    // new Dotenv({
    //   path: '.env.local',
    // }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, '../public/favicon.ico'),
      template: path.join(__dirname, '../public/index.html'),
      title: '网易云音乐',
    }),
  ],
  // devtool: 'source-map',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(base, dev);
