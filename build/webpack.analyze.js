const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prod = require('./webpack.prod.js');

console.log('entry webpack analyze');

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
