import React, {
  ChangeEventHandler,
  EventHandler,
  FC,
  FormEventHandler,
  memo,
  MouseEventHandler,
  ReactEventHandler,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import classnames from "classnames";
import useLoginStatus, { handleLoginStatus } from "@/hooks/useLoginStatus";
import { set, get } from "lodash";
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
import { Label } from "react-query/types/devtools/Explorer";
import { UUIDGeneratorBrowser } from "@/common/utils";
import { useImmer } from "use-immer";
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
  status?: boolean;
}

const Button: FC<iButtonProps> = ({ onClick, children, status = false }) => {
  return (
    <button
      type={"button"}
      className={classnames(
        `text-white rounded px-2 h-8 flex-center`,
        status ? "bg-red-500" : "bg-blue-500"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface iCheck<T> {
  name: T;
  checked: boolean;
  onChange: (key: T) => void;
}

const Check: FC<iCheck<initialSourceKey>> = ({
  name,
  children,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={() => onChange(name)}
      />
      {children}
    </label>
  );
};

interface initialSource {
  deskTop: boolean;
  audio: boolean;
  video: boolean;
  face: boolean;
}

type initialSourceKey = keyof initialSource;

const sourceList: { key: initialSourceKey; name: string }[] = [
  {
    key: "deskTop",
    name: "桌面",
  },
  {
    key: "video",
    name: "摄像头-画面",
  },
  {
    key: "audio",
    name: "摄像头-声音",
  },
  {
    key: "face",
    name: "摄像头-人脸识别",
  },
];

/*
 * TODO
 *  1.信令系统
 *  2.摄像头叠加桌面，如基本直播
 * */
export default memo(function Live() {
  const {
    lookReducer: { socket },
    lookDispatch,
  } = useContext(LookContent);
  // const [isSupport] = useState<boolean>(() => {
  //   return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  // });

  const { audioinput, videoinput } = useGetInput();
  const [status, setStatus] = useImmer<initialSource>({
    deskTop: false,
    audio: false,
    video: false,
    face: false,
  });
  const RefVideo = useRef<HTMLVideoElement>(null);
  const RefDeskTop = useRef<HTMLVideoElement>(null);
  const RefDeskTopMixinTimer = useRef(null);
  const RefUser = useRef<HTMLCanvasElement>(null);
  const [streams, setStreams] = useState<{ [key: string]: MediaStream | null }>(
    {
      deskTop: null,
      user: null,
      mixin: null,
    }
  );
  const [userSize, setUserSize] = useState({
    width: 0,
    height: 0,
  });
  const RefMixin = useRef<HTMLCanvasElement>(null);
  const RefCtx = useRef<CanvasRenderingContext2D>(null);
  const RefMixinCtx = useRef<CanvasRenderingContext2D>(null);
  const RefFace = useRef(new FaceDetector());
  const RefRTC = useRef(
    (() => {
      const pc = new RTCPeerConnection(configuration);
      pc.onicecandidate = (e) => {
        const peerConnection = e.target;
        const iceCandidate = e.candidate;
        if (iceCandidate) {
          const newIceCandidate = new RTCIceCandidate(iceCandidate);
          // const otherPeer;
        }
      };
      pc.onconnectionstatechange = (e) => {
        switch (pc.connectionState) {
          case "connected":
            // The connection has become fully connected
            break;
          case "disconnected":
          case "failed":
            // One or more transports has terminated unexpectedly or in an error
            break;
          case "closed":
            // The connection has been closed
            break;
        }
      };
      pc.ondatachannel = function (ev) {
        console.log("Data channel is created!");
        ev.channel.onopen = function () {
          console.log("Data channel is open and ready to be used.");
        };
      };
      pc.onicecandidateerror = function (event) {
        if (event.errorCode >= 300 && event.errorCode <= 699) {
          // STUN errors are in the range 300-699. See RFC 5389, section 15.6
          // for a list of codes. TURN adds a few more error codes; see
          // RFC 5766, section 15 for details.
        } else if (event.errorCode >= 700 && event.errorCode <= 799) {
          // Server could not be reached; a specific error number is
          // provided but these are not yet specified.
        }
      };

      pc.oniceconnectionstatechange = function (event) {
        if (
          pc.iceConnectionState === "failed" ||
          pc.iceConnectionState === "disconnected" ||
          pc.iceConnectionState === "closed"
        ) {
          // Handle the failure
        }
      };

      pc.onicegatheringstatechange = function () {
        let label = "Unknown";

        switch (pc.iceGatheringState) {
          case "new":
          case "complete":
            label = "Idle";
            break;
          case "gathering":
            label = "Determining route";
            break;
        }
        console.log(label);
      };

      pc.onnegotiationneeded = function () {
        pc.createOffer()
          .then(function (offer) {
            console.log("setLocalDescription");
            return pc.setLocalDescription(offer);
          })
          .then(function () {
            // Send the offer to the remote peer through the signaling server
          })
          .catch((error) => console.log(error));
      };

      pc.onsignalingstatechange = function (event) {
        if (pc.signalingState === "have-local-pranswer") {
          // setLocalDescription() has been called with an answer
        }
      };
      return pc;
    })()
  );

  const handleDeskTopClose = () => {
    const diskTop = RefDeskTop.current as HTMLVideoElement;
    const tracks = (diskTop.srcObject as MediaStream).getTracks();
    tracks.forEach((track) => track.stop());
    diskTop.srcObject = null;
    lookDispatch({ type: SOCKET_DESKTOP_END });
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
        sdp: "this is sdp",
      },
    });
  };
  const handlePushClose = () => {
    lookDispatch({ type: SOCKET_PUSH_END, payload: { uid: "337845818" } });
  };

  useEffect(() => handlePushClose, []);

  const handleSetEleSize =
    ({
      current: ref,
    }: {
      current: HTMLCanvasElement;
    }): ReactEventHandler<HTMLVideoElement> =>
    ({ target }) => {
      const width = target.clientWidth;
      const height = target.clientHeight;
      ref.width = width;
      ref.height = height;
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
  useEffect(() => {
    RefMixinCtx.current = (RefMixin.current as HTMLCanvasElement).getContext(
      "2d"
    );
  }, [RefMixin]);

  const handleMixinDeskTop = () => {
    if (!streams.deskTop) return;
    const { width, height } = RefMixin.current;
    console.log("mixin deskTop ");
    requestAnimationFrame(handleMixinDeskTop);
    RefMixinCtx.current.drawImage(RefDeskTop.current, 0, 0, width, height);
  };

  const handleMixinUser = () => {
    if (!streams.user) return;
    console.log("mixin user ");
    requestAnimationFrame(handleMixinUser);
    RefMixinCtx.current.drawImage(RefVideo.current, 0, 0, 200, 160);
  };

  useEffect(() => {
    console.log("streams deskTop effect");
    handleMixinDeskTop();
  }, [streams.deskTop]);
  useEffect(() => {
    console.log("streams user effect");
    handleMixinUser();
  }, [streams.user]);

  // useEffect(() => {
  //   console.log(size);
  //   RefMixin.current.width = size.width;
  //   RefMixin.current.height = size.height;
  // }, [size]);

  const handleDeskTopCapture = () => {
    const diskTop = RefDeskTop.current as HTMLVideoElement;
    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: true,
      })
      .then((mediaStream) => {
        setStreams((prev) => ({ ...prev, deskTop: mediaStream }));
        // RefDeskTopStream.current = mediaStream;
        diskTop.srcObject = mediaStream;
        // for (const track of mediaStream.getVideoTracks()) {
        //   const { width = 0, height = 0 } = track.getSettings();
        //   setSize({ width, height });
        // }
        const tracks = mediaStream.getTracks();
        console.log(tracks);
        // const sender = RefRTC.current.addTrack(tracks[0], mediaStream);
        tracks[0].onended = () => {
          // RefRTC.current.removeTrack(sender);
          lookDispatch({ type: SOCKET_DESKTOP_END });
        };
        lookDispatch({ type: SOCKET_DESKTOP_START });
      })
      .catch((e) => {
        // DOMException: Permission denied
        console.log("桌面捕获", e);
      });
  };

  const handleUserCapture = () => {
    const video = RefVideo.current as HTMLVideoElement;
    navigator.mediaDevices
      .getUserMedia({
        // audio: true,
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })
      .then((mediaStream) => {
        setStreams((prev) => ({ ...prev, user: mediaStream }));
        for (const track of mediaStream.getVideoTracks()) {
          const { width = 0, height = 0 } = track.getSettings();
          console.log(track.getSettings());
          setUserSize({ width, height });
        }
        video.srcObject = mediaStream;
        lookDispatch({ type: SOCKET_USER_START });
      })
      .catch((e) => {
        console.log("摄像头捕获", e);
      });
  };

  const handleCapture = () => {
    handleDeskTopCapture();
    handleUserCapture();
    const mediaStream = (RefMixin.current as HTMLCanvasElement).captureStream(
      30
    );
    setStreams((prev) => ({ ...prev, canvas: mediaStream }));
    console.log(mediaStream);
  };

  const handleSend = () => {};

  const handleChangeStatus = useCallback((key: initialSourceKey) => {
    setStatus((draft) => {
      const value = get(draft, key);
      set(draft, key, !value);
      // draft[key] = !draft[key];
    });
  }, []);
  return (
    <div className={`w-full h-full p-8 overflow-auto`}>
      <div className={`flex`}>
        <Button onClick={handleCapture}>开始捕获</Button>
        <Button onClick={handleSend}>推送</Button>
        <div className={`border ml-auto`}>
          <div className={`flex flex-col flex-wrap`}>
            {sourceList.map(({ key, name }) => (
              <Check
                key={key}
                name={key}
                onChange={handleChangeStatus}
                checked={status[key]}
              >
                <span>{name}</span>
              </Check>
            ))}
            <div className={``}>
              <span>音频输入</span>
              <select className={`border`} disabled>
                {audioinput.map((item, index) => {
                  return (
                    <option value="" key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <span>视频输入</span>
              <select className={`border`} disabled>
                {videoinput.map((item, index) => {
                  return (
                    <option value="" key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col`}>
        <div className={``}>
          <video
            className={`w-full`}
            ref={RefDeskTop}
            autoPlay
            playsInline
            onLoadedMetadata={handleSetEleSize(RefMixin)}
          />
        </div>
        <hr />
        <div className={"relative"}>
          <video
            className={`w-full`}
            ref={RefVideo}
            autoPlay
            playsInline
            style={{ transform: `scale(-1, 1)` }}
            onLoadedMetadata={handleSetEleSize(RefUser)}
          />
          <canvas
            className={`absolute inset-0 w-full h-full`}
            style={{ transform: `scale(-1, 1)` }}
            ref={RefUser}
          />
        </div>
      </div>
      <hr />
      <div>
        <canvas className="w-full" ref={RefMixin} />
      </div>
    </div>
  );
});
