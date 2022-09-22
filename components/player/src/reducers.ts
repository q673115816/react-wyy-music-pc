import type { State, Action } from "./types";
export enum Types {
  Update = "UPDATE",
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Types.Update:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
