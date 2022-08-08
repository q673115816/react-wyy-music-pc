import { ReducersMapObject, combineReducers } from "@reduxjs/toolkit";

const root: ReducersMapObject = {};

const modules = import.meta.glob("./**/slice.ts", { eager: true });

for (const path in modules) {
  root[path.slice(2, -9)] = modules[path].default;
}
export default root;
