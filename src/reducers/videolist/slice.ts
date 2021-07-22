import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface VideoListState {
  id: number | null,
  initStatus: boolean,
  categoryList: [],
  groupList: [],
}

const initialState: VideoListState = {
  id: null,
  initStatus: false,
  categoryList: [],
  groupList: [],
}

export default createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    setVideoListInit(state, action) {

    },
    setVideoListId(state, action) {

    },
  }
})
