import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_GLOBAL_INSET,
  SET_GLOBAL_DRAGGER,
  SET_GLOBAL_RECT,
  SET_SCREEN_FULL,
  SET_SCREEN_NORMAL,
  SET_POSITION_TRUE,
  SET_POSITION_FALSE,
} from './actionTypes';

const initialState = {
  POSITION: true,
  SCREEN: 'normal',
  globalVisibility: false,
  globalDragger: false,
  globalX: LOCALSTORAGE('x', 0),
  globalY: LOCALSTORAGE('y', 0),
  globalWidth: LOCALSTORAGE('width', 1022),
  globalHeight: LOCALSTORAGE('height', 670),
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_GLOBAL_DRAGGER:
      draft.globalDragger = action.payload
      break;
    case SET_GLOBAL_INSET:
      window.localStorage.setItem('x', action.payload.x);
      window.localStorage.setItem('y', action.payload.y);
      draft.globalX = action.payload.x;
      draft.globalY = action.payload.y;
      break;
    case SET_GLOBAL_RECT:
      window.localStorage.setItem('width', action.payload.width);
      window.localStorage.setItem('height', action.payload.height);
      draft.globalWidth = action.payload.width;
      draft.globalHeight = action.payload.height;
      break;
    case SET_SCREEN_FULL:
      draft.SCREEN = 'full';
      break;
    case SET_SCREEN_NORMAL:
      draft.SCREEN = 'normal';
      break;
    case SET_POSITION_TRUE:
      draft.POSITION = true;
      break;
    case SET_POSITION_FALSE:
      draft.POSITION = false;
      break;
    default:
  }
}, initialState);
