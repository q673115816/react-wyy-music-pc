import React, { FormEventHandler, memo, useContext, useState } from "react";
import { IconFaceId } from "@tabler/icons";
import Threes from "./components/Threes";
import Table from "./components/Table";
import Submit from "./components/Submit";
import style from "./style.module.scss";
import {
  actionSwitchSignIn,
  actionSwitchSignUp,
  loginContext,
} from "./Content";
import classNames from "classnames";

const SignUp = () => {
  const [warn, setWarn] = useState("");
  const {
    loginState: { countrycode },
    loginDispatch,
  } = useContext(loginContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

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
        <Table />
        <div className="py-4">
          {warn ? (
            <div className="warn ui_red">{warn}</div>
          ) : (
            <span className="text-gray-400">
              密码8-20位，至少包含字母/数字/字符2中组合
            </span>
          )}
        </div>
        <div className="actions">
          <Submit>注册</Submit>
          <div
            className={classNames(
              style.hint,
              "flex items-center justify-between mt-8 mb-4"
            )}
          >
            其他注册方式
          </div>
          <Threes />
        </div>
      </form>
    </div>
  );
};

export default memo(SignUp);
