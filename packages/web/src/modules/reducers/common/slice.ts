import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/modules/store";

interface CommonState {
  history: [];
  newMsgCount: number;
  msgs: [];
  comments: [];
  forwards: [];
  notices: [];
  baseUrl: string;
  gitUrl: string;
}

const initialState: CommonState = {
  history: [],
  newMsgCount: 0,
  msgs: [],
  comments: [],
  forwards: [],
  notices: [],
  baseUrl: "https://music.163.com",
  gitUrl: "https://neteasecloudmusic.fun",
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMsgPrivate(state, { payload }) {
      Object.assign(state, payload);
    },
  },
});

export const commonSelector = (state: RootState) => state.common;

export default slice.reducer;

export const { setMsgPrivate } = slice.actions;
