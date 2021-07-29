import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: [],
  monthData: [],
  weekData: [],
};

const slice = createSlice({
  name: 'newest',
  initialState,
  reducers: {
    setTopSong(state, action) {
      Object.assign(state, action.payload)
    },
    setTopAlbum(state, action) {
      Object.assign(state, action.payload)
    },
  }
})

export default slice.reducer

export const {setTopAlbum, setTopSong} = slice.actions
