import React, { useState, useContext, memo } from "react";
import { IconFaceId, IconKey } from "@tabler/icons";
import { apiCaptchaSent } from "@/api";
import {
  actionSwitchSignIn,
  actionSwitchSignUp,
  loginContext,
} from "./Content";

const Identify = () => {
  const [warn, setWarn] = useState("");
  const {
    loginState: {},
    loginDispatch,
  } = useContext(loginContext);
  const handleSubmit = () => {};

  const handleSend = async () => {
    try {
      const {} = apiCaptchaSent({
        phone: "",
        captcha: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <div className="angle">
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
      <div>为了安全，我们会向您的手机发送短信检验码</div>
      <form onSubmit={handleSubmit} className="mt-6" autoComplete="off">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <i className="absolute inset-y-0 flex">
              <IconKey size={16} className="m-auto w-6" />
            </i>
            <input
              type="text"
              className="border h-full pl-6 rounded"
              placeholder="填写验证码"
            />
          </div>
          <div className="flex-1">
            <button type="button" className="submit">
              重新获取
            </button>
          </div>
        </div>
        <div className="info">
          <div className="warn text-red-500 ml-auto">{warn}</div>
        </div>
        <div className="actions">
          <button type="submit" className="submit">
            完成
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Identify);
