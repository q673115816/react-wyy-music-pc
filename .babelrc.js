const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        "useBuiltIns": "usage",
        "corejs": "3", // 声明corejs版本
      }
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // ["@babel/plugin-syntax-decorators", { "legacy": true }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    // 'add-module-exports'// 结构使用default导出
    isDevelopment && 'react-refresh/babel',
  ].filter(Boolean)
}
