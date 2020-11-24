import {
  ADD_COUNT,
  GET_VIDEO_GROUP_LIST,
  DIALOG_LOGIN_VISIBILTY,
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
  GET_TOPLIST_ARITST,
  GET_TOPLIST_DETAIL,
  GET_TOP_SONG
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

export const gettoplistartist = (artist) => {
  return {
    type: GET_TOPLIST_ARITST,
    payload: {
      artist
    }
  }
}

export const gettoplitsdetail = (list) => {
  return {
    type: GET_TOPLIST_DETAIL,
    payload: {
      list
    }
  }
}

export const gettopsong = (data) => {
  return {
    type: GET_TOP_SONG,
    payload: {
      data
    }
  }
}