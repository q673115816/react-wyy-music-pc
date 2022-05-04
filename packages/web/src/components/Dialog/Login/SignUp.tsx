import React, {
  FormEventHandler,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";
import { IconFaceId, IconDeviceMobile } from "@tabler/icons";
import Select from "./components/Select";
import Threes from "./components/Threes";

import {
  actionSwitchSignIn,
  actionSwitchSignUp,
  LoginContext,
} from "./Content";

const SignUp = () => {
  const [warn, setWarn] = useState("");
  const {
    loginReducer: { registerphone, registerpassword, countrycode },
    loginDispatch,
  } = useContext(LoginContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!registerphone) {
      setWarn("⚠️请输入手机号码");
    } else if (!registerpassword) {
      setWarn("⚠️请输入登录密码");
    }
  };

  const handleFocus = useCallback(
    ({ target }) => target.removeAttribute("readonly"),
    []
  );

  const handlePhone = () => {};

  const handlePassword = () => {};

  return (
    <div className="form px-10">
      <div className="angle absolute top-0 left-0">
        <button
          className="mt-2.5"
          type="button"
          onClick={() => loginDispatch(actionSwitchSignIn())}
        >
          &lt; 返回登录
        </button>
      </div>
      <div
        style={{ height: 200, color: "var(--theme-color)" }}
        className="flex-center"
      >
        <IconFaceId size={100} stroke={1} />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <table className="table">
          <colgroup>
            <col width="84" />
            <col width="auto" />
            <col width="84" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Select />
              </td>
              <td colSpan={2}>
                <input
                  type="text"
                  name="phone"
                  placeholder="请输入手机号"
                  className="input"
                  readOnly
                  onFocus={handleFocus}
                  value={registerphone}
                  onChange={handlePhone}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <input
                  type="password"
                  name="password"
                  placeholder="设置登录密码"
                  className="input"
                  readOnly
                  onFocus={handleFocus}
                  value={registerpassword}
                  minLength={8}
                  maxLength={20}
                  onChange={handlePassword}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          {warn ? (
            <div className="warn ui_red">{warn}</div>
          ) : (
            <span className="text-gray-400">
              密码8-20位，至少包含字母/数字/字符2中组合
            </span>
          )}
        </div>
        <div className="actions">
          <button type="submit" className="submit">
            注册
          </button>
          <div className="hint flex items-center justify-between mt-8 mb-4">
            其他注册方式
          </div>
          <Threes />
        </div>
      </form>
    </div>
  );
};

export default memo(SignUp);
