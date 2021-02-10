const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.js');
const { src, img } = require('./util');

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
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/css`,
            // },
          },
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
  // devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
};
module.exports = merge(base, prod);
// module.exports = function (env = {}, argv) {
//   if (env.analyse === true) {
//     prod.plugins.push(new BundleAnalyzerPlugin());
//   }

//   // return config;
// };
