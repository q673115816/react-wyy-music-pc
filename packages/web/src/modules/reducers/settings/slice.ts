import { createSlice } from "@reduxjs/toolkit";
import { Draft } from "immer";
import type { RootState } from "@/modules/store";

export type Order =
  | "推荐歌单"
  | "独家放送"
  | "最新音乐"
  | "推荐MV"
  | "主播电台";
export type Orders = Order[];
export const defaultOrder: Orders = [
  "推荐歌单",
  "独家放送",
  "最新音乐",
  "推荐MV",
  "主播电台",
];

export interface State {
  theme: string;
  custom: boolean;
  font: string;
  order: Orders;
  globalLrcVisibility: boolean;
}

const initialState: State = {
  theme: "#EC4141",
  custom: false,
  font: "inherit",
  order: defaultOrder,
  globalLrcVisibility: false,
};

const slice = createSlice({
  name: "settings",
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
    setGlobalLrcHide(state) {
      state.globalLrcVisibility = false;
    },
  },
});

export const settingSelector = (state: RootState) => state.settings;

export default slice.reducer;

export const {
  setTheme,
  setFont,
  setCustom,
  setHomeOrder,
  setGlobalLrcHide,
  setGlobalLrcToggle,
} = slice.actions;
