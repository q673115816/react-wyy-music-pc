import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

/**
 * GitHub Pages SPA 回退：
 * 以 index.html 作为构建入口，构建完成后复制为 404.html。
 * 这样 dist 同时包含 index.html（根路径 200）和 404.html（深链接回退）。
 */
export default (): Plugin => ({
  name: "copy-index-to-404",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(process.cwd(), "dist");
    const index = path.join(dist, "index.html");
    const fallback = path.join(dist, "404.html");

    if (!fs.existsSync(index)) {
      console.warn("[copy-404] dist/index.html not found, skip");
      return;
    }

    fs.copyFileSync(index, fallback);
    console.log("[copy-404] dist/index.html -> dist/404.html");
  },
});
