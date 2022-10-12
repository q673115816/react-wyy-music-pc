import React, {
  useState,
  useContext,
  FormEventHandler,
  ChangeEventHandler,
  memo,
} from "react";
import { IconFaceId } from "@tabler/icons";
import { apiRegisterCellphone } from "@/api";
import {
  actionSwitchIdentify,
  actionSwitchSignUp,
  loginContext,
} from "./Content";
import DomSelect from "./components/Select";

const Reset = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [warn, setWarn] = useState("");
  const {
    loginState: { countrycode },
    loginDispatch,
  } = useContext(loginContext);

  const handleFocus = () => {};

  const handlePhone: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setPhone(target.value);

  const handlePassword: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setPassword(target.value);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!phone) {
      setWarn("⚠️请输入手机号码");
    } else if (!password) {
      setWarn("⚠️请输入登录密码");
    } else {
      loginDispatch(actionSwitchIdentify());
    }
  };

  return (
    <div className="form">
      <div className="angle">
        <button
          className="mt-2.5"
          type="button"
          onClick={() => loginDispatch(actionSwitchSignUp())}
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
                <DomSelect />
              </td>
              <td colSpan={2}>
                <input
                  type="text"
                  name="phone"
                  placeholder="请输入手机号"
                  className="input"
                  value={phone}
                  onFocus={handleFocus}
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
                  value={password}
                  minLength={8}
                  maxLength={20}
                  onFocus={handleFocus}
                  onChange={handlePassword}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          {warn ? (
            <div className="warn text-red-500 ml-auto">{warn}</div>
          ) : (
            <span className="text-gray-400">
              密码8-20位，至少包含字母/数字/字符2中组合
            </span>
          )}
        </div>
        <div className="actions">
          <button type="submit" className="submit">
            下一步
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Reset);
