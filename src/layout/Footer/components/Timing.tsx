import React, {useRef, useState, memo, MouseEventHandler} from "react";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import {
  setJumpToAudioCurrentTime,
  setAudioCurrentTime,
  setAudioDropping,
  setAudioRunning,
  setAudioPattern,
} from "@/reducers/audio/slice";
import { computedPositionPercentage } from "@/common/utils";
import Drag from "@/components/Drag";

export default memo(() => {
  const dispatch = useAppDispatch();
  const { currentTime, currentSong, buffered, song } = useAppSelector(
    ({ audio }) => audio
  );

  const RefProgress = useRef<HTMLDivElement>(null);
  const computedPosition = (e) => {
    if(!RefProgress.current) return
    const percentage = computedPositionPercentage(e, RefProgress.current);
    return percentage * (currentSong.dt / 1000);
  };

  const onMouseMove: MouseEventHandler = (e) => {
    dispatch(setAudioCurrentTime(computedPosition(e)));
  };

  const onMouseUp: MouseEventHandler = (e) => {
    dispatch(setAudioDropping({ dropping: false }));
    dispatch(setJumpToAudioCurrentTime(computedPosition(e)));
  };

  const onMouseDown = () => {
    dispatch(setAudioDropping({ dropping: true }));
  };

  const handleClick: MouseEventHandler = (e) => {
    dispatch(setAudioCurrentTime(computedPosition(e)));
    dispatch(setJumpToAudioCurrentTime(computedPosition(e)));
  };

  return (
    <div className="domfooter_center_bottom flex-center">
      <span className="text-gray-400">
        {currentTime ? dayjs(currentTime * 1000).format("mm:ss") : "00:00"}
      </span>
      <div
        className="playTimerShaft group relative"
        onClick={handleClick}
        ref={RefProgress}
      >
        <div className="absolute inset-0" title="缓存">
          {currentSong.dt &&
            buffered.map(([start, end]) => (
              <div
                key={`${start}-${end}`}
                className="absolute inset-y-0 bg-gray-400"
                style={{
                  left: `${(start / (currentSong.dt / 1000)) * 100}%`,
                  right: `${(1 - end / (currentSong.dt / 1000)) * 100}%`,
                }}
              />
            ))}
        </div>
        <div
          className="played relative h-full ui_theme_bg_color"
          style={{
            width: `${
              currentSong.dt ? (currentTime / (currentSong.dt / 1000)) * 100 : 0
            }%`,
          }}
        >
          <Drag
            className="absolute opacity-0 group-hover:opacity-100 inset-y-0 -right-1 m-auto ui_theme_bg_color rounded-full w-2 h-2 overflow-hidden shadow"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            title="长按拖拽"
          />
        </div>
      </div>
      <span className="text-gray-400">
        {currentSong.dt ? dayjs(currentSong.dt).format("mm:ss") : "00:00"}
      </span>
    </div>
  );
});
