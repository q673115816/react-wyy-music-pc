const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require('./webpack.base.js');
const { dist } = require('./util');

console.log('entry webpack prod');
const prod = {
  mode: 'production',
  // output: {
  //   publicPath: '/',
  //   path: dist,
  //   filename: '[name].[chunkhash:8].js',
  // },
  externals: {
    // swiper: 'Swiper',
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-redux': 'react-redux',
    // 'react-router-dom': 'react-router-dom',
    // 'redux': 'redux',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            // publicPath: path.join(dist, 'assets/css'),
            // publicPath: 'assets/css',
            // },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
      // publicPath: path.join(dist, 'assets/css'),
    }),
  ],
};
module.exports = merge(base, prod);
// module.exports = function prod(env = {}, arvg) {
// if (env.analyse === true) {
//   config.plugins.push(new BundleAnalyzerPlugin());
// }
//   return config;
// };
