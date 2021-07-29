import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  history: [],
  newMsgCount: 0,
  countriesCodeList: [],
  loginVisibility: false,
  // isLogin: window.localStorage.getItem('cookie') !== null,
  isLogin: false,
  msgs: [],
  comments: [],
  forwards: [],
  notices: [],
  baseUrl: 'https://music.163.com',
};

const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = true
    },
    setNotLogin(state, action) {
      state.isLogin = false
    },
    setMsgPrivate(state, action) {
      Object.assign(state, action.payload)
    },
    setContriesCodeList(state, action) {
      Object.assign(state, action.payload)
    },
    setLoginVisibilty(state, action) {
      state.loginVisibility = !state.loginVisibility
    },
  }
})

export default slice.reducer

export const {
  setContriesCodeList,
  setIsLogin,
  setLoginVisibilty,
  setMsgPrivate,
  setNotLogin
} = slice.actions
