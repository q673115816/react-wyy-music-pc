import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  playlist: [],
  privatecontent: [],
  newsong: [],
  mv: [],
  djprogram: [],
};

const slice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setHomeRecommend(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export default slice.reducer;

export const { setHomeRecommend } = slice.actions;
