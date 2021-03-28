import produce, { enableMapSet } from 'immer';
import {
  SET_LOGIN_INFO,
  SET_LIKELIST,
  SET_LIKELIST_ADD,
  SET_LIKELIST_DEL,
  SET_ARTIST_SUBLIST,
  SET_TOPIC_SUBLIST,
  SET_ALBUM_SUBLIST,
  SET_MV_SUBLIST,
} from './actionTypes';

enableMapSet();

const initialState = {
  profile: {},
  playlist: [],
  bindings: [],
  likelist: new Set(),
  artistSublist: [],
  topicSublist: [],
  albumSublist: [],
  mvSublist: [],
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      draft.likelist = new Set(action.payload.likelist);
      draft.artistSublist = action.payload.artistSublist;
      draft.topicSublist = action.payload.topicSublist;
      draft.albumSublist = action.payload.albumSublist;
      draft.mvSublist = action.payload.mvSublist;
      break;
    case SET_LIKELIST:
      draft.likelist = action.payload.likelist;
      break;
    case SET_LIKELIST_ADD:
      draft.likelist.add(action.payload.id);
      break;
    case SET_LIKELIST_DEL:
      draft.likelist.delete(action.payload.id);
      break;
    case SET_ARTIST_SUBLIST:
      draft.artistSublist = action.payload.artistSublist;
      break;
    case SET_TOPIC_SUBLIST:
      draft.topicSublist = action.payload.topicSublist;
      break;
    case SET_ALBUM_SUBLIST:
      draft.albumSublist = action.payload.albumSublist;
      break;
    case SET_MV_SUBLIST:
      draft.mvSublist = action.payload.mvSublist;
      break;
    default:
      break;
  }
}, initialState);
