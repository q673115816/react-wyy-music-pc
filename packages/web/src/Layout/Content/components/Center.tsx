import React, { createElement, memo, useMemo, useRef } from "react";
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconPlaylist,
  IconRotate,
  IconRefreshAlert,
} from "@tabler/icons";
import {
  setAudioRunning,
  setAudioPattern,
  setAudioPrev,
  setAudioNext,
  audioSelector,
} from "@/modules/reducers/audio/slice";
import { audioPattern } from "@/common/config";
import classNames from "classnames";
import Timing from "./Timing";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import Audio from "./Audio";
import {
  settingSelector,
  setGlobalLrcToggle,
} from "@/modules/reducers/settings/slice";

const iconSize = 16;

const audioPatternIcon = [
  IconRotate,
  IconRefreshAlert,
  IconArrowsSplit2,
  IconPlaylist,
];

const Center = () => {
  const dispatch = useAppDispatch();
  const { running, pattern, src } = useAppSelector(audioSelector);
  const { globalLrcVisibility } = useAppSelector(settingSelector);
  const handleToggle = () => {
    dispatch(setAudioRunning({ running: !running }));
  };

  const handleChangePattern = () => {
    dispatch(setAudioPattern());
  };

  const handlePrev = () => {
    dispatch(setAudioPrev());
  };

  const handleNext = () => {
    dispatch(setAudioNext());
  };

  return (
    <div className={"flex-center flex-col flex-1"}>
      <div className="flex-center gap-x-7">
        <button
          type="button"
          className="hover:ui_themeColor"
          title={audioPattern[pattern]}
          onClick={handleChangePattern}
        >
          {createElement(audioPatternIcon[pattern], { size: iconSize })}
        </button>
        <button
          type="button"
          onClick={handlePrev}
          className="footer_center_prev flex-center hover:ui_themeColor"
          title="上一首（Ctrl + Left）"
        >
          <IconPlayerSkipBack size={iconSize} className="fill-current" />
        </button>
        <button
          type="button"
          onClick={handleToggle}
          className="footer_center_play flex-center bg-gray-200 hover:bg-gray-300 rounded-full w-9 h-9"
          title={running ? "暂停（Ctrl + P）" : "播放（Ctrl + P）"}
        >
          {running ? (
            <IconPlayerPause size={iconSize * 1.25} className="fill-current" />
          ) : (
            <IconPlayerPlay
              size={iconSize * 1.25}
              className="fill-current"
              stroke="0"
            />
          )}
        </button>
        <button
          type="button"
          title="下一首（Ctrl + Right）"
          onClick={handleNext}
          className="footer_center_next flex-center hover:ui_themeColor"
        >
          <IconPlayerSkipForward size={iconSize} className="fill-current" />
        </button>
        <button
          type="button"
          className={classNames(
            "px-1 hover:ui_themeColor relative",
            globalLrcVisibility && "ui_themeColor"
          )}
          title="打开歌词"
          onClick={() => dispatch(setGlobalLrcToggle())}
        >
          词
          {globalLrcVisibility && (
            <span className="absolute right-0 rounded-full bottom-0 w-1.5 h-1.5 ui_theme_bg_color" />
          )}
        </button>
      </div>
      <div hidden>
        <Audio src={src} />
      </div>
      <Timing />
    </div>
  );
};

export default memo(Center);
