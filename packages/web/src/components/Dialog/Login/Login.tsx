import React, { createElement, FC, memo } from "react";
import { IconX } from "@tabler/icons";
import { useImmerReducer } from "use-immer";
import style from "./style.module.scss";
import Scan from "./Scan";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Identify from "./Identify";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  LoginInitialState,
  LoginReducer,
  loginContext,
  LoginType,
} from "./Content";
import {
  maskSelector,
  toggleLoginVisibility,
} from "@/modules/reducers/mask/slice";
import classNames from "classnames";

const Build: { [key in LoginType]: FC<any> } = {
  Scan,
  SignIn,
  SignUp,
  Reset,
  Identify,
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginVisibility } = useAppSelector(maskSelector);
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
        onClick={() => dispatch(toggleLoginVisibility())}
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
