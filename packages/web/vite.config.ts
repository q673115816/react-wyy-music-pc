import { resolve } from "path";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";
import { build } from "./vite";

export default ({ mode, command }: ConfigEnv) => {
  const isDev = mode === "development";
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    base: "/",
    define: {
      PUBLIC_URL: JSON.stringify(env.VITE_PUBLIC_URL),
      LIVE_URL: JSON.stringify(env.VITE_LIVE_URL),
      API_URL: JSON.stringify(env.VITE_API_URL),
      WYY_VERSION: JSON.stringify("0.0.1"),
    },
    plugins: [
      react(),
      legacyPlugin({
        // additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        // polyfills: true,
      }),
      mode === "analyze" && visualizer(),
    ],
    server: {
      port: 8080,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@img": resolve(__dirname, "src/assets/images"),
      },
    },
    optimizeDeps: {
      exclude: [],
    },
    build: {
      emptyOutDir: true,
      minify: "esbuild",
      // assetsDir: "static/assets",
      rollupOptions: {
        input: !isDev ? build().input : "",
        // input: {
        //   index: resolve(__dirname, "404.html"),
        // },
        output: {
          chunkFileNames: "assets/js/[name].[hash].js",
          entryFileNames: "assets/js/[name].[hash].js",
          assetFileNames: "assets/[ext]/[name].[hash].[ext]",
          // manualChunks(id: any) {
          //   if (id.includes("node_modules")) {
          //     return id
          //       .toString()
          //       .split("node_modules/")[1]
          //       .split("/")[0]
          //       .toString();
          //   }
          // },
          manualChunks: {
            lodash: ["lodash"],
            immer: ["immer"],
            react: ["react"],
            "qrcode.react": ["qrcode.react"],
            "react-dom": ["react-dom"],
            "react-use": ["react-use"],
            "react-transition-group": ["react-transition-group"],
            "react-router-dom": ["history", "react-router", "react-router-dom"],
            "react-redux": ["redux", "react-redux", "@reduxjs/toolkit"],
            "@tabler/icons": ["@tabler/icons"],
            "react-slick": ["react-slick"],
            axios: ["axios"],
            store: ["store2"],
            rxjs: ["rxjs"],
          },
        },
        external: [
          // "lodash",
          // "react",
          // "react-dom",
          // "history",
          // "react-router",
          // "react-router-dom",
          // "react-transition-group",
          // "immer",
          // "redux",
          // "react-redux",
          // "redux-persist",
          // "@reduxjs/toolkit",
          // "@tabler/icons",
          // "react-slick",
          // "axios",
          // "socket.io-client",
          // "webrtc-adapter",
          // "store",
          // "rxjs",
        ],
        plugins: [],
      },
    },
  });
};
