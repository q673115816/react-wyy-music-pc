import { createSlice } from "@reduxjs/toolkit";
import { Draft } from "immer";

export interface SettingState {
  theme: string;
  custom: boolean;
  font: string;
  order: string[];
  globalLrcVisibility: boolean;
}

export type Order =
  | "推荐歌单"
  | "独家放送"
  | "最新音乐"
  | "推荐MV"
  | "主播电台"
  | "看看";
export type Orders = Order[];
export const defaultOrder: Orders = [
  "推荐歌单",
  "独家放送",
  "最新音乐",
  "推荐MV",
  "主播电台",
  "看看",
];

const initialState: SettingState = {
  theme: "#EC4141",
  custom: false,
  font: "inherit",
  order: defaultOrder,
  globalLrcVisibility: false,
};

const slice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setFont(state, action) {
      state.custom = action.payload;
    },
    setCustom(state, action) {
      state.font = action.payload;
    },
    setHomeOrder(state, action) {
      state.order = action.payload;
    },
    setGlobalLrcToggle(state) {
      state.globalLrcVisibility = !state.globalLrcVisibility;
    },
    setGlobalLrcShow(state) {
      state.globalLrcVisibility = true;
    },
    setGlobalLrcHide(state) {
      state.globalLrcVisibility = false;
    },
  },
});

export const settingSelector = <T = Draft<SettingState>>({
  setting,
}: {
  setting: T;
}): T => setting;

export default slice.reducer;

export const {
  setTheme,
  setFont,
  setCustom,
  setHomeOrder,
  setGlobalLrcHide,
  setGlobalLrcShow,
  setGlobalLrcToggle,
} = slice.actions;
