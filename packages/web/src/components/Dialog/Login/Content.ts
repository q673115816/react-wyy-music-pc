import { createContext, Dispatch } from "react";
import { Reducer } from "use-immer";

export interface Action {
  type: string;
  payload?: any;
}

interface Context {
  loginState: LoginState;
  loginDispatch: Dispatch<Action>;
}

export const loginContext = createContext<Context>({} as Context);

export const SET_TYPE = "SET_TYPE";
export const SET_SIGNIN_WARN = "SET_SIGNIN_WARN";
export const SET_SIGNIN_COUNTRYCODE = "SET_SIGNIN_COUNTRYCODE";

export const LoginReducer: Reducer = (draft, { type, payload }) => {
  switch (type) {
    case SET_TYPE:
      draft.type = payload.type;
      return;
    case SET_SIGNIN_WARN:
      return;
    case SET_SIGNIN_COUNTRYCODE:
      draft.countrycode = payload.countrycode;
      return;
    default:
      return;
  }
};

export type LoginType = "Scan" | "SignIn" | "SignUp" | "Reset" | "Identify";

export interface LoginState {
  argeeArgument: boolean;
  loginphone: string;
  loginpassword: string;
  registerphone: string;
  registerpassword: string;
  type: LoginType;
  countrycode: string;
}

export const LoginInitialState: LoginState = {
  argeeArgument: true,
  loginphone: "",
  loginpassword: "",
  registerphone: "",
  registerpassword: "",
  type: "Scan",
  countrycode: "86",
};

const createActionSwitch = (type: LoginType) => () => ({
  type: SET_TYPE,
  payload: {
    type,
  },
});

export const actionSwitchScan = createActionSwitch("Scan");
export const actionSwitchSignIn = createActionSwitch("SignIn");
export const actionSwitchSignUp = createActionSwitch("SignUp");
export const actionSwitchReset = createActionSwitch("Reset");
export const actionSwitchIdentify = createActionSwitch("Identify");
