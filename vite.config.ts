/* eslint-disable */
import { resolve} from 'path';
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacyPlugin from '@vitejs/plugin-legacy';

// let alias = {
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
// console.log(resolve(__dirname, 'src/'));

const alias = [
  {
    find: /@(?:\/)/,
    replacement: resolve(__dirname, 'src'),
  }
]

defineConfig({
  base: './',
  root: './',
  plugins: [
    reactRefresh(),
    legacyPlugin()
  ],
  server: {
    // port: 8080
  },
  resolve: {
    alias
  }
})
