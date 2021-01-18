const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const base = require('./webpack.base.js');

console.log('entry webpack prod');

const prod = {
  mode: 'production',
  output: {
    publicPath: './',
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    // library: '[name]_[fullhash]',
  },

  module: {
    rules: [

    ],
  },
  // devtool: 'source-map',
  plugins: [

  ],
};
module.exports = merge(base, prod);
// module.exports = function (env = {}, argv) {
//   if (env.analyse === true) {
//     prod.plugins.push(new BundleAnalyzerPlugin());
//   }

//   // return config;
// };
