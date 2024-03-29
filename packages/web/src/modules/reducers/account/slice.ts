import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/modules/store";
import { Profile } from "@/modules/services/user";

export interface AccountState {
  uid: number | null;
  isLogin: boolean;
  profile: Profile;
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
  uid: null,
  isLogin: false,
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
    reset(state) {
      Object.assign(state, initialState);
    },
    setLoginInfo(state, { payload }) {
      // state.profile = action.payload.profile;
      // state.playlist = action.payload.playlist;
      // state.likelist = action.payload.likelist;
      // state.artistSublist = action.payload.artistSublist;
      // state.topicSublist = action.payload.topicSublist;
      // state.albumSublist = action.payload.albumSublist;
      // state.mvSublist = action.payload.mvSublist;
      Object.assign(state, payload);
      state.isLogin = true;
      state.uid = payload.profile.userId;
    },
    setLoginInfoUpdate(state, { payload }) {
      state.profile = payload.profile;
      state.uid = payload.profile.userId;
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

export const accountSelector = (state: RootState) => state.account;

export const {
  reset,
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
