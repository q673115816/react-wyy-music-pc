import {
  SET_LOGIN_VISIBILTY,
  SET_COUNTRIES_CODE_LIST,
  SET_IS_LOGIN,
  SET_NOT_LOGIN,
  SET_POPUP,
  SET_MSG_PRIVATE,
  SET_TOAST,
} from '@/redux/actionTypes';

const initialState = {
  history: [],
  popupStatus: 'false',
  newMsgCount: 0,
  countriesCodeList: [],
  loginVisibility: false,
  // isLogin: window.localStorage.getItem('cookie') !== null,
  isLogin: false,
  msgs: [],
  comments: [],
  forwards: [],
  notices: [],
  toast: { title: null },
  baseUrl: 'https://music.163.com',
  // toastVisibility: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case SET_MSG_PRIVATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_POPUP:
      return {
        ...state,
        ...action.payload,
      };
    case SET_NOT_LOGIN:
      return {
        ...state,
        isLogin: false,
      };
    case SET_COUNTRIES_CODE_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOGIN_VISIBILTY:
      return {
        ...state,
        loginVisibility: !state.loginVisibility,
      };
    case SET_TOAST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
