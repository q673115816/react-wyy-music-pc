import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
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
