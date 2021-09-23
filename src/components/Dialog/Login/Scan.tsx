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
import { unstable_batchedUpdates } from "react-dom";
import { IconFaceId, IconScan } from "@tabler/icons";
import { apiLoginQrCheck, apiLoginQrCreate, apiLoginQrKey } from "@/api";
import { setCookie } from "@/api/cookie";
import { LoginContext, SET_TYPE } from "./Content";

interface iRefreshProps {
  handleInit: MouseEventHandler;
}

const DomRefresh: FC<iRefreshProps> = memo(({ handleInit }) => (
  <div className="absolute bg-black bg-opacity-60 flex-center flex-col inset-0 mask text-white">
    <div>二维码已失效</div>
    <button
      type="button"
      className="btn w-20 h-8 rounded mt-2 bg-blue-500"
      onClick={handleInit}
    >
      点击刷新
    </button>
  </div>
));

const DomSuccess = () => (
  <div className="scansuccess flex-center flex-col">
    <div className="flex-center ui_themeColor my-10">
      <IconFaceId size={64} stroke="1" />
    </div>
    <span className="text-gray-400 text-sm">扫描成功</span>
    <div className="tips text-base mt-4">请在手机上确认登录</div>
  </div>
);

interface iWaitingProps {
  qrimg: string;
  handleChooseOtherSign: MouseEventHandler;
}

const Waiting: FC<iWaitingProps> = memo(
  ({ qrimg, handleChooseOtherSign, children }) => (
    <div className="scanwait text-center">
      <div className="qrbox relative">
        <div className="left">
          <div className="ico ui_themeColor flex-center">
            <IconScan size={64} />
          </div>
        </div>
        <div className="right">
          <div className="qrimg relative m-auto">
            <img src={qrimg} alt="" />
            {children}
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
  )
);

export default memo(() => {
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
      unstable_batchedUpdates(() => {
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
        setCookie(cookie);
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
      {status === 0 ||
        (status === 800 && (
          <Waiting {...{ qrimg, handleChooseOtherSign }}>
            {status === 800 && <DomRefresh handleInit={handleInit} />}
          </Waiting>
        ))}
      {status === 802 && <DomSuccess />}
    </div>
  );
});
