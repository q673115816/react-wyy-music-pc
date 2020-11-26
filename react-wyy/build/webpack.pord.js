const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { dist } = require('./util');

const config = {
  mode: 'production',
  output: {
    publicPath: '/',
    path: dist,
    filename: '[name].[chunkhash:8].js',
  },
  // devtool: 'source-map',
  plugins: [

  ],
};

module.exports = (env = {}, arvg) => {
  console.log(env);
  if (env.analyse === true) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
