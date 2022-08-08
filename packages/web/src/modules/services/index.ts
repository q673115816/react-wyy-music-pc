import { Api } from "@reduxjs/toolkit/dist/query/apiTypes";
export const services = {};
export const middlewares = [];

const modules = import.meta.glob("./**/api.ts", { eager: true });

for (const path in modules) {
  const { api } = modules[path];
  middlewares.push(api.middleware);
  services[api.reducerPath] = api.reducer;
}
