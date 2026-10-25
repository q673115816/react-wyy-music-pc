import React, { FC, memo } from "react";
import { useAudioStore } from "@/stores";

interface iProps {
  item: {};
  className?: string;
}

const SongReplace: FC<iProps> = ({ children, item, className = "" }) => {
  const handleAllPlay = () => {
    return useAudioStore.getState().setAudioImmediate({ currentSong: item.song });
  };
  return (
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(SongReplace);
