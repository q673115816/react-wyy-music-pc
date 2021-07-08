import { combineReducers, ReducersMapObject } from 'redux';


const root: ReducersMapObject = {}

const requireContext = require.context('./', true, /^\.\/.*\/index\.ts$/);

requireContext.keys().forEach((key) => {
  const mod = requireContext(key);
  root[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default : mod;
});

// const modules = import.meta.globEager('./*/index.ts')

// for(const path in modules) {
//   root[path.slice(2, -9)] = modules[path].default
// }

export default combineReducers(root);
