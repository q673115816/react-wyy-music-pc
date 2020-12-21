import {
  SET_IS_LOGIN,
  SET_NOT_LOGIN,
  SET_USER_DETAIL,
  SET_USER_RECORD,
  SET_MSG_PRIVATE,
  ADD_SONG_URL,
  SET_HOME_RECOMMEND,
  SET_HOME_DJ,
  SET_COUNTRIES_CODE_LIST,
  SET_VIDEODETAIL_RELATED,
  DIALOG_LOGIN_VISIBILTY,
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
  SET_TOPLIST_ARITST,
  SET_TOPLIST_DETAIL,
  SET_TOP_SONG,
  SET_TOP_ALBUM,
  SET_PLAYLIST_CATLIST,
  SET_TOP_PLAYLIST,
  SET_PLAYLIST_DETAIL,
  SET_LOGIN_INFO,
  SET_FRIEND_INIT,
  SET_FRIEND_EVENT,
  SET_COMMENT_EVENT,
  SET_POPUP,
} from './actionTypes';

export const setIsLogin = () => ({
  type: SET_IS_LOGIN,
});

export const setNotLogin = () => ({
  type: SET_NOT_LOGIN,
});

export const setLoginInfo = (payload) => ({
  type: SET_LOGIN_INFO,
  payload,
});

export const setUserDetail = (payload) => ({
  type: SET_USER_DETAIL,
  payload,
});

export const setMsgPrivate = (payload) => ({
  type: SET_MSG_PRIVATE,
  payload,
});

export const setUserRecord = (record) => ({
  type: SET_USER_RECORD,
  payload: {
    record,
  },
});

export const addSongUrl = (songs) => ({
  type: ADD_SONG_URL,
  payload: { songs },
});

export const setHomeRecommend = (payload) => ({
  type: SET_HOME_RECOMMEND,
  payload,
});

export const setHomeDj = (payload) => ({
  type: SET_HOME_DJ,
  payload,
});

export const setContriesCodeList = (payload) => ({
  type: SET_COUNTRIES_CODE_LIST,
  payload,
});

export const setVideoDetailRelated = (payload) => ({
  type: SET_VIDEODETAIL_RELATED,
  payload,
});

export const dialogLoginVisibilty = () => ({
  type: DIALOG_LOGIN_VISIBILTY,
});

export const initHomeTopArtists = () => ({
  type: INIT_HOME_TOP_ARTISTS,
});

export const addHomeTopArtists = (artists) => ({
  type: ADD_HOME_TOP_ARTISTS,
  payload: {
    artists,
  },
});

export const setTopListArtist = (artist) => ({
  type: SET_TOPLIST_ARITST,
  payload: {
    artist,
  },
});

export const setTopListsDetail = (list) => ({
  type: SET_TOPLIST_DETAIL,
  payload: {
    list,
  },
});

export const setTopSong = (data) => ({
  type: SET_TOP_SONG,
  payload: {
    data,
  },
});

export const setTopAlbum = (payload) => ({
  type: SET_TOP_ALBUM,
  payload,
});

export const setPlaylistCatlist = (payload) => ({
  type: SET_PLAYLIST_CATLIST,
  payload,
});

export const setTopPlaylist = (payload) => ({
  type: SET_TOP_PLAYLIST,
  payload,
});

export const setPlaylistDetail = (payload) => ({
  type: SET_PLAYLIST_DETAIL,
  payload,
});

export const setFriendInit = (payload) => ({
  type: SET_FRIEND_INIT,
  payload,
});

export const setFriendEvent = (payload) => ({
  type: SET_FRIEND_EVENT,
  payload,
});

export const setCommentEvent = (payload) => ({
  type: SET_COMMENT_EVENT,
  payload,
});

// common
export const setPopup = (payload) => ({
  type: SET_POPUP,
  payload,
});
