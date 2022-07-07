import { createSlice } from "@reduxjs/toolkit";
import { Draft } from "immer";
import remove from "lodash/remove";

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

export const searchSelector = <T = Draft<State>>({ search }: { search: T }) =>
  search;

export default slice.reducer;

export const {
  setKeywords,
  setSearchCount,
  setHistory,
  clearHistory,
  delHistory,
} = slice.actions;
