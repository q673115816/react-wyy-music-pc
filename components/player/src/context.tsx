import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useReducer,
} from "react";
import { reducer } from "./reducers";
import { State, Action, VOLUME, MUTED } from "./types";

export const initialState: State = {
  play: true,
  full: false,
  buffered: [],
  duration: 0,
  currentTime: 0,
  jumpTime: 0,
  jumpRatio: 0,
  volume: 1,
  muted: false,
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
