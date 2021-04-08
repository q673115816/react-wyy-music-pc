const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'swiper',
      'qrcode.react',
      // 'react',
      // 'react-dom',
      // 'react-router-dom',
    ],
  },
  output: {
    path: path.join(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: path.join(__dirname, '../dll/[name]-manifest.json'),
      context: __dirname,
    }),
  ],
};
