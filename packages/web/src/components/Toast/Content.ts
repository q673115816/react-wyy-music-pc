import { createContext } from "react";

export const context = createContext(null);

export const initialStatus = {
  id: null,
  text: null,
  visible: false,
};

export const reducer = (state = initialStatus, { payload, type }) => {
  switch (type) {
    case "change":
      return { ...state, ...payload, visible: true };
    case "reset":
      return { ...state, visible: false };
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
