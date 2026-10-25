import path from "node:path";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { copy404Plugin } from "./vite/index";

const src = path.resolve(process.cwd(), "src");
const images = path.resolve(process.cwd(), "src/assets/images");

// GitHub Pages 项目站点需要子路径；本地/自定义域名仍用根路径
const base =
  process.env.VITE_BASE ??
  (process.env.GITHUB_ACTIONS ? "/react-wyy-music-pc/" : "/");

export default ({ mode }: ConfigEnv) => {
  const isAnalyze = mode === "analyze";
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    base,
    define: {
      PUBLIC_URL: JSON.stringify(env.VITE_PUBLIC_URL),
      LIVE_URL: JSON.stringify(env.VITE_LIVE_URL),
      API_URL: JSON.stringify(env.VITE_API_URL),
      WYY_VERSION: JSON.stringify("0.0.1"),
    },
    plugins: [
      react(),
      tailwindcss(),
      copy404Plugin(),
      isAnalyze &&
        visualizer({
          filename: "stats.html",
          open: false,
        }),
    ],
    server: {
      host: true,
      port: 8080,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": src,
        "@img": images,
      },
    },
    build: {
      emptyOutDir: true,
      chunkSizeWarningLimit: 1200,
      rolldownOptions: {
        output: {
          chunkFileNames: "assets/js/[name].[hash].js",
          entryFileNames: "assets/js/[name].[hash].js",
          assetFileNames: "assets/[ext]/[name].[hash].[ext]",
          codeSplitting: {
            groups: [
              {
                name: "react",
                test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              },
              {
                name: "router",
                test: /node_modules[\\/](react-router|@remix-run)[\\/]/,
              },
              {
                name: "state",
                test: /node_modules[\\/](@reduxjs|redux|react-redux|redux-persist|immer|reselect|zustand|use-sync-external-store)[\\/]/,
              },
              {
                name: "icons",
                test: /node_modules[\\/]@tabler[\\/]/,
              },
              {
                name: "ui",
                test: /node_modules[\\/](react-slick|slick-carousel|@dnd-kit|react-transition-group|qrcode\.react|react-error-boundary)[\\/]/,
              },
              {
                name: "utils",
                test: /node_modules[\\/](lodash|dayjs|axios|rxjs|color|classnames|react-use)[\\/]/,
              },
            ],
          },
        },
      },
    },
  });
};
