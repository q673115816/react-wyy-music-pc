import React, {
  FC,
  memo,
  MouseEventHandler,
  ReactEventHandler,
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
import useGetInput, { iUseGetInput } from "@/features/Look/Live/useGetInput";
import { UUIDGeneratorBrowser } from "@/common/utils";
import { useImmer } from "use-immer";
import RTC from "../RTC";

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
  desktop: boolean;
  audio: boolean;
  video: boolean;
  face: boolean;
}

type initialSourceKey = keyof initialSource;

const sourceList: { key: initialSourceKey; name: string }[] = [
  {
    key: "desktop",
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

const inputList: { key: keyof iUseGetInput; name: string }[] = [
  { key: "audioinput", name: "音频输入" },
  { key: "videoinput", name: "视频输入" },
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

  const inputDevice = useGetInput();
  const [status, setStatus] = useImmer<initialSource>({
    desktop: false,
    audio: false,
    video: false,
    face: false,
  });
  const RefVideo = useRef<HTMLVideoElement>(null);
  const Refdesktop = useRef<HTMLVideoElement>(null);
  const RefPC = useRef(
    new RTC({
      iceCandidateCallback(candidate) {
        console.log("emit publish candidate");
        socket.emit("publish", { to: "337845818", candidate });
      },
      negotiationneededCallback(localDescription) {
        console.log("emit publish localDescription");
        socket.emit("publish", { to: "337845818", localDescription });
      },
    })
  );
  const RefdesktopMixinTimer = useRef(null);
  const RefUser = useRef<HTMLCanvasElement>(null);
  interface iTracks {
    [key: string]: {
      [key: string]: Set<MediaStreamTrack>;
    };
  }
  const [tracks, setTracks] = useImmer<iTracks>({
    desktop: {},
    user: {},
  });

  interface iStreams {
    [key: string]: MediaStream | null;
  }

  const [streams, setStreams] = useState<iStreams>({
    desktop: null,
    user: null,
    mixin: null,
  });

  const userSettings = useRef<MediaTrackSettings>();
  const RefMixin = useRef<HTMLCanvasElement>(null);
  const RefCtx = useRef<CanvasRenderingContext2D>(null);
  const RefMixinCtx = useRef<CanvasRenderingContext2D>(null);
  const RefFace = useRef(new FaceDetector());

  const handledesktopClose = () => {
    const diskTop = Refdesktop.current as HTMLVideoElement;
    const tracks = (diskTop.srcObject as MediaStream).getTracks();
    tracks.forEach((track) => track.stop());
    diskTop.srcObject = null;
  };

  const handlePushClose = () => {
    socket.emit("close", {
      detail: {
        uid: "337845818",
      },
    });
  };

  // useEffect(() => handlePushClose, []);

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

  const handleMixindesktop = () => {
    if (!streams.desktop) return;
    const { width, height } = RefMixin.current as HTMLCanvasElement;
    // console.log("mixin desktop ");
    requestAnimationFrame(handleMixindesktop);
    RefMixinCtx.current.drawImage(Refdesktop.current, 0, 0, width, height);
  };

  const handleMixinUser = () => {
    if (!streams.user) return;
    // console.log("mixin user ");
    requestAnimationFrame(handleMixinUser);
    const ctx = RefMixinCtx.current as CanvasRenderingContext2D;
    const eleVideo = RefVideo.current as HTMLVideoElement;
    ctx.save();
    ctx.scale(-1, 1);
    const width = 200;
    ctx.drawImage(
      eleVideo,
      0,
      0,
      -width,
      width / userSettings.current.aspectRatio
    );
    ctx.restore();
  };

  useEffect(() => {
    console.log("streams desktop effect");
    handleMixindesktop();
  }, [streams.desktop]);
  useEffect(() => {
    console.log("streams user effect");
    handleMixinUser();
  }, [streams.user]);

  // useEffect(() => {
  //   console.log(size);
  //   RefMixin.current.width = size.width;
  //   RefMixin.current.height = size.height;
  // }, [size]);

  const handleSetTrack = (track: MediaStreamTrack, name: string) => {
    const { kind } = track;
    setTracks((draft) => {
      draft[name][kind] ??= new Set();
      draft[name][kind].add(track);
    });
  };

  const handleDesktopCapture = async () => {
    const diskTop = Refdesktop.current as HTMLVideoElement;
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: true,
      });
      setStreams((prev) => ({ ...prev, desktop: mediaStream }));
      // RefdesktopStream.current = mediaStream;
      diskTop.srcObject = mediaStream;
      // for (const track of mediaStream.getVideoTracks()) {
      //   const { width = 0, height = 0 } = track.getSettings();
      //   setSize({ width, height });
      // }
      const tracks = mediaStream.getTracks();
      for (const track of tracks) {
        handleSetTrack(track, "desktop");
        RefPC.current.addTrack(track, mediaStream);
      }
      tracks[0].onended = () => {
        // RefRTC.current.removeTrack(sender);
      };
    } catch (e) {
      console.log("桌面捕捉", e);
    }
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
          const settings = track.getSettings();
          console.log(settings);
          userSettings.current = settings;
        }
        video.srcObject = mediaStream;
      })
      .catch((e) => {
        console.log("摄像头捕获", e);
      });
  };

  const handleCapture = async () => {
    await RefPC.current.start();
    socket.emit("create", {
      detail: {
        title: "6666",
        user: "337845818",
        uid: "337845818",
        banner:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp03%2F1Z9211616415M2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642140129&t=1cd7e5653b612ffbe71c1f461c5cb387",
      },
    });
    handleDesktopCapture();
    // handleUserCapture();
    // const mediaStream = (RefMixin.current as HTMLCanvasElement).captureStream(
    //   30
    // );
    // setStreams((prev) => ({ ...prev, canvas: mediaStream }));
    // console.log(mediaStream);
  };

  const handleSend = async () => {
    // for (const kind in tracks.desktop) {
    //   for(const track of tracks.desktop[kind]) {
    //     RefPC.current.addtrack({track, });
    //   }
    // }
    await RefPC.current.start();
    socket.emit("create", {
      detail: {
        title: "6666",
        user: "337845818",
        uid: "337845818",
        banner:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp03%2F1Z9211616415M2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642140129&t=1cd7e5653b612ffbe71c1f461c5cb387",
      },
    });
  };

  const joinSuccessCallback = async (data: any) => {
    await RefPC.current.gotIceCandidate(data.description);
    socket.emit("private", {
      to: data.from,
      description: RefPC.current.localDescription,
    });
  };

  const privateCallback = (data: any) => {
    if (data.description) RefPC.current.gotDescription(data.description);
    if (data.iceCandidate) RefPC.current.gotIceCandidate(data.iceCandidate);
  };

  useEffect(() => {
    socket.on("join-success", joinSuccessCallback);
    socket.on("private", privateCallback);
    return () => {
      socket.off("join-success", joinSuccessCallback);
      socket.off("private", joinSuccessCallback);
    };
  }, []);

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
        <Button onClick={handleCapture}>开始捕获并推送</Button>
        {/*<Button onClick={handleSend}>推送</Button>*/}
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
            {inputList.map(({ key, name }) => (
              <div key={key}>
                <span>{name}</span>
                <select className={`border`} disabled>
                  {inputDevice[key].map((item, index) => {
                    return (
                      <option value="" key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex flex-col`}>
        <div className={``}>
          <video
            className={`w-full`}
            ref={Refdesktop}
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
