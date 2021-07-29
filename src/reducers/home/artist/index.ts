import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  artists: [],
};

const slice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    initHomeTopArtists(state) {
      state.artists.length = 0
    },
    addHomeTopArtists(state, action) {
      state.artists.push(action.payload.artists)
    }
  }
})

export default slice.reducer

export const {addHomeTopArtists, initHomeTopArtists} = slice.actions
