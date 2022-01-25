import { createSlice } from "@reduxjs/toolkit";

export interface CountriesCodeItem {
  label: string;
  countryList: CountryItem[];
}

export interface CountryItem {
  zh: string;
  en: string;
  locale: string;
  code: string;
}

interface CommonState {
  countriesCodeList: CountriesCodeItem[];
  [key: string]: any;
}

const initialState: CommonState = {
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
  baseUrl: "https://music.163.com",
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
    setContriesCodeList(state, action) {
      Object.assign(state, action.payload);
    },
    setLoginVisibilty(state) {
      state.loginVisibility = !state.loginVisibility;
    },
  },
});

export default slice.reducer;

export const {
  setContriesCodeList,
  setIsLogin,
  setLoginVisibilty,
  setMsgPrivate,
  setNotLogin,
} = slice.actions;
