import React, {
  ChangeEventHandler,
  FormEventHandler,
  memo,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { apiLoginCellphone } from "@/api";
import { IconFaceId, IconQrcode } from "@tabler/icons";

import Checkbox from "@/components/Checkbox";
import { LoginContext, SET_SIGNIN_PHONE } from "./Content";
import Select from "./components/Select";
import Threes from "./components/Threes";
import SubmitBtn from "./components/SubmitBtn";
import {
  SET_SIGNIN_ARGEEARGUMENT,
  SET_SIGNIN_PASSWORD,
  SET_TYPE,
} from "./Content";
import Input from "./components/Input";
import { Set } from "@/modules/utils";

const SignIn = () => {
  const {
    loginReducer: { argeeArgument, loginphone, loginpassword, countrycode },
    loginDispatch,
  } = useContext(LoginContext);

  const [warn, setWarn] = useState("");
  const [autoLogin, setAutoLogin] = useState(true);

  const handleAutoLogin: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setAutoLogin(target.checked);
    },
    []
  );
  const handleLogin = async () => {
    try {
      const { data, code, msg, cookie, token, profile } =
        await apiLoginCellphone({
          phone: loginphone,
          password: loginpassword,
          countrycode,
        });
      if (code === 200) {
        Set({ key: "cookie", value: cookie });
        // handleToggle();
        // dispatch(setLoginInfo(profile));
        // dispatch(setIsLogin());
        window.location.reload();
      }
      if (code === 502) {
        setWarn("⚠️当前登录失败，请稍后再试");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!argeeArgument) {
      alert("请先勾选同意《服务条款》《服务条款》《服务条款》");
    } else if (!loginphone) {
      setWarn("⚠️请输入手机号");
    } else if (!loginpassword) {
      setWarn("⚠️请输入密码");
    } else if (!/\d{11}/.test(loginphone)) {
      setWarn("⚠️请输入11位数字的手机号");
    } else {
      handleLogin();
    }
  };

  const handlePhone: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const loginphone = event.target.value;
      loginDispatch({
        type: SET_SIGNIN_PHONE,
        payload: {
          loginphone,
        },
      });
    },
    []
  );
  const handlePassword: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const loginpassword = event.target.value;
      loginDispatch({
        type: SET_SIGNIN_PASSWORD,
        payload: {
          loginpassword,
        },
      });
    },
    []
  );

  const handleArgument: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const argeeArgument = event.target.checked;
      loginDispatch({
        type: SET_SIGNIN_ARGEEARGUMENT,
        payload: {
          argeeArgument,
        },
      });
    },
    []
  );

  const handleToSignUp = () => {
    if (argeeArgument) {
      loginDispatch({
        type: SET_TYPE,
        payload: { type: "signup" },
      });
    } else {
      alert("请先勾选同意《服务条款》《服务条款》《服务条款》");
    }
  };

  return (
    <div className="form px-10">
      <div className="angle absolute top-0 left-0">
        <button
          type="button"
          onClick={() =>
            loginDispatch({ type: SET_TYPE, payload: { type: "scan" } })
          }
        >
          <IconQrcode size={36} />
        </button>
        <span className="absolute top-3 left-12 pr-3 pl-4 py-1.5 tips text-white whitespace-nowrap bg-gray-400">
          扫码登录更安全
        </span>
      </div>
      <div style={{ height: 200 }} className="flex-center ui_themeColor">
        <IconFaceId size={100} stroke={1} />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <table className="table">
          <colgroup>
            <col style={{ width: 84 }} />
            <col style={{ width: `calc(100% - 168px)` }} />
            <col style={{ width: 84 }} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Select />
              </td>
              <td colSpan={2}>
                <Input
                  type="text"
                  name="phone"
                  placeholder="请输入手机号"
                  value={loginphone}
                  onChange={handlePhone}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  value={loginpassword}
                  onChange={handlePassword}
                />
              </td>
              <td>
                <div className="flex-center">
                  <button
                    type="button"
                    className="text-gray-400"
                    onClick={() =>
                      loginDispatch({
                        type: SET_TYPE,
                        payload: { type: "reset" },
                      })
                    }
                  >
                    重设密码
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          <label htmlFor="autoLogin" className="auto">
            {/* <input type="checkbox" name="auto" hidden />
            <i className="ico flex-center">✔</i> */}
            <Checkbox
              onChange={handleAutoLogin}
              checked={autoLogin}
              name="autoLogin"
            />
            &nbsp; 自动登录
          </label>
          <div className="warn ml-auto text-red-500">{warn}</div>
        </div>
        <div className="actions">
          <button type="submit" className="submit">
            登&nbsp;录
          </button>
          <button
            type="button"
            className="signup underline my-2 mx-auto text-sm block w-min whitespace-nowrap"
            onClick={handleToSignUp}
          >
            注册
          </button>
          <Threes />
        </div>
        <Argument>
          <Checkbox
            name="argument"
            onChange={handleArgument}
            checked={argeeArgument}
          />
        </Argument>
      </form>
    </div>
  );
};

export default memo(SignIn);

const Argument = memo(({ children }) => (
  <label
    htmlFor="argument"
    className="argument flex items-center whitespace-nowrap mt-9"
  >
    {children}
    &nbsp;
    <span className="text-gray-400">同意</span>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/service"
    >
      《服务条款》
    </a>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/privacy"
    >
      《隐私条款》
    </a>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/children"
    >
      《儿童隐私条款》
    </a>
  </label>
));
