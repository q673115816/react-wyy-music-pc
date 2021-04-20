import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_THEME,
  SET_FONT,
  SET_CUSTOM,
  SET_HOMEORDER,
} from './actionTypes';

const defaultOrder = ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '主播电台', '看看'];

const theme = LOCALSTORAGE('theme', 'EC4141');
const custom = LOCALSTORAGE('custom', false);
const font = LOCALSTORAGE('font', 'inherit');
const homeOrder = LOCALSTORAGE('homeOrder', defaultOrder);

const initialState = {
  theme,
  custom,
  font,
  homeOrder,
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_THEME:
      window.localStorage.setItem('theme', JSON.stringify(action.payload));
      draft.theme = action.payload;
      break;
    case SET_CUSTOM:
      window.localStorage.setItem('custom', JSON.stringify(action.payload));
      draft.custom = action.payload;
      break;
    case SET_FONT:
      window.localStorage.setItem('font', JSON.stringify(action.payload));
      draft.font = action.payload;
      break;
    case SET_HOMEORDER:
      window.localStorage.setItem('homeOrder', JSON.stringify(action.payload));
      draft.homeOrder = action.payload;
    default:
  }
}, initialState);
