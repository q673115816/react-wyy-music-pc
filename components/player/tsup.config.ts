import { defineConfig } from "tsup";
import svgrPlugin from "esbuild-plugin-svgr";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  esbuildPlugins: [svgrPlugin()],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: [
    "cjs",
    "esm",
    // "iife"
  ],
  legacyOutput: true,
  minify: !options.watch,
  treeshake: true,
}));
