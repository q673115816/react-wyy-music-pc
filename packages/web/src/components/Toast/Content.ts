import { createContext, Dispatch } from "react";
import { Reducer } from "use-immer";

interface State {
  id: number | null;
  text: string | null;
  visible: boolean;
}

export const initialState: State = {
  id: null,
  text: null,
  visible: false,
};

export interface Context {
  state: State;
  dispatch: Dispatch<<T>(payload?: T) => { type: string; payload?: T }>;
}

export const context = createContext(null);

export const reducer: Reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "change":
      Object.assign(state, payload);
      state.visible = true;
      return;
    case "reset":
      Object.assign(state, initialState);
      return;
    default:
      return state;
  }
};

export const setToast = (payload) => ({
  type: "change",
  payload,
});

export const resetToast = () => ({
  type: "reset",
});
