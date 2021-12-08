/* eslint-disable */
import { resolve } from "path";
import { ConfigEnv, defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacyPlugin from "@vitejs/plugin-legacy";
import createExternal from "vite-plugin-external";

export default ({ mode, command }: ConfigEnv) => {
  const isDev = mode === "development";
  return defineConfig({
    base: isDev ? "/" : "/",
    plugins: [
      reactRefresh(),
      legacyPlugin({
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        polyfills: true,
      }),
      createExternal({
        externals: {
          react: "React",
        },
        // development: {
        //   externals: {
        //     react: "$linkdesign.React",
        //   },
        // },
      }),
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
      rollupOptions: {
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
          // "react-query",
        ],
        plugins: [],
      },
    },
  });
};
