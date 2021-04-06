const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

module.exports = (env = {}, argv) => {
  console.log(env, argv);
  const { mode } = argv;
  const isProduction = mode === 'production';
  const setting = isProduction ? prod : dev;
  return merge(base, setting);
};
