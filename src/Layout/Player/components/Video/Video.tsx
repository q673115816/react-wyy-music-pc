import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useReducer,
  memo,
  FC,
  ReactEventHandler,
} from "react";
import { IconPlayerPlay, IconRefresh } from "@tabler/icons";
import classNames from "classnames";
import {
  setPositionFalse,
  setPositionTrue,
} from "@/modules/reducers/inset/slice";
import { useDispatch } from "react-redux";
import DomControl from "./Control";
import DomTiming from "./Timing";

import videoReducer, { initialState } from "./reducer";
import {
  actionSetFull,
  actionSetPlay,
  actionSetBuffered,
  actionSetCurrentTime,
  actionSetDuration,
} from "./reducer/actions";

export const VideoContext = createContext(null);

interface iProps {
  url: string;
  detail: any;
  brs: [];
  fixed: boolean;
  next: Object;
}

const Video: FC<iProps> = ({ url, detail, brs = [], fixed, next = {} }) => {
  const [
    { play, duration, currentTime, jumpTime, buffered, full },
    videoDispatch,
  ] = useReducer(videoReducer, initialState);
  const refVideo = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
  const [isEnd, setIsEnd] = useState(false);
  const [isAuto, setIsAuto] = useState(true);
  const handleChangePlay = () => {
    const call = play ? "pause" : "play";
    (refVideo.current as HTMLVideoElement)[call]();
    videoDispatch(actionSetPlay(!play));
    // setPlay(!play);
  };

  const handleEnd = () => {
    setIsEnd(true);
  };

  const handleChangeFull = async () => {
    if (full) {
      // 退出全屏
      await document.exitFullscreen();
      dispatch(setPositionTrue());
    } else {
      // 进入全屏
      await document.documentElement.requestFullscreen();
      dispatch(setPositionFalse());
    }
    videoDispatch(actionSetFull(!full));
  };

  const handleProgress: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    // console.log(target.buffered.length);
    const buffered = [];
    for (let i = 0; i < currentTarget.buffered.length; i += 1) {
      const onebuffered = [
        currentTarget.buffered.start(i),
        currentTarget.buffered.end(i),
      ];
      buffered.push(onebuffered);
      // console.log(onebuffered);
    }
    videoDispatch(actionSetBuffered(buffered));
    // setBuffered(target.buffered.end(0));
    // console.log(refVideo.current.buffered.end(0));
  };

  const handleSetTime: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    // console.log(e);
    videoDispatch(actionSetCurrentTime(currentTarget.currentTime));
    // setCurrentTime(target.currentTime);// e.timeStamp
  };

  const handlePreSetTime: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    // console.log(e);
    videoDispatch(actionSetDuration(currentTarget.duration));
    // setDuration(target.duration);// e.timeStamp
  };

  useEffect(() => {
    // videoDispatch(actionSetCurrentTime(jumptime));
    (refVideo.current as HTMLVideoElement).currentTime = jumpTime;
  }, [jumpTime]);

  return (
    <div
      className={classNames(
        "aspect-video",
        fixed ? " absolute bottom-16 right-8 z-10 w-80" : "relative"
      )}
    >
      <div
        className={classNames(
          "flex flex-col inset-0",
          full ? "fixed z-50" : "absolute"
        )}
      >
        <div className="bg-black flex-auto h-0 relative">
          <video
            src={url}
            ref={refVideo}
            onClick={handleChangePlay}
            onProgress={handleProgress}
            onTimeUpdate={handleSetTime}
            onLoadedMetadata={handlePreSetTime}
            className="h-full m-auto cursor-pointer"
            onDoubleClick={handleChangeFull}
            onEnded={handleEnd}
            playsInline
            autoPlay={play}
          />
          {!play && (
            <button
              onClick={handleChangePlay}
              type="button"
              className="ico text-white bg-black bg-opacity-10 border border-gray-300 cursor-pointer hover:border-white rounded-full absolute inset-0 m-auto w-16 h-16 flex-center"
            >
              <IconPlayerPlay size={24} className="fill-current" />
            </button>
          )}
          {/*<div className="absolute text-gray-300 inset-0 flex-center flex-col bg-black bg-opacity-60">
            <div className="text-sm">
              即将自动为您播放：{next.title}
            </div>
            <div className="flex">
              <div className="flex-center flex-col">
                <div className="border rounded-full flex-center">
                  <IconRefresh size={36}/>
                </div>
                <div>重新播放</div>
              </div>
              <div className="flex-center flex-col">
                <div className="border rounded-full flex-center">
                  <IconPlayerPlay size={36}/>
                </div>
                <button type="button" className="">取消自动播放</button>
                <div>自动播放已暂停</div>
              </div>
            </div>
          </div>*/}
        </div>
        <VideoContext.Provider
          value={{
            handleChangePlay,
            play,
            duration,
            currentTime,
            buffered,
            handleChangeFull,
            full,
            videoDispatch,
          }}
        >
          <DomTiming />
          <DomControl />
        </VideoContext.Provider>
      </div>
    </div>
  );
};

export default memo(Video);
