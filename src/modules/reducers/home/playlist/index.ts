import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  highquality: {},
  hot: {},
  catlist: {},
  playlists: {},
};

const slice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylistCatlist(state, action) {
      Object.assign(state, action.payload);
    },
    setTopPlaylist(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export default slice.reducer;

export const { setPlaylistCatlist, setTopPlaylist } = slice.actions;
