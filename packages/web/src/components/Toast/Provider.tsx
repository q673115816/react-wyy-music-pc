import React, { FC, PropsWithChildren } from "react";
import { initialState, reducer, context } from "./Content";
import { useImmerReducer } from "use-immer";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export default Provider;
