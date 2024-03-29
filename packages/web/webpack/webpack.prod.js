const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { src } = require("./util");

const { VITE_PUBLIC_URL, NODE_ENV } = process.env;

console.log("entry webpack prod");

const cdnBase = "https://cdn.jsdelivr.net/npm";

const cdn = {
  js: [
    `${cdnBase}/axios/dist/axios.min.js`,
    `${cdnBase}/lodash/lodash.min.js`,
    `${cdnBase}/web-vitals/dist/web-vitals.umd.min.js`,
    `${cdnBase}/rxjs/dist/bundles/rxjs.umd.js`,
    `${cdnBase}/store2/dist/store2.min.js`,
    `${cdnBase}/react/umd/react.production.min.js`,
    `${cdnBase}/react-dom/umd/react-dom.production.min.js`,
    `${cdnBase}/history/umd/history.production.min.js`,
    `${cdnBase}/react-router/umd/react-router.production.min.js`,
    `${cdnBase}/react-router-dom/umd/react-router-dom.production.min.js`,
    `${cdnBase}/react-transition-group/dist/react-transition-group.min.js`,
    `${cdnBase}/redux/dist/redux.min.js`,
    `${cdnBase}/react-redux/dist/react-redux.min.js`,
    `${cdnBase}/@reduxjs/toolkit/dist/redux-toolkit.umd.min.js`,
    // `${cdnBase}/@reduxjs/toolkit/dist/query/rtk-query.umd.js`,
    `${cdnBase}/redux-persist/dist/redux-persist.min.js`,
    `${cdnBase}/react-slick/dist/react-slick.min.js`,
    `${cdnBase}/@tabler/icons/icons-react/dist/index.umd.min.js`,
    `${cdnBase}/immer/dist/immer.umd.development.min.js`,
    `${cdnBase}/socket.io-client/dist/socket.io.min.js`,
    `https://webrtc.github.io/adapter/adapter-latest.js`,
  ],
  // css: [
  //   `${cdnBase}/tailwindcss/dist/tailwind.min.css`,
  //   `${cdnBase}/swiper/swiper-bundle.min.css`,
  //   `${cdnBase}/slick-carousel/slick/slick.min.css`,
  //   `${cdnBase}/slick-carousel/slick/slick-theme.min.css`,
  // ],
};

const meta = {
  author: "q673115816",
  "x-dns-prefetch-control": {
    "http-equiv": "x-dns-prefetch-control",
    content: "on",
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

const filename = "404.html";

const plugins = [
  new HtmlWebpackPlugin({
    favicon: path.join(__dirname, "../public/favicon.ico"),
    template: path.join(__dirname, "../public/index.html"),
    title: "网易云音乐",
    cdn,
    // prefetch,
    meta,
    filename,
    base: {
      href: VITE_PUBLIC_URL,
    },
    publicPath: VITE_PUBLIC_URL,
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "css/[name].css?version=[contenthash:8]",
    chunkFilename: "css/[name].css?version=[contenthash:8]",
  }),
];

const externals = [
  {
    // 'swiper': ['Swiper', 'swiper-react'],
    // 'swiper': 'Swiper',
    lodash: "_",
    "web-vitals": "webVitals",
    react: "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    "react-transition-group": "ReactTransitionGroup",
    history: "HistoryLibrary",
    immer: "immer",
    redux: "Redux",
    "react-redux": "ReactRedux",
    "@reduxjs/toolkit": "RTK",
    // "@reduxjs/toolkit/query/react": "RTKQ",
    "redux-persist": "ReduxPersist",
    "@tabler/icons": "tablerIcons",
    "react-slick": "Slider",
    axios: "axios",
    "socket.io-client": "io",
    "webrtc-adapter": "adapter",
    store: "store",
    rxjs: "rxjs",
  },
];

const prod = {
  mode: "production",
  output: {
    clean: true,
    publicPath: VITE_PUBLIC_URL,
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].js?version=[chunkhash:8]",
    // library: '[name]_[fullhash]',
  },
  externals,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // devtool: "hidden-source-map",
  devtool: "source-map",
  plugins,
};
module.exports = merge(base, prod);
