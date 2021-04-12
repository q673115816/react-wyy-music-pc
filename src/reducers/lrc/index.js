import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_LYRIC_TEXT,
  SET_GLOBAL_LRC_TOGGLE,
  SET_GLOBAL_LRC_SHOW,
  SET_GLOBAL_LRC_HIDE,
  SET_LYRIC_SHOW,
  SET_LYRIC_HIDE,
  SET_LYRIC_TOGGLE,
} from './actionTypes';

const globalLrcVisibility = LOCALSTORAGE('globalLrcVisibility', false);

const initialState = {
  globalLrcVisibility,
  lyricVisibility: false,
  lyric: {},
  lrcList: [],
};

function formatLrc(lrc, callback) {
  lrc
    .match(/^\[\d*:\d*.\d*\].*/mg)
    .forEach((line) => {
      const { groups: { time, word } } = line.match(/(?<time>\[.*\])(?<word>.*)/);
      time
        .match(/\[(\d{0,}:\d{0,}\.?\d{0,})\]/g)
        .forEach((onetime) => {
          callback(onetime, word);
          // const { groups: { min, sec } } = onetime.match(/(?<min>\d{2,}):(?<sec>\d{2,}\.\d{2,})/);
        });
    });
}

function setGlobalvisibility(draft, visibility) {
  window.localStorage.setItem('globalLrcVisibility', visibility);
  draft.globalLrcVisibility = visibility;
}

export default produce((draft, action) => {
  switch (action.type) {
    case SET_GLOBAL_LRC_TOGGLE:
      {
        const visibility = !draft.globalLrcVisibility;
        setGlobalvisibility(draft, visibility);
      }
      break;
    case SET_GLOBAL_LRC_SHOW:
      setGlobalvisibility(draft, true);
      break;
    case SET_GLOBAL_LRC_HIDE:
      setGlobalvisibility(draft, false);
      break;
    case SET_LYRIC_SHOW:
      draft.lyricVisibility = true;
      break;
    case SET_LYRIC_HIDE:
      draft.lyricVisibility = false;
      break;
    case SET_LYRIC_TOGGLE:
      draft.lyricVisibility = !draft.lyricVisibility;
      break;
    case SET_LYRIC_TEXT:
      {
        const { lyric } = action.payload;
        draft.lyric = lyric;
        const {
          tlyric: { lyric: tlyric } = { lyric: '' },
          lrc: { lyric: lrc } = { lyric: '' },
        } = lyric;
        if (!lrc) {
          draft.lrcList = [];
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
          const { groups: { min, sec } } = key.match(/\[(?<min>\d{0,}):(?<sec>\d{0,}\.?\d{0,})\]/);
          const time = min * 60 + sec * 1;
          arr.push({ time, word });
        });
        arr.sort(({ time: time1 }, { time: time2 }) => time1 - time2);
        draft.lrcList = arr;
      }
      break;
    default:
  }
}, initialState);
