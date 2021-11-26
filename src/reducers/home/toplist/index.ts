import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const slice = createSlice({
  name: "topList",
  initialState,
  reducers: {
    setTopListsDetail(state, { payload }) {
      Object.assign(state, payload);
    },
  },
});

export default slice.reducer;

export const { setTopListsDetail } = slice.actions;
