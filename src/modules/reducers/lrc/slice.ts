import { createSlice } from "@reduxjs/toolkit";
import formatLrc from "./format";
import { Draft } from "immer";
import { Get, Set } from "../../utils";
interface LrcState {
  globalLrcVisibility: boolean;
  lyricVisibility: boolean;
  lyric: {};
  lrcList: { time: number; word: string }[];
}

const globalLrcVisibility = Get({
  key: "globalLrcVisibility",
  base: false,
});

const initialState: LrcState = {
  globalLrcVisibility,
  lyricVisibility: false,
  lyric: {},
  lrcList: [],
};

function setGlobalVisibility(state: Draft<LrcState>, value: boolean) {
  Set({
    key: "globalLrcVisibility",
    value,
    callback() {
      state.globalLrcVisibility = value;
    },
  });
}

const slice = createSlice({
  name: "lrc",
  initialState,
  reducers: {
    setGlobalLrcToggle(state) {
      setGlobalVisibility(state, !state.globalLrcVisibility);
    },
    setLyricText(state, action) {
      const { lyric } = action.payload;
      state.lyric = lyric;
      const {
        tlyric: { lyric: tlyric } = { lyric: "" },
        lrc: { lyric: lrc } = { lyric: "" },
      } = lyric;
      if (!lrc) {
        state.lrcList = [];
        return;
      }

      const arr: { time: number; word: string }[] = [];
      const temp: { [key in string]: string } = {};

      formatLrc(lrc, (onetime, word) => {
        temp[onetime] = word;
      });

      if (tlyric) {
        formatLrc(tlyric, (onetime, word) => {
          temp[onetime] += `
              ${word}`;
        });
      }
      Object.entries(temp).forEach(([key, word]) => {
        const {
          groups: { min, sec },
        } = key.match(/\[(?<min>\d*):(?<sec>\d*\.?\d*)\]/);
        const time = min * 60 + sec * 1;
        arr.push({ time, word });
      });
      arr.sort(({ time: time1 }, { time: time2 }) => time1 - time2);
      state.lrcList = arr;
    },
    setGlobalLrcShow(state) {
      setGlobalVisibility(state, true);
    },
    setGlobalLrcHide(state) {
      setGlobalVisibility(state, false);
    },
    setLyricShow(state) {
      state.lyricVisibility = true;
    },
    setLyricHide(state) {
      state.lyricVisibility = false;
    },
    setLyricToggle(state) {
      state.lyricVisibility = !state.lyricVisibility;
    },
  },
});

export const LrcSelector = <T = Draft<LrcState>>({ lrc }: { lrc: T }): T => lrc;

export default slice.reducer;

export const {
  setGlobalLrcHide,
  setGlobalLrcShow,
  setGlobalLrcToggle,
  setLyricHide,
  setLyricShow,
  setLyricText,
  setLyricToggle,
} = slice.actions;
