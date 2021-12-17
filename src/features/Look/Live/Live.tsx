import React, {
  EventHandler,
  FC,
  memo,
  MouseEventHandler,
  ReactEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import classnames from "classnames";
import useLoginStatus, { handleLoginStatus } from "@/hooks/useLoginStatus";
import { LookContent } from "@/features/Look/Look";
import {
  SOCKET_DESKTOP_END,
  SOCKET_DESKTOP_START,
  SOCKET_PUSH_END,
  SOCKET_PUSH_START,
  SOCKET_USER_END,
  SOCKET_USER_START,
} from "../Content";
import { configuration } from "../config";
import useGetInput from "@/features/Look/Live/useGetInput";
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
  onClick: MouseEventHandler;
  status: boolean;
}

const Button: FC<iButtonProps> = ({ onClick, children, status }) => {
  return (
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
  );
};

/*
 * TODO
 *  1.信令系统
 *  2.摄像头叠加桌面，如基本直播
 * */
export default memo(function Live() {
  const {
    lookReducer: { status, socket },
    lookDispatch,
  } = useContext(LookContent);
  // const [isSupport] = useState<boolean>(() => {
  //   return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  // });

  const { audioinput, videoinput } = useGetInput();

  const RefVideo = useRef<HTMLVideoElement>(null);
  const RefDeskTop = useRef<HTMLVideoElement>(null);
  const RefDeskTopStream = useRef<MediaStream>(null);
  const RefUser = useRef<HTMLCanvasElement>(null);
  const RefCtx = useRef<CanvasRenderingContext2D>(null);
  const RefFace = useRef(new FaceDetector());
  const handleDeskTop: MouseEventHandler = () => {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia))
      return false;
    const diskTop = RefDeskTop.current as HTMLVideoElement;
    if (status.deskTop) {
      const tracks = (diskTop.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      diskTop.srcObject = null;
      lookDispatch({ type: SOCKET_DESKTOP_END });
    } else {
      navigator.mediaDevices
        .getDisplayMedia({ audio: true, video: true })
        .then((mediaStream) => {
          diskTop.srcObject = mediaStream;
          lookDispatch({ type: SOCKET_DESKTOP_START });
        });
    }
  };

  const handleUser: MouseEventHandler = () => {
    const video = RefVideo.current as HTMLVideoElement;
    if (status.user) {
      const tracks = (video.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
      lookDispatch({ type: SOCKET_USER_END });
    } else {
      navigator.mediaDevices
        .getUserMedia({
          // audio: true,
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        })
        .then((mediaStream) => {
          console.log(mediaStream);
          video.srcObject = mediaStream;
          lookDispatch({ type: SOCKET_USER_START });
        });
    }
  };

  const handleSend: MouseEventHandler = () => {
    if (status.push) handlePushClose();
    else handlePushOpen();
  };

  const handlePushOpen = () => {
    lookDispatch({
      type: SOCKET_PUSH_START,
      payload: {
        title: "6666",
        user: "337845818",
        uid: "337845818",
        banner:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp03%2F1Z9211616415M2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642140129&t=1cd7e5653b612ffbe71c1f461c5cb387",
      },
    });
    const pc = new RTCPeerConnection(configuration);
    pc.addEventListener("icecandidate", (e) => {
      const peerConnection = e.target;
      const iceCandidate = e.candidate;

      if (iceCandidate) {
        const newIceCandidate = new RTCIceCandidate(iceCandidate);
        // const otherPeer;
      }
    });
  };
  const handlePushClose = () => {
    lookDispatch({ type: SOCKET_PUSH_END, payload: { uid: "337845818" } });
  };

  useEffect(() => handlePushClose);

  const handleLoadedMetadata: ReactEventHandler<HTMLVideoElement> = ({
    target,
  }) => {
    const width = target.clientWidth;
    const height = target.clientHeight;
    RefUser.current.width = width;
    RefUser.current.height = height;
  };

  const handleFaceDetector = async () => {
    requestAnimationFrame(handleFaceDetector);
    const user = RefUser.current as HTMLCanvasElement;
    const ctx = RefCtx.current as CanvasRenderingContext2D;
    const { width, height } = user;
    const faces = await RefFace.current
      .detect(RefVideo.current)
      .catch((e: any) => console.log(e));
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "lime";
    ctx.setLineDash([5]);
    for (const { boundingBox: face } of faces) {
      ctx.strokeRect(face.x, face.y, face.width, face.height);
    }
  };
  useEffect(() => {
    RefCtx.current = (RefUser.current as HTMLCanvasElement).getContext("2d");
  }, [RefUser]);
  return (
    <div className={`w-full h-full p-8 overflow-auto`}>
      <div className={`flex`}>
        <Button onClick={handleDeskTop} status={status.deskTop}>
          桌面共享开关
        </Button>
        <Button onClick={handleUser} status={status.user}>
          摄像头开关
        </Button>
        <Button onClick={handleFaceDetector} status={status.faceDetector}>
          人脸识别
        </Button>
        <Button onClick={handleSend} status={status.push}>
          推送
        </Button>
        <Button onClick={handlePushClose} status={status.push}>
          关闭推送
        </Button>
      </div>
      <div className="flex">
        <span>音频输入</span>
        <select className={`border`}>
          {audioinput.map((item, index) => {
            return (
              <option value="" key={index}>
                {item.label}
              </option>
            );
          })}
        </select>
        <span>视频输入</span>
        <select className={`border`}>
          {videoinput.map((item, index) => {
            return (
              <option value="" key={index}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className={`flex flex-col`}>
        <div className={``}>
          <video className={`w-full`} ref={RefDeskTop} autoPlay playsInline />
        </div>
        <hr />
        <div className={"relative"}>
          <video
            className={`w-full`}
            ref={RefVideo}
            autoPlay
            playsInline
            style={{ transform: `scale(-1, 1)` }}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <canvas
            className={`absolute inset-0 w-full h-full`}
            style={{ transform: `scale(-1, 1)` }}
            ref={RefUser}
          />
        </div>
      </div>
    </div>
  );
});
