import {
  SET_DRAG_INIT,
  SET_DRAG_UNLOAD,
} from './actionTypes';

export const setDragInit = (payload) => ({
  type: SET_DRAG_INIT,
  payload,
});

export const setDragUnload = () => ({
  type: SET_DRAG_UNLOAD,
});
