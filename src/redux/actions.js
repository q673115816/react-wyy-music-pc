import {
  SET_IS_LOGIN,
  SET_NOT_LOGIN,
  SET_MSG_PRIVATE,
  SET_HOME_RECOMMEND,
  SET_HOME_DJ,
  SET_COUNTRIES_CODE_LIST,
  SET_LOGIN_VISIBILTY,
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
  SET_TOPLIST_DETAIL,
  SET_TOP_SONG,
  SET_TOP_ALBUM,
  SET_PLAYLIST_CATLIST,
  SET_TOP_PLAYLIST,
  SET_LOGIN_INFO,
  SET_LIKELIST,
  SET_FRIEND_INIT,
  SET_FRIEND_EVENT,
  SET_COMMENT_EVENT,
  SET_POPUP,
  SET_LOCAL_CURRENT,
  SET_ARTIST_INIT,
  SET_SEARCH_HISTORY,
  SET_SEARCH_VALUE,
  SET_SEARCH_HOT,
  SET_SEARCH_SUGGEST,
  SET_MSG_PRIVATE_HISTORY,
  SET_TOAST,
  SET_CONTEXTMENU_SHOW,
  SET_CONTEXTMENU_SHARE_LINK,
  SET_SEARCH_SHOW,
  SET_DIALOG_SHARE_SHOW,
  SET_DIALOG_SHARE_WX_SHOW,
  SET_DIALOG_UPLOAD_AVATAR_SHOW,
  SET_DIALOG_CREATE_PLAYLIST_SHOW,
  SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  SET_DIALOG_RESET,
  SET_GLOBAL_INSET,
  SET_THEME,
  SET_VOLUME,
  SET_SCREEN_FULL,
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_CURRENTTIME,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_PATTERN,
} from './actionTypes';

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  payload,
});

export const setScreenFull = (payload) => ({
  type: SET_SCREEN_FULL,
  payload,
});

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

export const setLikelist = (payload) => ({
  type: SET_LIKELIST,
  payload,
});

export const setSearchHistory = (payload) => ({
  type: SET_SEARCH_HISTORY,
  payload,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});
export const setSearchHot = (payload) => ({
  type: SET_SEARCH_HOT,
  payload,
});
export const setSearchSuggest = (payload) => ({
  type: SET_SEARCH_SUGGEST,
  payload,
});

export const setMsgPrivate = (payload) => ({
  type: SET_MSG_PRIVATE,
  payload,
});

export const setAudioImmediate = (payload) => ({
  type: SET_AUDIO_IMMEDIATE,
  payload,
});

export const setAudioRunningToggle = () => ({
  type: SET_AUDIO_RUNNING_TOGGLE,
});

export const setAudioCurrentTime = (payload) => ({
  type: SET_AUDIO_CURRENTTIME,
  payload,
});

export const setAudioPlaylistClear = () => ({
  type: SET_AUDIO_PLAYLIST_CLEAR,
});

export const setAudioHistoryClear = () => ({
  type: SET_AUDIO_HISTORY_CLEAR,
});

export const setAudioPattern = () => ({
  type: SET_AUDIO_PATTERN,
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

export const setLoginVisibilty = () => ({
  type: SET_LOGIN_VISIBILTY,
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

export const setLocalCurrent = (payload) => ({
  type: SET_LOCAL_CURRENT,
  payload,
});

export const setArtistInit = (payload) => ({
  type: SET_ARTIST_INIT,
  payload,
});

export const setMsgPrivateHistory = (payload) => ({
  type: SET_MSG_PRIVATE_HISTORY,
  payload,
});

export const setToast = (payload) => ({
  type: SET_TOAST,
  payload,
});

export const setGlobalInset = (payload) => ({
  type: SET_GLOBAL_INSET,
  payload,
});

export const setContextMenuShow = (payload) => ({
  type: SET_CONTEXTMENU_SHOW,
  payload,
});

export const setContextMenuShareLink = (payload) => ({
  type: SET_CONTEXTMENU_SHARE_LINK,
  payload,
});

export const setSearchShow = (payload) => ({
  type: SET_SEARCH_SHOW,
  payload,
});

export const setDialogShareShow = (payload) => ({
  type: SET_DIALOG_SHARE_SHOW,
  payload,
});

export const setDialogShareWXShow = (payload) => ({
  type: SET_DIALOG_SHARE_WX_SHOW,
  payload,
});

export const setDialogUploadAvatarShow = (payload) => ({
  type: SET_DIALOG_UPLOAD_AVATAR_SHOW,
  payload,
});

export const setDialogCreatePlaylistShow = (payload) => ({
  type: SET_DIALOG_CREATE_PLAYLIST_SHOW,
  payload,
});

export const setDialogUnSubscriptionShow = (payload) => ({
  type: SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  payload,
});

export const setDialogReset = () => ({
  type: SET_DIALOG_RESET,
});
