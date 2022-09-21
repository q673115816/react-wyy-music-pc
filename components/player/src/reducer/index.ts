import { createContext, Dispatch } from "react";
import { SET_DATA } from "./actionTypes";

interface State {
  play: boolean;
  full: boolean;
  buffered: number[][];
  duration: number;
  currentTime: number;
  jumpTime: number;
}

type Context = State & {
  handleChangePlay: () => void;
  handleChangeFull: () => void;
  videoDispatch: Dispatch<{ type: string; payload: any }>;
};

export const VideoContext = createContext<Context>({} as Context);
export const { Provider } = VideoContext;

interface Action {
  type: string;
  payload: any;
}

export const initialState = {
  play: false,
  full: false,
  buffered: [],
  duration: 0,
  currentTime: 0,
  jumpTime: 0,
};

export default (state: State, action: Action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
