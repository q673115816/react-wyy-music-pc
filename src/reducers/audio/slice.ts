import {createSlice} from "@reduxjs/toolkit";
import {LOCALSTORAGE} from "@/common/utils";
import {audioPattern} from "@/common/config";

const resetState = {
  errorCount: 0,
  running: false,
  dropping: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: 0,
  jumpTime: null,
  buffered: [],
  lyric: {},
  lrcList: [],
};

const initialState = {
  ...resetState,
  pattern: LOCALSTORAGE("pattern", 0),
  currentSong: LOCALSTORAGE("currentSong", {}),
  playlist: LOCALSTORAGE("playlist", []),
  history: LOCALSTORAGE("history", []),
  currentTime: LOCALSTORAGE("currentTime", 0),
};

type State = typeof initialState;

const FnChange = (state) => {
  window.localStorage.setItem("currentTime", 0);
  state.currentTime = 0;
  state.buffered = [];
  state.running = true;
};

const FnAddNext = (state, currentSong: {}) => {
  if (state.playlist.every((song) => song.id !== currentSong.id)) {
    // 未在歌单中的新歌
    const beforeIndex = state.playlist.findIndex(
      (item) => item.id === state.currentSong.id
    );
    state.playlist.splice(beforeIndex + 1, 0, currentSong);
    window.localStorage.setItem("playlist", JSON.stringify(state.playlist));
  }
};

const FnAddHistory = (state, currentSong: {}) => {
  if (state.history.some((song) => song.id === currentSong.id)) {
    const historyIndex = state.history.findIndex(
      (song) => song.id === currentSong.id
    );
    state.history.splice(historyIndex, 1);
    // state.history = state.history.filter((history) => history.id !== currentSong.id)
  }
  state.history.unshift({...currentSong, lastTime: Date.now()});
  window.localStorage.setItem("history", JSON.stringify(state.history));
};


function FnImmediate(state, currentSong: {}) {
  FnChange(state);
  FnAddNext(state, currentSong);
  FnAddHistory(state, currentSong);
  // state.history = [currentSong, ...state.history.filter((history) => history.id !== currentSong.id)];
  state.currentSong = currentSong;
  // state.currentTime = 0;
  window.localStorage.setItem("currentSong", JSON.stringify(currentSong));
}

const slice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudioImmediate(state, action) {
      const {currentSong} = action.payload;
      FnImmediate(state, currentSong);
    },
    setAudioImmediateNext(state, action) {
      const {currentSong} = action.payload;
      FnAddNext(state, currentSong);
    },
    setAudioPlaylist(state, action) {
      FnChange(state);
      const {playlist} = action.payload;
      const currentSong = playlist[0];
      window.localStorage.setItem("playlist", JSON.stringify(playlist));
      state.playlist = playlist;
      state.currentSong = currentSong;
      FnAddHistory(state, currentSong);
      // state.history = [currentSong, ...state.history.filter((history) => history.id !== currentSong.id)];
      window.localStorage.setItem("currentSong", JSON.stringify(currentSong));
      window.localStorage.setItem("history", JSON.stringify(state.history));
    },
    setAudioPlaylistAdd(state, action) {
    },
    setAudioPrev(state, action) {
      if (state.playlist.length === 0) return;
      FnChange(state);
      const len = state.playlist.length;
      const currentIndex = state.playlist.findIndex(
        (item) => item.id === state.currentSong.id
      );
      const currentSong = state.playlist[(currentIndex + len - 1) % len];
      state.currentSong = currentSong;
      FnAddHistory(state, currentSong);
      window.localStorage.setItem("currentSong", JSON.stringify(currentSong));

    },
    setAudioNext(state, action) {
      if (state.playlist.length === 0) return;
      FnChange(state);
      const len = state.playlist.length;
      // state.currentSong = currentSong;
      const currentIndex = state.playlist.findIndex(
        (item) => item.id === state.currentSong.id
      );
      const currentSong = state.playlist[(currentIndex + 1) % len];
      state.currentSong = currentSong;
      FnAddHistory(state, currentSong);
      window.localStorage.setItem("currentSong", JSON.stringify(currentSong));
      // if (currentIndex === state.playlist.length - 1) {
      //   state.running = false;
      //   state.currentSong = {};
      // } else {
      //   state.currentSong = state.playlist[currentIndex + 1];
      // }
      // switch (state.pattern) {
      //   case '0':
      //     if (currentIndex === state.playlist.length - 1) {
      //       state.running = false;
      //       state.currentSong = {};
      //     } else {
      //       state.currentSong = state.playlist[currentIndex + 1];
      //     }
      //     break;
      //   default:
      //     break;
      // }
    },
    setAudioCurrent(state, action) {
    },
    setAudioRunning(state, action) {
      if (state?.currentSong?.id) {
        state.running = action.payload.running;
      } else if (state.playlist.length > 0) {
        const currentSong = state.playlist[0];
        FnImmediate(state, currentSong);
      } else {
        state.running = false;
      }
    },
    setAudioRunningPlay(state, action) {
      state.running = true;
    },
    setAudioRunningPause(state, action) {
      state.running = false;
    },
    setAudioRunningToggle(state, action) {
      state.running = !state.running;
    },
    setAudioDropping(state, action) {
      state.dropping = action.payload.dropping;
    },
    setAudioCurrentTime(state, action) {
      window.localStorage.setItem(
        "currentTime",
        JSON.stringify(Number(action.payload))
      );
      state.currentTime = action.payload;
    },
    setJumpToAudioCurrentTime(state, action) {
      window.localStorage.setItem(
        "currentTime",
        JSON.stringify(Number(action.payload))
      );
      state.jumpTime = action.payload;
    },
    setAudioBuffered(state, action) {
      state.buffered = action.payload;
    },
    setAudioPlaylistClear(state, action) {
      window.localStorage.removeItem("currentSong");
      window.localStorage.removeItem("currentTime");
      window.localStorage.removeItem("playlist");
      state.currentTime = 0;
      state.currentSong = {};
      state.playlist = [];
    },
    setAudioHistoryClear(state, action) {
      window.localStorage.removeItem("history");
      state.history = [];
    },
    setAudioPattern(state, action) {
      const pattern = (state.pattern + 1) % audioPattern.length;
      state.pattern = pattern;
    },
    setRunErrorAdd(state, action) {
      state.errorCount += 1;
    },
    setRunErrorDesc(state, action) {
      state.errorCount -= 1;
    },
  }
})

export default slice.reducer

export const {
  setAudioBuffered,
  setAudioCurrent,
  setAudioCurrentTime,
  setAudioDropping, setAudioHistoryClear,
  setAudioImmediate,
  setAudioImmediateNext,
  setAudioNext, setAudioPattern,
  setAudioPlaylist,
  setAudioPlaylistAdd, setAudioPlaylistClear,
  setAudioPrev,
  setAudioRunning,
  setAudioRunningPause,
  setAudioRunningPlay,
  setAudioRunningToggle,
  setJumpToAudioCurrentTime, setRunErrorAdd, setRunErrorDesc
} = slice.actions
