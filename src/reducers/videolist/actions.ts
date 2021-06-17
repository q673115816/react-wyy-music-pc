import { SET_VIDEO_LIST_INIT, SET_VIDEO_LIST_ID } from './actionTypes';

export const setVideoListInit = (payload) => ({
  type: SET_VIDEO_LIST_INIT,
  payload,
});

export const setVideoListId = (payload) => ({
  type: SET_VIDEO_LIST_ID,
  payload,
});
