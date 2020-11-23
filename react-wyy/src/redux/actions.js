import {
  ADD_COUNT,
  GET_VIDEO_GROUP_LIST,
  DIALOG_LOGIN_VISIBILTY,
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
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

export const inithometopartists = () => {
  return {
    type: INIT_HOME_TOP_ARTISTS
  };
};

export const addhometopartists = (artists) => {
  return {
    type: ADD_HOME_TOP_ARTISTS,
    payload: {
      artists
    }
  };
};
