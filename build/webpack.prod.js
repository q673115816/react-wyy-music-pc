const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack, DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const base = require('./webpack.base');

const { PUBLIC_URL } = process.env;

console.log('entry webpack prod');

const devMode = process.env.NODE_ENV !== 'production';

const minCdn = devMode ? '' : '.min';

const cdnBase = 'https://cdn.jsdelivr.net/npm';

const cdn = {
  js: [
    `${cdnBase}/axios/dist/axios${minCdn}.js`,
    `${cdnBase}/react/umd/react.development${minCdn}.js`,
    `${cdnBase}/react-dom/umd/react-dom.development${minCdn}.js`,
    `${cdnBase}/react-router-dom/umd/react-router-dom${minCdn}.js`,
    // `${cdnBase}/react-router/umd/react-router${minCdn}.js`,
    `${cdnBase}/redux/dist/redux${minCdn}.js`,
    `${cdnBase}/react-redux/dist/react-redux${minCdn}.js`,
    `${cdnBase}/@reduxjs/toolkit/dist/redux-toolkit.umd${minCdn}.js`,
    // `${cdnBase}/swiper/swiper-bundle${minCdn}.js`,
    `${cdnBase}/react-slick/dist/react-slick${minCdn}.js`,
    // `${cdnBase}/npm/react-id-swiper/lib/react-id-swiper${minCdn}.js`,
    `${cdnBase}/@tabler/icons/icons-react/dist/index.umd${minCdn}.js`,
    `${cdnBase}/immer/dist/immer.umd.development${minCdn}.js`,
  ],
  // css: [
  //   `${cdnBase}/tailwindcss/dist/tailwind.min.css`,
  //   `${cdnBase}/swiper/swiper-bundle.min.css`,
  //   `${cdnBase}/slick-carousel/slick/slick.min.css`,
  //   `${cdnBase}/slick-carousel/slick/slick-theme.min.css`,
  // ],
};

const meta = {
  author: 'q673115816',
  'x-dns-prefetch-control': {
    'http-equiv': 'x-dns-prefetch-control',
    content: 'on',
  },
};

// const prefetch = [
//   'rel="dns-prefetch" href="//q673115816.github.io"',
//   'rel="dns-prefetch" href="//q673115816.github.io/wyy-pc"',
//   'rel="dns-prefetch" href="//cdn.jsdelivr.net"',
//   'rel="dns-prefetch" href="//netease-cloud-music-api-mlkkrb7ge-q673115816.vercel.app"',
//   'rel="dns-prefetch" href="//p1.music.126.net"',
//   'rel="dns-prefetch" href="//p2.music.126.net"',
//   'rel="dns-prefetch" href="//p3.music.126.net"',
//   'rel="dns-prefetch" href="//m7.music.126.net"',
//   'rel="dns-prefetch" href="//m8.music.126.net"',
// ];

const filename = '404.html';

const plugins = [
  new Dotenv({
    path: '.env.remote',
  }),
  new HtmlWebpackPlugin({
    favicon: path.join(__dirname, '../public/favicon.ico'),
    template: path.join(__dirname, '../public/index.html'),
    title: '网易云音乐',
    cdn,
    // prefetch,
    meta,
    filename,
    base: {
      href: PUBLIC_URL,
    },
    publicPath: PUBLIC_URL,
  }),
];

const prod = {
  mode: 'production',
  output: {
    clean: true,
    publicPath: '/react-wyy-music-pc/',
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    // library: '[name]_[fullhash]',
  },
  externals: [
    {
      // 'swiper': ['Swiper', 'swiper-react'],
      // 'swiper': 'Swiper',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      immer: 'immer',
      redux: 'Redux',
      'react-redux': 'ReactRedux',
      '@reduxjs/toolkit': 'RTK',
      '@tabler/icons': 'tablerIcons',
      'react-slick': 'Slider',
      axios: 'axios',
    }],
  module: {
    rules: [
    ],
  },
  devtool: 'hidden-source-map',
  plugins,
};
module.exports = merge(base, prod);
