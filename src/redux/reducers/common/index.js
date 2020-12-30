import {
  ADD_SONG_URL, DIALOG_LOGIN_VISIBILTY, SET_COUNTRIES_CODE_LIST, SET_IS_LOGIN, SET_NOT_LOGIN,
  SET_POPUP,
  SET_MSG_PRIVATE,
} from '@/redux/actionTypes';

const initialState = {
  currentSong: {},
  playlist: [],
  history: [],
  searchHistory: [],
  msgs: [],
  popupStatus: 'false',
  newMsgCount: 0,
  countriesCodeList: [],
  dialog_login_visibility: false,
  // isLogin: window.localStorage.getItem('cookie') !== null,
  isLogin: false,
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
        dialog_login_visibility: !state.dialog_login_visibility,
      };
    default:
      return state;
  }
};
