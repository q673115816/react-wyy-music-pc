import {createSlice} from "@reduxjs/toolkit";
import {LOCALSTORAGE} from "@/common/utils";
import formatLrc from "./format";
import {Draft} from "immer";

interface LrcState {
  globalLrcVisibility:boolean,
  lyricVisibility: boolean,
  lyric: {},
  lrcList: [],
}

const globalLrcVisibility = LOCALSTORAGE('globalLrcVisibility', false);

const initialState: LrcState = {
  globalLrcVisibility,
  lyricVisibility: false,
  lyric: {},
  lrcList: [],
};

function setGlobalvisibility(state, visibility) {
  window.localStorage.setItem('globalLrcVisibility', visibility);
  state.globalLrcVisibility = visibility;
}

const slice = createSlice({
  name: 'lrc',
  initialState,
  reducers: {
    setLyricText(state, action) {
      setGlobalvisibility(state, !state.globalLrcVisibility);
    },
    setGlobalLrcToggle(state, action) {
      const { lyric } = action.payload;
      state.lyric = lyric;
      const {
        tlyric: { lyric: tlyric } = { lyric: '' },
        lrc: { lyric: lrc } = { lyric: '' },
      } = lyric;
      if (!lrc) {
        state.lrcList = [];
        return;
      }

      const arr = [];
      const temp = {};

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
        const { groups: { min, sec } } = key.match(/\[(?<min>\d*):(?<sec>\d*\.?\d*)\]/);
        const time = min * 60 + sec * 1;
        arr.push({ time, word });
      });
      arr.sort(({ time: time1 }, { time: time2 }) => time1 - time2);
      state.lrcList = arr;
    },
    setGlobalLrcShow(state, action) {
      setGlobalvisibility(state, true);
    },
    setGlobalLrcHide(state, action) {
      setGlobalvisibility(state, false);
    },
    setLyricShow(state, action) {
      state.lyricVisibility = true;
    },
    setLyricHide(state, action) {
      state.lyricVisibility = false;
    },
    setLyricToggle(state, action) {
      state.lyricVisibility = !state.lyricVisibility;
    },
  }
})

export const LrcSelector = <T = Draft<LrcState>>({lrc}: {lrc: T}): T => lrc

export default slice.reducer

export const {
  setGlobalLrcHide,
  setGlobalLrcShow,
  setGlobalLrcToggle, setLyricHide,
  setLyricShow,
  setLyricText, setLyricToggle

} = slice.actions
