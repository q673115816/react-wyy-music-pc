import React, { createElement, FC, memo } from "react";
import { IconX } from "@tabler/icons-react";
import { useImmerReducer } from "use-immer";
import style from "./style.module.scss";
import Scan from "./Scan";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Identify from "./Identify";
import {
  LoginInitialState,
  LoginReducer,
  loginContext,
  LoginType,
} from "./Content";

import classNames from "classnames";
import { useMaskStore } from "@/stores";

const Build: { [key in LoginType]: FC<any> } = {
  Scan,
  SignIn,
  SignUp,
  Reset,
  Identify,
};

const Login = () => {
  const { loginVisibility } = useMaskStore();
  const [loginState, loginDispatch] = useImmerReducer(
    LoginReducer,
    LoginInitialState
  );
  const { type } = loginState;
  if (!loginVisibility) return null;
  return (
    <div
      className={classNames(
        style.dialog,
        "-translate-x-1/2 -translate-y-1/2 bg-white fixed left-1/2 rounded shadow top-1/2 transform"
      )}
    >
      <button
        type="button"
        className="absolute top-2.5 right-2.5 text-2xl z-10 text-gray-500"
        onClick={() => useMaskStore.getState().toggleLoginVisibility()}
      >
        <IconX stroke={1.5} />
      </button>
      <loginContext.Provider value={{ loginState, loginDispatch }}>
        {createElement(Build[type])}
      </loginContext.Provider>
    </div>
  );
};

export default memo(Login);
