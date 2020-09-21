const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const dev = require('./webpack.dev')
const prod = require('./webpack.pord')
const environment = process.env.NODE_ENV || 'development'
const isProduction = environment === 'production'
const setting = !isProduction ? dev: prod
module.exports = merge(base, setting)