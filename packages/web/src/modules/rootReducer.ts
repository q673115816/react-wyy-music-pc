import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";

const root: ReducersMapObject = {};

// const requireContext = require.context(
//   "./reducers",
//   true,
//   /^\.\/.*\/slice\.ts$/
// );

// requireContext.keys().forEach((key) => {
//   const mod = requireContext(key);
//   root[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default : mod;
// });

const modules = import.meta.globEager("./reducers/*/slice.ts");

for (const path in modules) {
  root[path.slice(11, -9)] = modules[path].default;
}

console.log(root);

export default root;
