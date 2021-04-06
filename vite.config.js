/* eslint-disable */
import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacyPlugin from '@vitejs/plugin-legacy';

// https://cn.vitejs.dev/config/
export default ({ command, mode }) => {
  let rollupOptions = {};


  let optimizeDeps = {};


  let alias = {
    'api': path.resolve(__dirname, './src/api'),
    'assets': path.resolve(__dirname, './src/assets'),
    'common': path.resolve(__dirname, './src/common'),
    'components': path.resolve(__dirname, './src/components'),
    'custom': path.resolve(__dirname, './src/custom'),
    'Issues': path.resolve(__dirname, './src/Issues'),
    'layout': path.resolve(__dirname, './src/layout'),
    'pages': path.resolve(__dirname, './src/pages'),
    'reducers': path.resolve(__dirname, './src/reducers'),
    'router': path.resolve(__dirname, './src/router'),
    'styles': path.resolve(__dirname, './src/styles'),
    '@': path.resolve(__dirname, 'src'),
    '@img': path.resolve(__dirname, 'src/assets/images'),
  }

  let proxy = {}

  let esbuild = {

  }

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
    },
    define: {
      'process.env.REACT_APP_IS_LOCAL': "'true'",
    },
    server: {
      // 代理
      proxy,
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'build', // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      reactRefresh(),
      legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        }
      }
    },
  }
}
