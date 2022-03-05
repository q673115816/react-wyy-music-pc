import React, { FC, memo } from "react";
import { setLyricToggle } from "@/modules/reducers/lrc/slice";
import { setGlobalLrcHide } from "@/modules/reducers/setting/slice";
import {
  IconMusic,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconX,
} from "@tabler/icons";
import {
  audioSelector,
  setAudioNext,
  setAudioPrev,
  setAudioRunningToggle,
} from "@/modules/reducers/audio/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

interface iControlProps {}

const Control: FC<iControlProps> = () => {
  const dispatch = useAppDispatch();
  const { running } = useAppSelector(audioSelector);
  return (
    <div className="absolute top-0 left-0 right-0 mx-auto flex-center space-x-4 w-min z-10 text-white my-2">
      <button
        type="button"
        className="relative z-10"
        onClick={() => dispatch(setLyricToggle())}
      >
        <IconMusic size={16} stroke={2} />
      </button>
      <button type="button" className="relative z-10 text-xs">
        -0.5s
      </button>
      <button type="button" className="relative z-10 text-xs">
        +0.5s
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => dispatch(setAudioPrev())}
      >
        <IconPlayerSkipBack size={16} className="fill-current" stroke={2} />
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => dispatch(setAudioRunningToggle())}
      >
        {running ? (
          <IconPlayerPause size={16} className="fill-current" stroke={2} />
        ) : (
          <IconPlayerPlay size={16} className="fill-current" stroke={2} />
        )}
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => dispatch(setAudioNext())}
      >
        <IconPlayerSkipForward size={16} className="fill-current" stroke={2} />
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => dispatch(setGlobalLrcHide())}
      >
        <IconX size={16} stroke={2} />
      </button>
    </div>
  );
};

export default memo(Control);
