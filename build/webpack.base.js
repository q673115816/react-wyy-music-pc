const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');

const { src, img } = require('./util');

const devMode = process.env.NODE_ENV !== 'production';

const minCdn = devMode ? '' : '.min';

const cdn = {
  js: [
    `https://cdn.jsdelivr.net/npm/react/umd/react.development${minCdn}.js`,
    `https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development${minCdn}.js`,
    `https://cdn.jsdelivr.net/npm/react-router-dom/umd/react-router-dom${minCdn}.js`,
    // `https://cdn.jsdelivr.net/npm/react-router/umd/react-router${minCdn}.js`,
    `https://cdn.jsdelivr.net/npm/redux/dist/redux${minCdn}.js`,
    `https://cdn.jsdelivr.net/npm/react-redux/dist/react-redux${minCdn}.js`,
    // `https://cdn.jsdelivr.net/npm/swiper/swiper-bundle${minCdn}.js`,
    // `https://cdn.jsdelivr.net/npm/react-id-swiper/lib/react-id-swiper${minCdn}.js`,
    `https://cdn.jsdelivr.net/npm/@tabler/icons/icons-react/dist/index.umd${minCdn}.js`,
  ],
  css: [
    'https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css',
    'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css',
  ],
};

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    favicon: path.join(__dirname, '../public/favicon.ico'),
    template: path.join(__dirname, '../public/index.html'),
    title: '网易云音乐',
    cdn,
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
  //   path: path.join(__dirname, '../dll/[name]-manifest.json'),
  //   context: __dirname,
  // }),
  // new webpack.DllReferencePlugin({
  //   context: __dirname,
  //   manifest: require('../dll/vendor-manifest.json'),
  // }),
];

module.exports = {
  target: 'web',
  // entry: path.join(src, 'index.js'),
  entry: {
    index: path.join(src, 'index.jsx'),
    // vendor: [
    //   'swiper',
    //   'qrcode.react',
    //   'react',
    //   'react-dom',
    //   'react-router-dom',
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
        //   name: 'common',
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
        lodash: {
          name: 'lodash',
          test: /[\\/]node_modules[\\/]_?lodash(.*)/,
        },
        swiper: {
          name: 'swiper',
          test: /[\\/]node_modules[\\/]_?swiper(.*)/,
          // priority: -10,
        },
        'qrcode.react': {
          name: 'qrcode',
          test: /[\\/]node_modules[\\/]_?qrcode.react(.*)/,
          // priority: -10,
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
  externals: [
    {
      // swiper: ['Swiper', 'swiper-react'],
      // swiper: 'Swiper',
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
    }],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        use: [
          devMode
            ? 'style-loader' : {
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
