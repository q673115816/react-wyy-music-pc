import produce from 'immer';
import { SET_TOP_PLAYLIST, SET_PLAYLIST_CATLIST } from './actionTypes';

const initialState = {
  highquality: {},
  hot: {},
  catlist: {},
  playlists: {},
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_PLAYLIST_CATLIST:
      {
        const { hot, catlist } = action.payload;
        draft.hot = hot;
        draft.catlist = catlist;
      }
      break;
    case SET_TOP_PLAYLIST:
      {
        const { playlists, highquality } = action.payload;
        draft.playlists = playlists;
        draft.highquality = highquality;
      }
      break;
    default:
  }
}, initialState);

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case SET_PLAYLIST_CATLIST:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case SET_TOP_PLAYLIST:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };
