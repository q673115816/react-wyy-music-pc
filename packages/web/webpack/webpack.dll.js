const webpack = require("webpack");
const { DllPlugin } = webpack;
const path = require("path");

module.exports = {
  entry: {
    vendor: [
      // 'swiper',
      "qrcode.react",
      // 'react',
      // 'react-dom',
      // 'react-router-dom',
    ],
  },
  output: {
    path: path.join(__dirname, "../dll"),
    filename: "[name].dll.js",
    library: "[name]_library",
  },
  plugins: [
    new DllPlugin({
      name: "[name]_[fullhash]",
      path: path.join(__dirname, "../dll/[name]-manifest.json"),
      context: __dirname,
    }),
  ],
};
