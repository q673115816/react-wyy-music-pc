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
import style from "./signin.module.scss";
import classNames from "classnames";
import Checkbox from "@/components/CheckBox";
import { actionSwitchScan, actionSwitchSignUp, LoginContext } from "../Content";

import { Set } from "@/modules/utils";
import Argument from "./Argument";
import Threes from "../components/Threes";
import Table from "../components/Table";
import Submit from "../components/Submit";

const SignIn = () => {
  const RefAgreement = useRef(null);
  const RefForm = useRef(null);
  const {
    loginReducer: { countrycode },
    loginDispatch,
  } = useContext(LoginContext);

  const [warn, setWarn] = useState("");

  const isArgeement = () => {
    if (!RefAgreement.current.checked) {
      alert("请先勾选同意《服务条款》《服务条款》《服务条款》");
      return false;
    }
    return true;
  };

  const handleCheck = () => {
    const phone = RefForm.current.phone.value;
    const password = RefForm.current.password.value;
    if (!phone) {
      setWarn("⚠️请输入手机号");
      return false;
    } else if (!password) {
      setWarn("⚠️请输入密码");
      return false;
    } else if (!/\d{11}/.test(phone)) {
      setWarn("⚠️请输入11位数字的手机号");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      const { data, code, msg, cookie, token, profile } =
        await apiLoginCellphone({
          phone: RefForm.current.phone.value,
          password: RefForm.current.password.value,
          countrycode,
        });
      if (code === 200) {
        Set({ key: "cookie", value: cookie });
        window.location.reload();
      }
      if (code === 502) setWarn(`⚠️${msg}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!isArgeement()) return;
    if (!handleCheck()) return;
    handleLogin();
  };

  const handleToSignUp = () => {
    if (!isArgeement()) return;
    loginDispatch(actionSwitchSignUp());
  };

  return (
    <div className="px-10">
      <div className="absolute top-0 left-0">
        <button type="button" onClick={() => loginDispatch(actionSwitchScan())}>
          <IconQrcode size={36} />
        </button>
        <span
          className={classNames(
            style.tips,
            "absolute top-3 left-12 pr-3 pl-4 py-1.5 text-white whitespace-nowrap bg-gray-400"
          )}
        >
          扫码登录更安全
        </span>
      </div>
      <div style={{ height: 200 }} className="flex-center ui_themeColor">
        <IconFaceId size={100} stroke={1} />
      </div>
      <form ref={RefForm} onSubmit={handleSubmit}>
        <Table reset={true} />
        <div className="py-4 flex">
          <Checkbox
            label={<span className={`text-gray-500`}>&nbsp;自动登录</span>}
          />
          <div className="warn ml-auto text-red-500">{warn}</div>
        </div>
        <div className="actions">
          <Submit>登&nbsp;录</Submit>
          <button
            type="button"
            className="signup underline my-2 mx-auto text-sm block w-min whitespace-nowrap"
            onClick={handleToSignUp}
          >
            注册
          </button>
          <Threes />
        </div>
        <div className={`mt-9`}>
          <Checkbox ref={RefAgreement} label={<Argument />} />
        </div>
      </form>
    </div>
  );
};

export default memo(SignIn);
