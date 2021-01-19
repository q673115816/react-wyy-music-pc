const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');

const { src, img } = require('./util');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../public/index.html'),
    title: '网易云音乐',
    // publicPath: '/'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[name].[contenthash:8].css',
    // publicPath: path.join(dist, 'assets/css'),
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
];

module.exports = {
  target: 'web',
  // entry: path.join(src, 'index.js'),
  entry: {
    index: path.join(src, 'index.js'),
    // vendor: [
    // 'swiper',
    // 'react',
    // 'react-dom',
    // 'react-router-dom',
    // ],
  },

  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //       // name: module => `vendor.${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]}`
    //     },
    //   },
    // },
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      minSize: 0,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
      // cacheGroups: {
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,
      //     // cacheGroupKey here is `commons` as the key of the cacheGroup
      //     name(module, chunks, cacheGroupKey) {
      //       const moduleFileName = module.identifier().split('/').reduceRight((item) => item);
      //       const allChunksNames = chunks.map((item) => item.name).join('~');
      //       return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
      //     },
      //     chunks: 'all',
      //   },
      // },
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
  externals: {
    // swiper: ['Swiper', 'SwiperCore'],
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    '@tabler/icons': 'tablerIcons',
    redux: 'Redux',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        // 缓存
        // use: ['babel-loader?cacheDirectory=true'],
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
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
