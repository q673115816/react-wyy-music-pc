import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  profile: {};
  playlist: playlistState[];
  bindings: [];
  likelist: number[];
  artistSublist: [];
  topicSublist: [];
  albumSublist: [];
  mvSublist: [];
}

export interface playlistState {
  id: number;
  privacy: number;
  name: string;
  subscribed: boolean;
}

const initialState: AccountState = {
  profile: {},
  playlist: [],
  bindings: [],
  likelist: [],
  artistSublist: [],
  topicSublist: [],
  albumSublist: [],
  mvSublist: [],
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setLoginInfo(state, { payload }) {
      // state.profile = action.payload.profile;
      // state.playlist = action.payload.playlist;
      // state.likelist = action.payload.likelist;
      // state.artistSublist = action.payload.artistSublist;
      // state.topicSublist = action.payload.topicSublist;
      // state.albumSublist = action.payload.albumSublist;
      // state.mvSublist = action.payload.mvSublist;
      Object.assign(state, payload);
    },
    setLoginInfoUpdate(state, action) {
      state.profile = action.payload.profile;
    },
    setLikelist(state, action) {
      state.likelist = action.payload.likelist;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
    },
    setLikelistAdd(state, action) {
      state.likelist.push(action.payload.id);
    },
    setLikelistDel(state, action) {
      const n = state.likelist.length;
      if (!n) return;
      // state.likelist.delete(action.payload.id);
      const index = state.likelist.findIndex(
        (item) => item === action.payload.id
      );
      state.likelist[index] = state.likelist[n - 1];
      state.likelist.length -= 1;
    },
    setArtistSublist(state, action) {
      state.artistSublist = action.payload.artistSublist;
    },
    setArtistSublistAdd(state, action) {},
    setTopicSublist(state, action) {
      state.topicSublist = action.payload.topicSublist;
    },
    setAlbumSublist(state, action) {
      state.albumSublist = action.payload.albumSublist;
    },
    setMVSublist(state, action) {
      state.mvSublist = action.payload.mvSublist;
    },
  },
});

export default slice.reducer;

export const {
  setAlbumSublist,
  setArtistSublist,
  setArtistSublistAdd,
  setLikelist,
  setLikelistAdd,
  setLikelistDel,
  setLoginInfo,
  setLoginInfoUpdate,
  setMVSublist,
  setPlaylist,
  setTopicSublist,
} = slice.actions;
