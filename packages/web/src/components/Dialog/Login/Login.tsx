import React, { createElement, FC, memo } from "react";
import { IconX } from "@tabler/icons";
import {
  commonSelector,
  setLoginVisibilty,
} from "@/modules/reducers/common/slice";
import { useImmerReducer } from "use-immer";
import "./style.scss";
import Scan from "./Scan";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Identify from "./Identify";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  LoginInitialState,
  LoginReducer,
  LoginContext,
  LoginType,
  LoginState,
} from "./Content";

const Build: { [key in LoginType]: FC } = {
  Scan,
  SignIn,
  SignUp,
  Reset,
  Identify,
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginVisibility } = useAppSelector(commonSelector);
  const [loginReducer, loginDispatch] = useImmerReducer<LoginState>(
    LoginReducer,
    LoginInitialState
  );
  const { type } = loginReducer;
  if (!loginVisibility) return null;
  return (
    <div
      id="dialogLogin"
      className="-translate-x-1/2 -translate-y-1/2 bg-white fixed left-1/2 rounded shadow top-1/2 transform ui_dialog"
    >
      <button
        type="button"
        className="ui_dialog_close close"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        <IconX stroke={1.5} />
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        {createElement(Build[type])}
      </LoginContext.Provider>
    </div>
  );
};

export default memo(Login);
