import { SET_AUDIO_IMMEDIATE, SET_AUDIO_RENNING } from '@/redux/actionTypes';

const initialState = {
  running: false,
  currentSong: {},
  playlist: [],
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO_IMMEDIATE:
      return {
        ...state,
        ...action.payload,
        playlist: [...state.playlist, action.payload.currentSong],
      };
    case SET_AUDIO_RENNING:
      return {
        ...state,
        running: action.payload.running,
      };
    default:
      return state;
  }
};
