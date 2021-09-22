import React, {
  memo,
  MouseEventHandler,
  ReactNode,
  useContext,
  useRef,
} from "react";
import classnames from "classnames";
import useLoginStatus, { handleLoginStatus } from "@/hooks/useLoginStatus";
import { LookContent } from "@/pages/Look/Base";
import {
  SOCKET_DESKTOP_END,
  SOCKET_DESKTOP_START,
  SOCKET_PUSH_END,
  SOCKET_PUSH_START,
  SOCKET_USER_END,
  SOCKET_USER_START,
} from "../Content";

// 以下代码是从网上找的
//=========================================================================================
//如果返回的是false说明当前操作系统是手机端，如果返回的是true则说明当前的操作系统是电脑端

function IsPC() {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;

  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

//如果返回true 则说明是Android  false是ios
function is_android() {
  const u = navigator.userAgent,
    app = navigator.appVersion;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    return true;
  }

  if (isIOS) {
    //这个是ios操作系统
    return false;
  }
}

interface iButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  status: boolean;
  children: ReactNode;
}

const Button = memo<iButtonProps>(({ onClick, status, children }) => (
  <button
    type={"button"}
    className={classnames(
      `text-white rounded p-2`,
      status ? "bg-red-500" : "bg-blue-500"
    )}
    onClick={onClick}
  >
    {children}
  </button>
));

/*
 * TODO
 *  1.信令系统
 *  2.摄像头叠加桌面，如基本直播
 * */
export default memo(() => {
  const {
    lookReducer: { status, socket },
    lookDispatch,
  } = useContext(LookContent);
  const RefDeskTop = useRef<HTMLVideoElement>(null);
  const RefDeskTopStream = useRef<MediaStream>(null);
  const RefUser = useRef<HTMLVideoElement>(null);
  const handleDeskTop: MouseEventHandler = () => {
    if (status.deskTop)
      handleMediaClose(RefDeskTop.current as HTMLVideoElement, () => {
        lookDispatch({ type: SOCKET_DESKTOP_END });
      });
    else
      handleMediaOpen(
        RefDeskTop.current as HTMLVideoElement,
        "getDisplayMedia",
        () => {
          lookDispatch({ type: SOCKET_DESKTOP_START });
        }
      );
  };

  const handleMediaOpen = (
    ref: HTMLVideoElement,
    targetFunction: "getDisplayMedia" | "getUserMedia",
    success: () => void
  ) => {
    let stream = null;
    const mediaStreamConstraints = {
      video: true,
      audio: true,
    };

    function gotDeskTopMediaStream(mediaStream: MediaStream) {
      ref.srcObject = mediaStream;
      // deskTopStream = mediaStream;
      success && success();
    }

    navigator.mediaDevices[targetFunction](mediaStreamConstraints)
      .then(gotDeskTopMediaStream)
      .catch((err) => console.log(err));
  };

  const handleMediaClose = (ref: HTMLVideoElement, success: () => void) => {
    const tracks = (ref.srcObject as MediaStream)?.getTracks();
    tracks.forEach((track) => track.stop());
    ref.srcObject = null;
    success && success();
  };

  const handleUser: MouseEventHandler = () => {
    if (status.user)
      handleMediaClose(RefUser.current as HTMLVideoElement, () => {
        lookDispatch({ type: SOCKET_USER_END });
      });
    else
      handleMediaOpen(
        RefUser.current as HTMLVideoElement,
        "getUserMedia",
        () => {
          lookDispatch({ type: SOCKET_USER_START });
        }
      );
  };

  const handleSend: MouseEventHandler = () => {
    if (status.push) handlePushClose();
    else handlePushOpen();
  };

  const handlePushOpen = () => {
    lookDispatch({ type: SOCKET_PUSH_START });
    const pc = new RTCPeerConnection({});
    pc.addEventListener("icecandidate", (e) => {
      const peerConnection = e.target;
      const iceCandidate = e.candidate;

      if (iceCandidate) {
        const newIceCandidate = new RTCIceCandidate(iceCandidate);
        const otherPeer;
      }
    });
  };
  const handlePushClose = () => {
    lookDispatch({ type: SOCKET_PUSH_END });
  };

  return (
    <div className={`w-full h-full p-8 overflow-auto`}>
      <div className={`flex`}>
        <Button onClick={handleDeskTop} status={status.deskTop}>
          桌面共享开关
        </Button>
        <Button onClick={handleUser} status={status.user}>
          摄像头开关
        </Button>
        <Button onClick={handleSend} status={status.push}>
          推送开关
        </Button>
      </div>
      <div className={`flex flex-col`}>
        <div className={``}>
          <video className={`w-full`} ref={RefDeskTop} autoPlay playsInline />
        </div>
        <div className={""}>
          <video className={`w-full`} ref={RefUser} autoPlay playsInline />
        </div>
      </div>
    </div>
  );
});
