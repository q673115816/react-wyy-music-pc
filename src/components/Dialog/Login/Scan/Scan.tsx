import React, {
  FC,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEventHandler,
} from "react";
import { unstable_batchedUpdates as batchedUpdates } from "react-dom";
import { apiLoginQrCheck, apiLoginQrCreate, apiLoginQrKey } from "@/api";
import { LoginContext, SET_TYPE } from "../Content";
import Refresh from "./Refresh";
import Success from "./Success";
import Wait from "./Wait";
import { Set } from "@/modules/utils";

export default memo(function Scan() {
  const [qrimg, setQrimg] = useState("");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState(0);
  const timer = useRef<NodeJS.Timer>();
  const { loginDispatch } = useContext(LoginContext);
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
    const { code, cookie } = await apiLoginQrCheck({
      key,
    }).catch((error: Error) => console.log(error));
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

  const handleChooseOtherSign = useCallback(
    () => loginDispatch({ type: SET_TYPE, payload: { type: "signin" } }),
    []
  );

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    timer.current = setInterval(handleLoop, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [key]);

  return (
    <div className="qr pt-24 flex items-center flex-col">
      <div className="title text-2xl">扫码登录</div>
      {(status === 0 || status === 800) && (
        <Wait qrimg={qrimg} handleChooseOtherSign={handleChooseOtherSign}>
          {status === 800 && <Refresh handleInit={handleInit} />}
        </Wait>
      )}
      {status === 802 && <Success />}
    </div>
  );
});
