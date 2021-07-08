const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        // modules: false,
        "useBuiltIns": "usage",
        "corejs": "3", // 声明corejs版本
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // ["@babel/plugin-syntax-decorators", { "legacy": true }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    // isDevelopment && 'react-refresh/babel',
  ]
  // .filter(Boolean)
}
