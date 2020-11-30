import {
  SET_HOME_RECOMMEND,
  SET_HOME_DJ,
  ADD_COUNT,
  SET_COUNTRIES_CODE_LIST,
  SET_VIDEO_GROUP_LIST,
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
} from './actionTypes';

export const setHomeRecommend = (data) => ({
  type: SET_HOME_RECOMMEND,
  payload: data,
});

export const setHomeDj = (data) => ({
  type: SET_HOME_DJ,
  payload: data,
});

export const addplay = () => ({
  type: ADD_COUNT,
  payload: {},
});

export const setContriesCodeList = (data) => ({
  type: SET_COUNTRIES_CODE_LIST,
  payload: {
    data,
  },
});

export const setVideoGroupList = (list) => ({
  type: SET_VIDEO_GROUP_LIST,
  payload: {
    list,
  },
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

export const setTopAlbum = (data) => ({
  type: SET_TOP_ALBUM,
  payload: data,
});

export const setPlaylistCatlist = (catlist) => ({
  type: SET_PLAYLIST_CATLIST,
  payload: catlist,
});

export const setTopPlaylist = (data) => ({
  type: SET_TOP_PLAYLIST,
  payload: data,
});

export const setPlaylistDetail = (data) => ({
  type: SET_PLAYLIST_DETAIL,
  payload: data,
});
