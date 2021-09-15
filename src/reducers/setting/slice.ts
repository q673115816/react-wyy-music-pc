import {createSlice} from "@reduxjs/toolkit";
import {LOCALSTORAGE} from "@/common/utils";

export interface SettingState {
  theme: string,
  custom: boolean,
  font: string,
  homeOrder: string[],
}

export type Order = string[]
export const defaultOrder: Order = ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '主播电台', '看看'];

const theme = LOCALSTORAGE('theme', '#D03535');
const custom = LOCALSTORAGE('custom', false);
const font = LOCALSTORAGE('font', 'inherit');
const homeOrder = LOCALSTORAGE('homeOrder', defaultOrder);

const initialState: SettingState = {
  theme,
  custom,
  font,
  homeOrder,
};

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTheme(state, action) {
      window.localStorage.setItem('theme', JSON.stringify(action.payload));
      state.theme = action.payload;
    },
    setFont(state, action) {
      window.localStorage.setItem('custom', JSON.stringify(action.payload));
      state.custom = action.payload;
    },
    setCustom(state, action) {
      window.localStorage.setItem('font', JSON.stringify(action.payload));
      state.font = action.payload;
    },
    setHomeOrder(state, action) {
      window.localStorage.setItem('homeOrder', JSON.stringify(action.payload));
      state.homeOrder = action.payload;
    },
  }
})

export default slice.reducer

export const {
  setTheme,
  setFont,
  setCustom,
  setHomeOrder,
} = slice.actions
