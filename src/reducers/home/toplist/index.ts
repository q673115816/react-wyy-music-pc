import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const slice = createSlice({
  name: 'toplist',
  initialState,
  reducers: {
    setTopListsDetail(state, action) {
      Object.assign(state, action.payload)
    },
  }
})

export default slice.reducer

export const {setTopListsDetail,} = slice.actions
