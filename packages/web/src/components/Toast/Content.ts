import { createContext, Dispatch } from "react";
import { Reducer } from "use-immer";

interface State {
  id: NodeJS.Timeout | null;
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

export const context = createContext<Context | null>(null);

export const { Provider } = context;

export const reducer: Reducer<State> = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case "change":
      Object.assign(state, payload);
      state.visible = true;
      return;
    case "hide":
      state.visible = false;
      return;
    case "reset":
      Object.assign(state, initialState);
      return;
    default:
      return state;
  }
};

export const setToast = (payload: Partial<State>) => ({
  type: "change",
  payload,
});

export const resetToast = () => ({
  type: "reset",
});
export const hideToast = () => ({
  type: "hide",
});
