import {
  SET_MVLIST_INIT,
  SET_MVLIST_TOPAREA_INIT,
  SET_MVLIST_FIRSTAREA_INIT,
} from './actionTypes';

export const setMVlistInit = (payload) => ({
  type: SET_MVLIST_INIT,
  payload,
});

export const setMVlistTopareaInit = (payload) => ({
  type: SET_MVLIST_TOPAREA_INIT,
  payload,
});
export const setMVlistFirstareaInit = (payload) => ({
  type: SET_MVLIST_FIRSTAREA_INIT,
  payload,
});
