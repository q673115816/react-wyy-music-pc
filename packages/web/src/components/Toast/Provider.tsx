import React, { FC, useReducer, PropsWithChildren } from "react";
import { initialStatus, reducer, context } from "./Content";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStatus);
  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};

export default Provider;
