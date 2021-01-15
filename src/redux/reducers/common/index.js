import {
  ADD_SONG_URL, DIALOG_LOGIN_VISIBILTY, SET_COUNTRIES_CODE_LIST, SET_IS_LOGIN, SET_NOT_LOGIN,
  SET_POPUP,
  SET_MSG_PRIVATE,
  SET_SEARCH_HISTORY,
  SET_SEARCH_VALUE,
  SET_TOAST,
} from '@/redux/actionTypes';

import { LOCALSTORAGE } from '@/common/utils';

const initialState = {
  currentSong: {},
  playlist: [],
  history: [],
  searchHistory: LOCALSTORAGE('searchHistory', []),
  popupStatus: 'false',
  newMsgCount: 0,
  countriesCodeList: [],
  loginVisibility: false,
  searchValue: '',
  // isLogin: window.localStorage.getItem('cookie') !== null,
  isLogin: false,
  msgs: [],
  comments: [],
  forwards: [],
  notices: [],
  toast: { title: null },
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
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };
    case SET_SEARCH_HISTORY:
      window.localStorage.setItem('searchHistory', JSON.stringify(action.payload));
      return {
        ...state,
        searchHistory: action.payload,
      };
    case ADD_SONG_URL:
      return {
        ...state,
        currentSong: action.payload.songs[0],
        playlist: state.playlist.concat(action.payload.songs),
      };
    case SET_COUNTRIES_CODE_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case DIALOG_LOGIN_VISIBILTY:
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
