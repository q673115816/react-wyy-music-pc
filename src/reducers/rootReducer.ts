import { combineReducers, ReducersMapObject } from 'redux';

const requireContext = require.context('./', true, /^\.\/.*\/index\.ts$/);

const modules: ReducersMapObject = {}

requireContext.keys().forEach((key) => {
  const mod = requireContext(key);
  modules[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default : mod;
});

export default combineReducers(modules);
