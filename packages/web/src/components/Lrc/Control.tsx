import React, { FC, memo } from "react";
import { useLrcStore, useSettingsStore, useAudioStore } from "@/stores";
import {
  IconMusic,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconX,
} from "@tabler/icons-react";

const Control: FC = () => {
  const { running } = useAudioStore();
  const setLyricToggle = useLrcStore((state) => state.setLyricToggle);
  const setGlobalLrcHide = useSettingsStore((state) => state.setGlobalLrcHide);
  return (
    <div className="absolute top-0 left-0 right-0 mx-auto flex-center space-x-4 w-min z-10 text-white my-2">
      <button
        type="button"
        className="relative z-10"
        onClick={() => setLyricToggle()}
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
        onClick={() => useAudioStore.getState().setAudioPrev()}
      >
        <IconPlayerSkipBack size={16} className="fill-current" stroke={2} />
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => useAudioStore.getState().setAudioRunningToggle()}
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
        onClick={() => useAudioStore.getState().setAudioNext()}
      >
        <IconPlayerSkipForward size={16} className="fill-current" stroke={2} />
      </button>
      <button
        type="button"
        className="relative z-10"
        onClick={() => setGlobalLrcHide()}
      >
        <IconX size={16} stroke={2} />
      </button>
    </div>
  );
};

export default memo(Control);
