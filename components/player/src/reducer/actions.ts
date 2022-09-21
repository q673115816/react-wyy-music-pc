import { SET_DATA } from "./actionTypes";

export const actionSetData = (payload: Record<string, any>) => ({
  type: SET_DATA,
  payload,
});
