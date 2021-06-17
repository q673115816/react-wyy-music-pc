import {
  SET_IS_LOGIN,
  SET_NOT_LOGIN,
  SET_MSG_PRIVATE,
  SET_COUNTRIES_CODE_LIST,
  SET_LOGIN_VISIBILTY,
} from './actionTypes';

export const setIsLogin = () => ({
  type: SET_IS_LOGIN,
});

export const setNotLogin = () => ({
  type: SET_NOT_LOGIN,
});

export const setMsgPrivate = (payload) => ({
  type: SET_MSG_PRIVATE,
  payload,
});

export const setContriesCodeList = (payload) => ({
  type: SET_COUNTRIES_CODE_LIST,
  payload,
});

export const setLoginVisibilty = () => ({
  type: SET_LOGIN_VISIBILTY,
});
