const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const base = require("./webpack.base");

const ssr = {
  mode: "node",
  target: "node",
  externals: [nodeExternals()],
  // entry: './src/server/index.js',
  output: {
    clean: true,
    path: path.join(__dirname, "../dist"),
    filename: "[name].[chunkhash:8].js",
  },
};
module.exports = merge(base, ssr);
