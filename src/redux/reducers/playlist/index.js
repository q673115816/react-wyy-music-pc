import { SET_AUDIO_IMMEDIATE } from '@/redux/actionTypes';

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
    default:
      return state;
  }
};
