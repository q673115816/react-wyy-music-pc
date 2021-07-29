import React, { createContext, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconX } from '@tabler/icons';
import { setLoginVisibilty } from '@/reducers/common/slice';
import './style.scss';
import DomScan from './Scan';
import DomSignIn from './SignIn';
import DomSignUp from './SignUp';
import DomReset from './Reset';
import DomIdentify from './Identify';

export const LoginContext = createContext(null);

const Build = {
  scan: () => <DomScan />,
  signin: () => <DomSignIn />,
  signup: () => <DomSignUp />,
  reset: () => <DomReset />,
  identify: () => <DomIdentify />,
};

export default () => {
  const dispatch = useDispatch();
  const { loginVisibility } = useSelector(({ common }) => common);
  const [loginReducer, loginDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_WARN':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PHONE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PASSWORD':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_ARGEEARGUMENT':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_COUNTRYCODE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  }, {
    argeeArgument: false,
    loginphone: '',
    loginpassword: '',
    registerphone: '',
    registerpassword: '',
    type: 'scan',
    countrycode: '86',
  });
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
        {Build[loginReducer.type]()}
      </LoginContext.Provider>
    </div>
  );
};
