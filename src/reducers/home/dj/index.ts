import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  DjBanner: [],
  category: [],
  catelist: [],
  DjPersonalizeRecommend: [],
  result: {
    创作翻唱: [],
    声之剧场: [],
    音乐故事: [],
    情感调频: [],
    声音恋人: [],
  },
};

const slice = createSlice({
  name: 'dj',
  initialState,
  reducers: {
    setHomeDj(state, action) {
      Object.assign(state, action.payload)
    }
  }
})

export default slice.reducer

export const {setHomeDj} = slice.actions
