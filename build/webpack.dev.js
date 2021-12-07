const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");

const base = require("./webpack.base");
const { src } = require("./util");

console.log("entry webpack dev");

const dev = {
  mode: "development",
  output: {
    publicPath: "/",
    filename: "[name].[fullhash:8].js",
    path: path.join(__dirname, "../dist"),
  },
  devServer: {
    // contentBase: content,
    /** "hot: true" automatically applies HMR plugin,
     * you don't have to add it manually to your webpack configuration. */
    // hot: true,
    // host: '0.0.0.0',
    // https: true,
    // hotOnly: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        include: src,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, "../public/favicon.ico"),
      template: path.join(__dirname, "../public/index.html"),
      title: "网易云音乐",
    }),
  ],
  // devtool: 'source-map',
  devtool: "cheap-module-source-map",
};

module.exports = merge(base, dev);
