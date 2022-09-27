import React, {
  useEffect,
  useRef,
  memo,
  FC,
  ReactEventHandler,
  useContext,
  useState,
} from "react";
import classNames from "classnames";
import IconPlayerPlay from "../assets/play.svg";
import IconRefresh from "../assets/refresh.svg";
import { AppContext } from "../context";
import type { PlayerProps } from "../types";
import styled from "styled-components";
import { actionUpdate } from "../reducers";
import { useUpdateEffect, useFullscreen, useToggle } from "react-use";

const Pausing = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border-color: #fff;
  }
`;

const Video: FC<PlayerProps> = ({ url, detail, brs = [], fixed = false }) => {
  const { dispatch, state } = useContext(AppContext);
  const { full, play, currentTime, duration, volume, muted, jumpRatio } = state;
  const video = useRef<HTMLVideoElement>(null);
  const [isEnd, setIsEnd] = useState(false);
  const handleTogglePlay = () => {
    dispatch(actionUpdate({ play: !play }));
  };

  const handleEnded = () => {
    setIsEnd(true);
  };

  const handleDoubleClick = async () => {
    dispatch(actionUpdate({ full: !full }));
  };

  const handleProgress: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    const buffered = [];
    for (let i = 0; i < currentTarget.buffered.length; i += 1) {
      buffered.push([
        currentTarget.buffered.start(i),
        currentTarget.buffered.end(i),
      ]);
    }
    dispatch(actionUpdate({ buffered }));
  };

  const handleTimeUpdate: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    const { currentTime } = currentTarget;
    dispatch(actionUpdate({ currentTime }));
  };

  const handleLoadedMetadata: ReactEventHandler<HTMLVideoElement> = ({
    currentTarget,
  }) => {
    const { duration } = currentTarget;
    dispatch(actionUpdate({ duration, play: true }));
  };

  useUpdateEffect(() => {
    if (play) video.current.play();
    else video.current.pause();
  }, [play]);

  useEffect(() => {
    (video.current as HTMLVideoElement).currentTime = jumpRatio * duration;
  }, [jumpRatio]);

  useEffect(() => {
    (video.current as HTMLVideoElement).volume = volume;
  }, [volume]);

  useEffect(() => {
    (video.current as HTMLVideoElement).muted = muted;
  }, [muted]);

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
            onClick={handleTogglePlay}
            src={url}
            ref={video}
            onEnded={handleEnded}
            onProgress={handleProgress}
            onTimeUpdate={handleTimeUpdate}
            onDoubleClick={handleDoubleClick}
            onLoadedMetadata={handleLoadedMetadata}
            className="h-full w-full m-auto cursor-pointer"
            playsInline
            autoPlay={true}
          />
          {!play && (
            <Pausing onClick={handleTogglePlay}>
              <IconPlayerPlay width={36} />
            </Pausing>
          )}
          {isEnd && (
            <Pausing>
              <IconRefresh width={36} />
            </Pausing>
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
