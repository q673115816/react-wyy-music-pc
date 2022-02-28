import { createSlice } from "@reduxjs/toolkit";
import { audioPattern } from "@/common/config";

interface State {
  src: string;
  errorCount: number;
  running: boolean;
  dropping: boolean;
  currentSong: {};
  playlist: [];
  history: [];
  currentTime: number;
  jumpTime: null;
  buffered: [];
  lyric: {};
  lrcList: [];
  pattern: number;
}

const initialState: State = {
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
  pattern: 0,
};

const FnChange = (state: State) => {
  state.jumpTime = null;
  state.currentTime = 0;
  state.buffered = [];
  state.running = true;
};

const FnAddNext = (state: State, currentSong: {}) => {
  if (state.playlist.some((song) => song.id === currentSong.id)) return;
  // 未在歌单中的新歌
  const beforeIndex = state.playlist.findIndex(
    (item) => item.id === state.currentSong.id
  );
  state.playlist.splice(beforeIndex + 1, 0, currentSong);
};

const FnAddHistory = (state: State, currentSong: {}) => {
  if (state.history.some((song) => song.id === currentSong.id)) {
    const historyIndex = state.history.findIndex(
      (song) => song.id === currentSong.id
    );
    state.history.splice(historyIndex, 1);
    // state.history = state.history.filter((history) => history.id !== currentSong.id)
  }
  state.history.unshift({ ...currentSong, lastTime: Date.now() });
};

function FnImmediate(state: State, currentSong: {}) {
  FnChange(state);
  FnAddNext(state, currentSong);
  FnAddHistory(state, currentSong);
  // state.history = [currentSong, ...state.history.filter((history) => history.id !== currentSong.id)];
  state.currentSong = currentSong;
  // state.currentTime = 0;
}

const slice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudioSrc(state, { payload }) {
      state.src = payload.src;
    },
    setAudioImmediate(state, { payload }) {
      const { currentSong } = payload;
      FnImmediate(state, currentSong);
    },
    setAudioImmediateNext(state, { payload }) {
      const { currentSong } = payload;
      FnAddNext(state, currentSong);
    },
    setAudioPlaylist(state, action) {
      FnChange(state);
      const { playlist } = action.payload;
      const currentSong = playlist[0];
      state.playlist = playlist;
      state.currentSong = currentSong;
      FnAddHistory(state, currentSong);
      // state.history = [currentSong, ...state.history.filter((history) => history.id !== currentSong.id)];
    },
    setAudioPlaylistAdd(state, action) {},
    setAudioPrev(state) {
      if (state.playlist.length === 0) return;
      FnChange(state);
      const len = state.playlist.length;
      const currentIndex = state.playlist.findIndex(
        (item) => item.id === state.currentSong.id
      );
      const currentSong = state.playlist[(currentIndex + len - 1) % len];
      state.currentSong = currentSong;
      FnAddHistory(state, currentSong);
    },
    setAudioNext(state) {
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
    setAudioCurrent(state, action) {},
    setAudioRunning(state, { payload }) {
      if (state?.currentSong?.id) {
        state.running = payload.running;
      } else if (state.playlist.length > 0) {
        const currentSong = state.playlist[0];
        FnImmediate(state, currentSong);
      } else {
        state.running = false;
      }
    },
    setAudioRunningPlay(state) {
      state.running = true;
    },
    setAudioRunningPause(state) {
      state.running = false;
    },
    setAudioRunningToggle(state) {
      state.running = !state.running;
    },
    setAudioDropping(state, action) {
      state.dropping = action.payload.dropping;
    },
    setAudioCurrentTime(state, { payload }) {
      state.currentTime = payload.currentTime;
    },
    setJumpToAudioCurrentTime(state, action) {
      state.jumpTime = action.payload;
    },
    setAudioBuffered(state, action) {
      state.buffered = action.payload;
    },
    setAudioPlaylistClear(state) {
      state.running = false;
      state.currentTime = 0;
      state.currentSong = {};
      state.playlist = [];
    },
    setAudioHistoryClear(state) {
      state.history = [];
    },
    setAudioPattern(state) {
      const pattern = (state.pattern + 1) % audioPattern.length;
      state.pattern = pattern;
    },
    setRunErrorAdd(state) {
      state.errorCount += 1;
    },
    setRunErrorDesc(state) {
      state.errorCount -= 1;
    },
  },
});

export const audioSelector = ({ audio }) => audio;

export default slice.reducer;

export const {
  setAudioSrc,
  setAudioBuffered,
  setAudioCurrent,
  setAudioCurrentTime,
  setAudioDropping,
  setAudioHistoryClear,
  setAudioImmediate,
  setAudioImmediateNext,
  setAudioNext,
  setAudioPattern,
  setAudioPlaylist,
  setAudioPlaylistAdd,
  setAudioPlaylistClear,
  setAudioPrev,
  setAudioRunning,
  setAudioRunningPause,
  setAudioRunningPlay,
  setAudioRunningToggle,
  setJumpToAudioCurrentTime,
  setRunErrorAdd,
  setRunErrorDesc,
} = slice.actions;
