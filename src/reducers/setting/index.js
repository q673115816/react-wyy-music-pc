import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_THEME,
  SET_FONT,
  SET_HOMEORDER,
} from './actionTypes';

const initialState = {
  theme: LOCALSTORAGE('theme', 'themeRed'),
  font: LOCALSTORAGE('font', 'inherit'),
  homeOrder: LOCALSTORAGE('homeOrder', ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '主播电台', '看看']),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      window.localStorage.setItem('theme', JSON.stringify(action.payload));
      return {
        ...state,
        theme: action.payload,
      };
    case SET_FONT:
      window.localStorage.setItem('font', JSON.stringify(action.payload));
      return {
        ...state,
        font: action.payload,
      };
    case SET_HOMEORDER:
      window.localStorage.setItem('homeOrder', JSON.stringify(action.payload));
      return {
        ...state,
        homeOrder: action.payload,
      };
    default:
      return state;
  }
};
