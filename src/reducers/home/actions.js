import {
  SET_TOPLIST_DETAIL,
  SET_HOME_RECOMMEND,
  SET_TOP_PLAYLIST,
  SET_PLAYLIST_CATLIST,
  SET_TOP_SONG,
  SET_TOP_ALBUM,
  SET_HOME_DJ,
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
} from './actionTypes';

export const setTopListsDetail = (list) => ({
  type: SET_TOPLIST_DETAIL,
  payload: {
    list,
  },
});

export const setHomeRecommend = (payload) => ({
  type: SET_HOME_RECOMMEND,
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

export const setHomeDj = (payload) => ({
  type: SET_HOME_DJ,
  payload,
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
