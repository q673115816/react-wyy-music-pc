/* eslint-disable */
import { resolve } from 'path';
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacyPlugin from '@vitejs/plugin-legacy';

// const alias = {
// 'api': path.resolve(__dirname, './src/api'),
// 'assets': path.resolve(__dirname, './src/assets'),
// 'common': path.resolve(__dirname, './src/common'),
// 'components': path.resolve(__dirname, './src/components'),
// 'hooks': path.resolve(__dirname, './src/hooks'),
// 'Issues': path.resolve(__dirname, './src/Issues'),
// 'layout': path.resolve(__dirname, './src/layout'),
// 'pages': path.resolve(__dirname, './src/pages'),
// 'reducers': path.resolve(__dirname, './src/reducers'),
// 'router': path.resolve(__dirname, './src/router'),
// 'styles': path.resolve(__dirname, './src/styles'),
// '@': path.resolve(__dirname, 'src'),
// '@img': path.resolve(__dirname, 'src/assets/images'),
// }

const alias = {
  '@': resolve(__dirname, 'src'),
  '@img': resolve(__dirname, 'src/assets/images'),
}

export default defineConfig({
  base: './',
  root: './',

  plugins: [
    reactRefresh(),
    legacyPlugin({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        polyfills: true
      })
  ],
  server: {
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias
  },
  optimizeDeps: {
    exclude: []
  }
})
