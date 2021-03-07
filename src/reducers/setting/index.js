import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_THEME,
  SET_FONT,
} from './actionTypes';

const initialState = {
  theme: LOCALSTORAGE('theme', 'themeRed'),
  font: LOCALSTORAGE('font', 'inherit'),
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
    default:
      return state;
  }
};
