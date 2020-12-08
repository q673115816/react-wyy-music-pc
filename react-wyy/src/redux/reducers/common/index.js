import {
  ADD_SONG_URL, DIALOG_LOGIN_VISIBILTY, SET_COUNTRIES_CODE_LIST, SET_IS_LOGIN, SET_NOT_LOGIN,
} from '@/redux/actionTypes';

const initialState = {
  currentSong: {},
  playlist: [],
  apiCountriesCodeList: [],
  dialog_login_visibility: false,
  isLogin: window.localStorage.getItem('cookie') !== null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: true,
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
        apiCountriesCodeList: action.payload.data,
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
