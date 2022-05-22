import { createSlice } from "@reduxjs/toolkit";

interface CommonState {
  [key: string]: any;
}

const initialState: CommonState = {
  history: [],
  newMsgCount: 0,
  loginVisibility: false,
  isLogin: false,
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
    setIsLogin(state) {
      state.isLogin = true;
    },
    setNotLogin(state) {
      state.isLogin = false;
    },
    setMsgPrivate(state, action) {
      Object.assign(state, action.payload);
    },
    setLoginVisibilty(state) {
      state.loginVisibility = !state.loginVisibility;
    },
  },
});

export const commonSelector = ({ common }) => common;

export default slice.reducer;

export const { setIsLogin, setLoginVisibilty, setMsgPrivate, setNotLogin } =
  slice.actions;
