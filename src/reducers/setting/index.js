import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_THEME,
  SET_FONT,
  SET_HOMEORDER,
} from './actionTypes';

const defaultOrder = ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '主播电台', '看看'];

const initialState = {
  theme: LOCALSTORAGE('theme', 'themeRed'),
  font: LOCALSTORAGE('font', 'inherit'),
  homeOrder: LOCALSTORAGE('homeOrder', defaultOrder),
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_THEME:
      window.localStorage.setItem('theme', JSON.stringify(action.payload));
      draft.theme = action.payload;
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
