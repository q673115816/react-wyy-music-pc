import { createContext } from "react";

export const context = createContext(null);

export const initialStatus = {
  id: null,
  text: null,
};

export const reducer = (state = initialStatus, { payload, type }) => {
  switch (type) {
    case "change":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const setToast = (payload) => ({
  type: "change",
  payload,
});
