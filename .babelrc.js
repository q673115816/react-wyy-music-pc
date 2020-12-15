module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    // ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // ["@babel/plugin-syntax-decorators", { "legacy": true }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
  ]
}
