const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.base');

const serverConf = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  // entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
};
module.exports = merge(base, serverConf);
