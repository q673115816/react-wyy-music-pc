import type { State, Action } from "./types";
export enum Types {
  Update = "UPDATE",
}

export const actionUpdate = (payload: any) => ({
  type: Types.Update,
  payload,
});

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
