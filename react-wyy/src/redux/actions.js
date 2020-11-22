import {
  ADD_COUNT,
  GET_VIDEO_GROUP_LIST,
  DIALOG_LOGIN_VISIBILTY,
  GET_HOME_TOP_ARTISTS
} from "./actionTypes";
export const addplay = () => ({
  type: ADD_COUNT,
  payload: {}
});

export const getvideogrouplist = (list) => {
  return {
    type: GET_VIDEO_GROUP_LIST,
    payload: {
      list
    }
  };
};

export const dialogloginvisibilty = () => {
  return {
    type: DIALOG_LOGIN_VISIBILTY
  };
};

export const gethometopartists = (artists) => {
  return {
    type: GET_HOME_TOP_ARTISTS,
    payload: {
      artists
    }
  };
};
