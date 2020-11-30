import { combineReducers } from 'redux';
// import common from './common';
// import play from './play';
// import home from './home';
// import toplistartist from './toplistartist';
// import playlistdetail from './playlistdetail';

const requireContext = require.context('./reducers', true, /^\.\/.*\/index\.js$/);
const modules = {};
requireContext.keys().forEach((key) => {
  const mod = requireContext(key);
  modules[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default : mod;
});
export default combineReducers(modules);
