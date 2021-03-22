// const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    // 允许js 中写jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 换行符问题
    'linebreak-style': [0, 'error', 'windows'],
    // postcss 配置文件引入问题
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 0,
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: {
  //         resolve: {
  //           alias: {
  //             '@': './src',
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};
