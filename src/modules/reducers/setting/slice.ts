import { createSlice } from "@reduxjs/toolkit";
import { LOCALSTORAGE } from "@/common/utils";
import { Draft } from "immer";

export interface SettingState {
  theme: string;
  custom: boolean;
  font: string;
  order: string[];
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

const theme = LOCALSTORAGE("theme", "#EC4141");
const custom = LOCALSTORAGE("custom", false);
const font = LOCALSTORAGE("font", "inherit");
const order = LOCALSTORAGE("homeOrder", defaultOrder);

const initialState: SettingState = {
  theme,
  custom,
  font,
  order,
};

const slice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme(state, action) {
      window.localStorage.setItem("theme", JSON.stringify(action.payload));
      state.theme = action.payload;
    },
    setFont(state, action) {
      window.localStorage.setItem("custom", JSON.stringify(action.payload));
      state.custom = action.payload;
    },
    setCustom(state, action) {
      window.localStorage.setItem("font", JSON.stringify(action.payload));
      state.font = action.payload;
    },
    setHomeOrder(state, action) {
      window.localStorage.setItem("homeOrder", JSON.stringify(action.payload));
      state.order = action.payload;
    },
  },
});

export const settingSelector = <T = Draft<SettingState>>({
  setting,
}: {
  setting: T;
}): T => setting;

export default slice.reducer;

export const { setTheme, setFont, setCustom, setHomeOrder } = slice.actions;
