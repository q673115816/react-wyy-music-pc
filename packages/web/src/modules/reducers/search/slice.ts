import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { RootState } from "@/modules/store";

interface State {
  keywords: string;
  count: number;
  history: string[];
}

const initialState: State = {
  keywords: "",
  count: 0,
  history: [],
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeywords(state, { payload }) {
      Object.assign(state, payload);
    },
    setSearchCount(state, { payload }) {
      state.count = payload.count;
    },
    setHistory(state, { payload }) {
      const { keywords } = payload;
      remove(state.history, (history) => history === keywords);

      state.history.unshift(keywords);
    },
    delHistory(state, { payload }) {
      const { keywords } = payload;
      remove(state.history, (history) => history === keywords);
    },
    clearHistory(state) {
      state.history.length = 0;
    },
  },
});

export const searchSelector = (state: RootState) => state.search;

export default slice.reducer;

export const {
  setKeywords,
  setSearchCount,
  setHistory,
  clearHistory,
  delHistory,
} = slice.actions;
