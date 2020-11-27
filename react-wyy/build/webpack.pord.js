const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { dist } = require('./util');

const config = {
  mode: 'production',
  output: {
    publicPath: '/',
    path: dist,
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [

  ],
};

module.exports = (env = {}, arvg) => {
  if (env.analyse === true) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
