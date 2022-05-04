import React, { useReducer } from "react";
import { initialStatus, reducer, context } from "./Content";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStatus);
  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};

export default Provider;
