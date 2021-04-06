import { combineReducers } from 'redux';

// const requireContext = require.context('./', true, /^\.\/.*\/index\.js$/);
// const modules = {};
// requireContext.keys().forEach((key) => {
//   const mod = requireContext(key);
//   modules[key.slice(2, -9)] = mod.__esModule && mod.default ? mod.default : mod;
// });
import account from './account';
import artist from './artist';
import audio from './audio';
import common from './common';
import exclusive from './exclusive';
import friend from './friend';
import home from './home';
import inset from './inset';
import letter from './letter';
import local from './local';
import mask from './mask';
import mvlist from './mvlist';
import search from './search';
import setting from './setting';
import videolist from './videolist';
import volume from './volume';

const modules = {
  account,
  artist,
  audio,
  common,
  exclusive,
  friend,
  home,
  inset,
  letter,
  local,
  mask,
  mvlist,
  search,
  setting,
  videolist,
  volume,
};

export default combineReducers(modules);
