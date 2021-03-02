import {
  SET_LOGIN_INFO,
  SET_LIKELIST,
  SET_ARTIST_SUBLIST,
  SET_TOPIC_SUBLIST,
  SET_ALBUM_SUBLIST,
  SET_MV_SUBLIST,
} from './actionTypes';

const initialState = {
  profile: {},
  playlist: [],
  bindings: [],
  likelist: [],
  artistSublist: [],
  topicSublist: [],
  albumSublist: [],
  mvSublist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LIKELIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ARTIST_SUBLIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_TOPIC_SUBLIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ALBUM_SUBLIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_MV_SUBLIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
