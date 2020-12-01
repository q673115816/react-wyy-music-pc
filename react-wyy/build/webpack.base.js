const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');

const { src, img, dist } = require('./util');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../public/index.html'),
    // publicPath: '/'
  }),
  // new webpack.DllPlugin({
  //   name: '[name]_[fullhash]',
  //   path: path.join(dist, '[name]-manifest.json'),
  //   context: __dirname,
  // }),
  // new webpack.DllReferencePlugin({
  //   context: __dirname,
  //   manifest: require('../dist/vendor-manifest.json'),
  // }),
  // new HappyPack({
  //   id: 'js',
  //   loaders: ['babel-loader?cacheDirectory'],
  // }),
];

module.exports = {
  // target: 'web',
  entry: path.join(src, 'index.js'),
  // entry: {
  //   index: path.join(src, 'index.js'),
  // vendor: [
  //   'react',
  //   'react-dom',
  //   'react-router-dom',
  // ],
  // },
  output: {
    publicPath: '/',
    path: dist,
    filename: '[name].[chunkhash:8].js',
    // library: '[name]_[fullhash]',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          // name: module => `vendor.${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]}`
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': src,
      '@img': img,
    },
    extensions: [
      '.jsx',
      '.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        // 缓存
        use: ['babel-loader?cacheDirectory=true'],
        // happypack
        // loader: 'happypack/loader?id=js',
        // use: 'happypack/loader?id=js',

      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192,
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|appcache|svg)\??.*$/,
        // exclude: [/^node_modules$/, path.resolve(__dirname, '../src/svg')],
        use: [{
          loader: 'file-loader',
          // options: {
          //   name: "[name].[ext]",
          //   outputPath: "static/fonts/"
          // }
        }],
      },
    ],
  },
  plugins,
};
