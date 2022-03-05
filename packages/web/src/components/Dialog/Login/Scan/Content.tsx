import { IconScan } from "@tabler/icons";
import React, {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { unstable_batchedUpdates as batchedUpdates } from "react-dom";
import {
  actionSwitchSignIn,
  actionSwitchSignUp,
  LoginContext,
} from "../Content";
import Refresh from "@/components/Dialog/Login/Scan/Refresh";
import { apiLoginQrCreate, apiLoginQrKey } from "@/api";
import { Set } from "@/modules/utils";
import Success from "@/components/Dialog/Login/Scan/Success";
import { useGetLoginQRCheckMutation } from "@/modules/services/account";

interface iProps {}

const Content: FC<iProps> = () => {
  const { loginDispatch } = useContext(LoginContext);
  const handleChooseOtherSign = () => loginDispatch(actionSwitchSignIn());
  const [qrimg, setQrimg] = useState("");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState(0);
  const timer = useRef<NodeJS.Timer>();
  const [loginQRCheckGet, {}] = useGetLoginQRCheckMutation();
  const handleInit = useCallback(async () => {
    try {
      const {
        data: { unikey },
      } = await apiLoginQrKey();
      const {
        data: { qrimg },
      } = await apiLoginQrCreate({
        key: unikey,
        qrimg: true,
      });
      batchedUpdates(() => {
        setKey(unikey);
        setQrimg(qrimg);
        setStatus(0);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleLoop = async () => {
    const data = await loginQRCheckGet({
      key,
    }).catch((error: Error) => console.log(error));
    const cookie = data.data.cookie;
    const code = data.data.code;
    switch (code) {
      case 800:
        if (timer.current) clearInterval(timer.current);
        setStatus(800);
        break;
      case 802:
        setStatus(802);
        break;
      case 803:
        Set({ key: "cookie", value: cookie });
        window.location.reload();
        break;
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    timer.current = setInterval(handleLoop, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [key]);
  if (status === 802) return <Success />;

  return (
    <div className="scanwait text-center">
      <div className="qrbox relative">
        <div className="left absolute transition-all duration-300">
          <div className="ico ui_themeColor flex-center">
            <IconScan size={64} />
          </div>
        </div>
        <div className="right absolute transition-all duration-300">
          <div className="qrimg transition-all duration-300 relative m-auto border">
            <img src={qrimg} alt="" />
            {status === 800 && <Refresh handleInit={handleInit} />}
          </div>
          <div className="tips text-sm mt-4">
            使用
            <a href="https://music.163.com/#/download" className="ui_link">
              网易云音乐APP
            </a>
            扫码登录
          </div>
        </div>
      </div>
      <button type="button" onClick={handleChooseOtherSign}>
        选择其他登录模式&nbsp;&gt;
      </button>
    </div>
  );
};

export default memo(Content);
