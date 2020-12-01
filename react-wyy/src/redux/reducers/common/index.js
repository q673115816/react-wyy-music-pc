import { ADD_SONG_URL, DIALOG_LOGIN_VISIBILTY, SET_COUNTRIES_CODE_LIST } from '@/redux/actionTypes';

const initialState = {
  currentSong: {},
  playlist: [],
  apiCountriesCodeList: [],
  dialog_login_visibility: false,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
