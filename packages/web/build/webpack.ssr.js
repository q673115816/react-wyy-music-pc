const webpack = require("webpack");
const { DefinePlugin } = webpack;
const merge = require("webpack-merge");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const base = require("./webpack.base");
const { src, img } = require("./util");

const proConfig = require("../src/share/pro-config");

const isProd = process.env.NODE_ENV === "production";

const ssr = {
  mode: "node",
  target: "node",
  entry: path.join(src, "./entry.server.tsx"),
  output: {
    clean: true,
    filename: "js/[name].js?version=[chunkhash:8]",
    path: path.join(__dirname, "../dist"),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      // {
      //   test: /.(png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       emitFile: false,
      //       name: isProd ? "img/[name].[hash:8].[ext]" : "img/[name].[ext]",
      //       publicPath: isProd
      //         ? "/"
      //         : `http://${__LOCAL_IP__}:${proConfig.wdsPort}`,
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new DefinePlugin({
      __IS_PROD__: isProd,
      __SERVER__: true,
    }),
  ],
};

module.exports = merge(base, ssr);
