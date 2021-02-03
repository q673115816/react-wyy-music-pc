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
    favicon: path.join(__dirname, '../public/favicon.ico'),
    template: path.join(__dirname, '../public/index.html'),
    title: '网易云音乐',
    cdn: {
      js: [
        'https://cdn.jsdelivr.net/npm/react/umd/react.development.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.min.js',
        'https://cdn.jsdelivr.net/npm/react-router-dom/umd/react-router-dom.min.js',
        'https://cdn.jsdelivr.net/npm/react-router/umd/react-router.min.js',
        'https://cdn.jsdelivr.net/npm/redux/dist/redux.min.js',
        'https://cdn.jsdelivr.net/npm/react-redux/dist/react-redux.min.js',
        'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',
        'https://cdn.jsdelivr.net/npm/@tabler/icons/icons-react/dist/index.umd.min.js',
      ],
      css: [
        'https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css',
        'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css',
      ],
    },
    // publicPath: '/'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[name].[contenthash:8].css',
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
      cacheGroups: {
        // defaultVendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   reuseExistingChunk: true,
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
        swiper: {
          name: 'swiper',
          test: /[\\/]node_modules[\\/]_?swiper(.*)/,
        },
        'qrcode.react': {
          name: 'qrcode',
          test: /[\\/]node_modules[\\/]_?qrcode.react(.*)/,
        },
      },
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
  // externalsType: 'script',
  externals: {
  // swiper: 'Swiper',
    // swiper: {
    //   root: ['Swiper', 'swiper/react'],
    // },
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    '@tabler/icons': 'tablerIcons',
    redux: 'Redux',
    // swiper: /^swiper$/,
  // react: ['https://cdn.jsdelivr.net/npm/react/umd/react.development.min.js', 'React'],
  // 'react-dom': ['https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.min.js', 'ReactDOM'],
  // 'react-router-dom': ['https://cdn.jsdelivr.net/npm/react-router-dom/umd/react-router-dom.min.js', 'ReactDOM'],
  // 'react-router': ['https://cdn.jsdelivr.net/npm/react-router/umd/react-router.min.js', 'ReactRouter'],
  // redux: ['https://cdn.jsdelivr.net/npm/redux/dist/redux.min.js', 'Redux'],
  // 'react-redux': ['https://cdn.jsdelivr.net/npm/react-redux/dist/react-redux.min.js', 'ReactRedux'],
  // 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',
  // '@tabler/icons': ['https://cdn.jsdelivr.net/npm/@tabler/icons/icons-react/dist/index.umd.min.js', 'Redux'],
  },
  // externals: [
  //   'react-router',
  //   'react-router-dom',
  //   'react',
  //   'react-dom',
  //   'react-redux',
  //   '@tabler/icons',
  //   'redux',
  // ],
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
            ? {
              loader: MiniCssExtractPlugin.loader,
              // options: {
              //   publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/css`,
              // },
            }
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
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        type: 'asset',
        generator: {
          // [ext]前面自带"."
          filename: 'assets/images/[name].[hash:8][ext]',
        },
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       limit: 8192,
        //       outputPath: 'assets/images',
        //     },
        //   },
        // ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|appcache)\??.*$/,
        type: 'asset',
        generator: {
          // [ext]前面自带"."
          filename: 'assets/fonts/[name].[hash:8][ext]',
        },
        // exclude: [/^node_modules$/, path.resolve(__dirname, '../src/svg')],
        // use: [{
        // loader: 'file-loader',
        // options: {
        //   name: "[name].[ext]",
        //   outputPath: "static/fonts/"
        // }
        // }],
      },
    ],
  },
  plugins,
};
