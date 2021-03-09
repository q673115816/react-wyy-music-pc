import { SET_EXCLUSIVE_RESULT_ADD, SET_EXCLUSIVE_RESULT_EMPTY, SET_EXCLUSIVE_SCROLLTOP } from './actionTypes';

export const setExclusiveResultAdd = (payload) => ({
  type: SET_EXCLUSIVE_RESULT_ADD,
  payload,
});

export const setExclusiveResultEmpty = () => ({
  type: SET_EXCLUSIVE_RESULT_EMPTY,
});

export const setExclusiveScrollTop = (payload) => ({
  type: SET_EXCLUSIVE_SCROLLTOP,
  payload,
});
