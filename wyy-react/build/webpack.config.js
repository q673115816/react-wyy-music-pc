const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const dev = require('./webpack.dev')
const prod = require('./webpack.pord')
module.exports = function (env ={}, argv) {
    const isProduction = env === 'production'
    const setting = !isProduction ? dev : prod
    return merge(base, setting)
}