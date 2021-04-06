import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

const path = require('path');

export default defineConfig({
  // root: '../public/index.html',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@img': path.resolve(__dirname, '/src/assets/images'),
    },
  },

  plugins: [reactRefresh(), legacy({
    targets: ['defaults', 'not IE 11'],
  })],
});
