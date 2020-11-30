const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { src, img } = require('./util');

module.exports = {
  target: 'web',
  entry: path.join(src, 'index.js'),

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
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      // publicPath: '/'
    }),
  ],
};
