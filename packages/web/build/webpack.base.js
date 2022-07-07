// const { GenerateSW } = require("workbox-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");
require("./env")();
const { src, img } = require("./util");

const { VITE_PUBLIC_URL, VITE_LIVE_URL, VITE_API_URL, NODE_ENV } = process.env;
const plugins = [
  new DefinePlugin({
    PUBLIC_URL: JSON.stringify(VITE_PUBLIC_URL),
    LIVE_URL: JSON.stringify(VITE_LIVE_URL),
    API_URL: JSON.stringify(VITE_API_URL),
    NODE_ENV: JSON.stringify(NODE_ENV),
    GA_TRACKING_ID: JSON.stringify("G-JCYJ5YJR7G"),
  }),
  // new GenerateSW({
  //   // Do not precache images
  //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],
  //   // Define runtime caching rules.
  //   runtimeCaching: [{
  //     // Match any request that ends with .png, .jpg, .jpeg or .svg.
  //     urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
  //     // Apply a cache-first strategy.
  //     handler: 'CacheFirst',
  //     options: {
  //       // Use a custom cache name.
  //       cacheName: 'images',
  //       // Only cache 10 images.
  //       expiration: {
  //         maxEntries: 10,
  //       },
  //     },
  //   }],
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
  target: "web",
  entry: path.join(src, "./entry.client.tsx"),
  output: {
    globalObject: "this",
  },
  experiments: {
    topLevelAwait: true,
  },
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
    runtimeChunk: "single",
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
      chunks: "all",
      name: "vendors",
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
        "core-js": {
          name: "core-js",
          test: /[\\/]node_modules[\\/]_?core-js(.*)/,
        },
        dayjs: {
          name: "dayjs",
          test: /[\\/]node_modules[\\/]_?dayjs(.*)/,
        },
        sentry: {
          name: "sentry",
          test: /[\\/]node_modules[\\/]_?@sentry(.*)/,
        },
        "qrcode.react": {
          name: "qrcode",
          test: /[\\/]node_modules[\\/]_?qrcode.react(.*)/,
          // priority: -10,
        },
        "react-use": {
          name: "react-use",
          test: /[\\/]node_modules[\\/]_?react-use(.*)/,
        },
        components: {
          name: "components",
          test: path.resolve(src, "components"),
        },
        modules: {
          name: "modules",
          test: path.resolve(src, "modules"),
        },
        "@q673115816/pics-viewer": {
          name: "@q673115816/pics-viewer",
          test: /pics-viewer/,
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
      "@": src,
      "@img": img,
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  // externalsType: 'script',

  module: {
    rules: [
      {
        test: /\.worker\.[cm]?[jt]s$/i,
        include: src,
        use: [
          {
            loader: "worker-loader",
            // options: {
            // esModule: false,
            // filename: '[name].[contenthash].worker.js',
            // },
            // options: {
            //   name: '[name].work.[hash: 8].js',
            //   inline: true,
            // },
          },
          // {
          //   loader: 'babel-loader',
          // },
        ],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        // 缓存
        // use: ['babel-loader?cacheDirectory=true'],
        use: [
          {
            // loader: "babel-loader",
            loader: "swc-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        type: "asset",
        generator: {
          // [ext]前面自带"."
          filename: "assets/images/[name][ext]?version=[hash:8]",
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
        include: src,
        type: "asset",
        generator: {
          // [ext]前面自带"."
          filename: "assets/fonts/[name][ext]?version=[hash:8]",
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
