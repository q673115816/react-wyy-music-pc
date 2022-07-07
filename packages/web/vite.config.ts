import { resolve } from "path";
import { ConfigEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ mode, command }: ConfigEnv) => {
  const isDev = mode === "development";
  return defineConfig({
    base: "/",
    define: {},
    plugins: [
      react(),
      legacyPlugin({
        // additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        // polyfills: true,
      }),
      visualizer(),
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
      assetsDir: "static/assets",
      rollupOptions: {
        output: {
          // chunkFileNames: "static/js/[name].js?version=[hash]",
          // entryFileNames: "static/js/[name].js?version=[hash]",
          // assetFileNames: "static/[ext]/[name].[ext]?version=[hash]",
        },
        external: [
          // "react",
          // "react-dom",
          // "react-router",
          // "react-router-dom",
          // "immer",
          // "redux",
          // "react-redux",
          // "@reduxjs/toolkit",
          // "@tabler/icons",
          // "react-slick",
          // "axios",
          // "socket.io-client",
          // "webrtc-adapter",
        ],
        plugins: [],
      },
    },
  });
};
