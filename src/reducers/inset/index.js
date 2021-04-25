import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_GLOBAL_INSET,
  SET_GLOBAL_START_INSET,
  SET_GLOBAL_DRAGGER,
  SET_GLOBAL_RESIZER,
  SET_GLOBAL_START_RECT,
  SET_GLOBAL_RECT,
  SET_SCREEN_FULL,
  SET_SCREEN_NORMAL,
  SET_POSITION_TRUE,
  SET_POSITION_FALSE,
  SET_GLOBAL_LRC_INSET,
  SET_GLOBAL_LRC_START_INSET,
} from './actionTypes';

const globalX = LOCALSTORAGE('x', 0);
const globalY = LOCALSTORAGE('y', 0);
const globalWidth = LOCALSTORAGE('width', 1022);
const globalHeight = LOCALSTORAGE('height', 670);
const globalLrcWidth = LOCALSTORAGE('lrcWidth', 550);
const globalLrcHeight = LOCALSTORAGE('lrcHeight', 100);
const globalLrcX = LOCALSTORAGE('lrcX', globalX + (globalWidth - globalLrcWidth) / 2);
const globalLrcY = LOCALSTORAGE('lrcY', globalY + globalHeight);
const initialState = {
  POSITION: true,
  SCREEN: 'normal',
  globalVisibility: false,
  globalDragger: false,
  globalStartX: 0,
  globalStartY: 0,
  globalBeforeX: globalX,
  globalBeforeY: globalY,
  globalX,
  globalY,

  globalStartWidth: globalWidth,
  globalStartHeight: globalHeight,
  globalBeforeWidth: globalWidth,
  globalBeforeHeight: globalHeight,
  globalWidth,
  globalHeight,

  globalStartLrcX: globalLrcX,
  globalStartLrcY: globalLrcY,
  globalBeforeLrcX: globalLrcX,
  globalBeforeLrcY: globalLrcY,
  globalLrcX,
  globalLrcY,
  globalLrcWidth,
  globalLrcHeight,
};

const MINWIDTH = 1022;
const MINHEIGHT = 670;

export default produce((draft, action) => {
  switch (action.type) {
    case SET_GLOBAL_DRAGGER:
      draft.globalDragger = action.payload;
      break;
    case SET_GLOBAL_RESIZER:
      draft.globalResizer = action.payload;
      break;
    case SET_GLOBAL_START_INSET:
      draft.globalStartX = action.payload.x;
      draft.globalStartY = action.payload.y;
      draft.globalBeforeX = draft.globalX;
      draft.globalBeforeY = draft.globalY;
      break;
    case SET_GLOBAL_INSET:
      {
        const x = action.payload.x - draft.globalStartX + draft.globalBeforeX;
        const y = action.payload.y - draft.globalStartY + draft.globalBeforeY;
        window.localStorage.setItem('x', x);
        window.localStorage.setItem('y', y);
        draft.globalX = x;
        draft.globalY = y;
      }
      break;
    case SET_GLOBAL_START_RECT:
      draft.globalStartWidth = action.payload.x;
      draft.globalStartHeight = action.payload.y;
      draft.globalBeforeWidth = draft.globalWidth;
      draft.globalBeforeHeight = draft.globalHeight;
      break;
    case SET_GLOBAL_RECT:
      {
        const x = action.payload.x - draft.globalStartWidth + draft.globalBeforeWidth;
        const y = action.payload.y - draft.globalStartHeight + draft.globalBeforeHeight;

        const nextwidth = x > MINWIDTH ? x : MINWIDTH;
        const nextheight = y > MINHEIGHT ? y : MINHEIGHT;
        window.localStorage.setItem('width', nextwidth);
        window.localStorage.setItem('height', nextheight);
        draft.globalWidth = nextwidth;
        draft.globalHeight = nextheight;
      }
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
    case SET_GLOBAL_LRC_START_INSET:
      draft.globalStartLrcX = action.payload.x;
      draft.globalStartLrcY = action.payload.y;
      draft.globalBeforeLrcX = draft.globalLrcX;
      draft.globalBeforeLrcY = draft.globalLrcY;
      break;
    case SET_GLOBAL_LRC_INSET:
      {
        const lrcX = action.payload.x - draft.globalStartLrcX + draft.globalBeforeLrcX;
        const lrcY = action.payload.y - draft.globalStartLrcY + draft.globalBeforeLrcY;
        window.localStorage.setItem('lrcX', lrcX);
        window.localStorage.setItem('lrcY', lrcY);
        draft.globalLrcX = lrcX;
        draft.globalLrcY = lrcY;
      }
      break;
    default:
  }
}, initialState);
