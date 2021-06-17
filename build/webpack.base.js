const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const { src, img } = require('./util');

const devMode = process.env.NODE_ENV !== 'production';

const minCdn = devMode ? '' : '.min';

const cdnBase = '//cdn.jsdelivr.net';

const cdn = {
  js: [
    `https:${cdnBase}/npm/react/umd/react.development${minCdn}.js`,
    `https:${cdnBase}/npm/react-dom/umd/react-dom.development${minCdn}.js`,
    `https:${cdnBase}/npm/react-router-dom/umd/react-router-dom${minCdn}.js`,
    // `https:${cdnBase}/npm/react-router/umd/react-router${minCdn}.js`,
    `https:${cdnBase}/npm/redux/dist/redux${minCdn}.js`,
    `https:${cdnBase}/npm/react-redux/dist/react-redux${minCdn}.js`,
    // `https:${cdnBase}/npm/swiper/swiper-bundle${minCdn}.js`,
    `https:${cdnBase}/npm/react-slick/dist/react-slick${minCdn}.js`,
    // `https:${cdnBase}/npm/react-id-swiper/lib/react-id-swiper${minCdn}.js`,
    `https:${cdnBase}/npm/@tabler/icons/icons-react/dist/index.umd${minCdn}.js`,
    `https:${cdnBase}/npm/immer/dist/immer.umd.development${minCdn}.js`,
  ],
  css: [
    `https:${cdnBase}/npm/tailwindcss/dist/tailwind.min.css`,
    `https:${cdnBase}/npm/swiper/swiper-bundle.min.css`,
    `https:${cdnBase}/npm/slick-carousel@1.8.1/slick/slick.min.css`,
    `https:${cdnBase}/npm/slick-carousel/slick/slick-theme.min.css`,
  ],
};

const meta = {
  author: 'q673115816',
  'x-dns-prefetch-control': {
    'http-equiv': 'x-dns-prefetch-control',
    content: 'on',
  },
};

const prefetch = [
  'rel="dns-prefetch" href="//q673115816.github.io"',
  'rel="dns-prefetch" href="//q673115816.github.io/wyy-pc"',
  'rel="dns-prefetch" href="//cdn.jsdelivr.net"',
  'rel="dns-prefetch" href="//netease-cloud-music-api-mlkkrb7ge-q673115816.vercel.app"',
  'rel="dns-prefetch" href="//p1.music.126.net"',
  'rel="dns-prefetch" href="//p2.music.126.net"',
  'rel="dns-prefetch" href="//p3.music.126.net"',
  'rel="dns-prefetch" href="//m7.music.126.net"',
  'rel="dns-prefetch" href="//m8.music.126.net"',
];

const filename = '404.html';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    favicon: path.join(__dirname, '../public/favicon.ico'),
    template: path.join(__dirname, '../public/index.html'),
    // filename: '404.html',
    title: '网易云音乐',
    cdn,
    prefetch,
    // meta,
    // publicPath: '/'
    ...(devMode ? {} : { filename, publicPath: '/react-wyy-music-pc/' }),
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[name].[contenthash:8].css',
  }),
  // new webpack.DllPlugin({
  //   PUBLIC_PATH: '/react-wyy-music-pc/',
  //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  // }),
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
  entry: path.join(src, 'index.tsx'),
  // entry: {
  // index: path.join(src, 'index.jsx'),
  // vendor: [
  //   'swiper',
  //   'qrcode.react',
  //   'react',
  //   'react-dom',
  //   'react-router-dom',
  // ],
  // },

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
        // lodash: {
        //   name: 'lodash',
        //   test: /[\\/]node_modules[\\/]_?lodash(.*)/,
        // },
        // swiper: {
        //   name: 'swiper',
        //   test: /[\\/]node_modules[\\/]_?swiper(.*)/,
        //   // priority: -10,
        // },
        'core-js': {
          name: 'core-js',
          test: /[\\/]node_modules[\\/]_?core-js(.*)/,
        },
        dayjs: {
          name: 'dayjs',
          test: /[\\/]node_modules[\\/]_?dayjs(.*)/,
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
      '.tsx',
      '.ts',
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
      immer: 'immer',
      'react-slick': 'Slider',
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
              //   // publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/css`,
              //   publicPath: process.env.PUBLIC_PATH,
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
        test: /\.worker\.(c|m)?js$/i,
        use: [
          {
            loader: 'worker-loader',
            // options: {
            // esModule: false,
            // filename: '[name].[contenthash].worker.js',
            // },
          },
          // {
          //   loader: 'babel-loader',
          // },
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
