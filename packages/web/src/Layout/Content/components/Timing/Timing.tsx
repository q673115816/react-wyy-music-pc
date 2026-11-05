import React, { memo } from "react";
import dayjs from "dayjs";
import * as SliderPrimitive from "@radix-ui/react-slider";

import style from "./style.module.scss";
import classNames from "classnames";
import { useAudioStore } from "@/stores";

const Timing = () => {
  const currentTime = useAudioStore((s) => s.currentTime);
  const currentSong = useAudioStore((s) => s.currentSong);
  const buffered = useAudioStore((s) => s.buffered);
  const duration = currentSong.dt ? currentSong.dt / 1000 : 0;

  const handleValueChange = ([value]: number[]) => {
    useAudioStore.getState().setAudioCurrentTime({ currentTime: value });
  };

  const handleValueCommit = ([value]: number[]) => {
    useAudioStore.getState().setAudioDropping({ dropping: false });
    useAudioStore.getState().setJumpToAudioCurrentTime(value);
  };

  return (
    <div className="flex-center">
      <span className="text-gray-400">
        {currentTime ? dayjs(currentTime * 1000).format("mm:ss") : "00:00"}
      </span>
      <SliderPrimitive.Root
        className={classNames(
          style.playTimerShaft,
          "group relative mx-1 flex items-center rounded-full touch-none select-none cursor-pointer"
        )}
        value={[currentTime]}
        max={duration || 1}
        step={1}
        disabled={!duration}
        onPointerDown={() =>
          useAudioStore.getState().setAudioDropping({ dropping: true })
        }
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
      >
        <SliderPrimitive.Track className="relative h-[3px] w-full grow overflow-hidden rounded-full bg-[#E6E6E8] group-hover:h-1">
          <div className="absolute inset-0">
            {currentSong.dt &&
              buffered.map(([start, end]) => (
                <div
                  key={`${start}-${end}`}
                  className="absolute inset-y-0 bg-gray-400"
                  style={{
                    left: `${(start / duration) * 100}%`,
                    right: `${(1 - end / duration) * 100}%`,
                  }}
                />
              ))}
          </div>
          <SliderPrimitive.Range className="absolute inset-y-0 ui_theme_bg_color" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          title="长按拖拽"
          className="block h-2 w-2 rounded-full ui_theme_bg_color opacity-0 shadow group-hover:opacity-100 focus:outline-hidden"
        />
      </SliderPrimitive.Root>
      <span className="text-gray-400">
        {currentSong.dt ? dayjs(currentSong.dt).format("mm:ss") : "00:00"}
      </span>
    </div>
  );
};

export default memo(Timing);
