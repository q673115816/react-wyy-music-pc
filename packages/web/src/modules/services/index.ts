import { Api } from "@reduxjs/toolkit/dist/query/apiTypes";
const root = {};

const modules = import.meta.glob("./**/api.ts", { eager: true });

for (const path in modules) {
  root[path.slice(2, -7)] = modules[path].api;
}
export default root;
