import React, {
  useEffect,
  useRef,
  memo,
  FC,
  ReactEventHandler,
  useContext,
} from "react";
import classNames from "classnames";
import IconPlayerPlay from "../assets/play.svg";
import { AppContext } from "../context";
import type { PlayerProps } from "../types";

const Video: FC<PlayerProps> = ({ url, detail, brs = [], fixed = false }) => {
  const { dispatch, state } = useContext(AppContext);
  const { full, jumpTime, play, currentTime, duration } = state;
  const refVideo = useRef<HTMLVideoElement>(null);
  // const handleChangePlay = () => {
  //   const call = play ? "pause" : "play";
  //   (refVideo.current as HTMLVideoElement)[call]();
  //   videoDispatch(
  //     actionSetData({
  //       play: !play,
  //     })
  //   );
  // };

  const handleEnd = () => {
    //
  };

  // const handleChangeFull = async () => {
  //   if (full) {
  //     // 退出全屏
  //     await document.exitFullscreen();
  //   } else {
  //     // 进入全屏
  //     await document.documentElement.requestFullscreen();
  //   }
  //   videoDispatch(
  //     actionSetData({
  //       full: !full,
  //     })
  //   );
  // };

  // const handleProgress: ReactEventHandler<HTMLVideoElement> = ({
  //   currentTarget,
  // }) => {
  //   const buffered = [];
  //   for (let i = 0; i < currentTarget.buffered.length; i += 1) {
  //     buffered.push([
  //       currentTarget.buffered.start(i),
  //       currentTarget.buffered.end(i),
  //     ]);
  //   }
  //   videoDispatch(
  //     actionSetData({
  //       buffered,
  //     })
  //   );
  // };

  // const handleSetTime: ReactEventHandler<HTMLVideoElement> = ({
  //   currentTarget,
  // }) => {
  //   videoDispatch(
  //     actionSetData({
  //       currentTime: currentTarget.currentTime,
  //     })
  //   );
  // };

  // const handlePreSetTime: ReactEventHandler<HTMLVideoElement> = ({
  //   currentTarget,
  // }) => {
  //   videoDispatch(
  //     actionSetData({
  //       duration: currentTarget.duration,
  //     })
  //   );
  // };

  useEffect(() => {
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
            className="h-full m-auto cursor-pointer"
            playsInline
            autoPlay={play}
          />
          {/*{!play && (
            <button
              type="button"
              className="text-white bg-black bg-opacity-25 border border-gray-400 hover:border-white rounded-full absolute inset-0 m-auto w-16 h-16 flex-center"
            >
              <IconPlayerPlay width={36} className="fill-current" />
            </button>
          )}*/}
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
                <button type="button">取消自动播放</button>
                <div>自动播放已暂停</div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default memo(Video);
