import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';


const root: ReducersMapObject = {}

const requireContext = require.context('./', true, /^\.\/.*\/slice\.ts$/);

requireContext.keys().forEach((key) => {
  const mod = requireContext(key);
  root[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default.reducer : mod.reducer;
});

// const modules = import.meta.globEager('./*/index.ts')

// for(const path in modules) {
//   root[path.slice(2, -9)] = modules[path].default.reducer
// }

export default combineReducers(root);
