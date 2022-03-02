import React, { FC, memo } from "react";
import { setAudioImmediate } from "@/modules/reducers/audio/slice";
import { useAppDispatch } from "@/modules/hooks";

interface iProps {
  item: {};
  className?: string;
}

const SongReplace: FC<iProps> = ({ children, item, className = "" }) => {
  const dispatch = useAppDispatch();
  const handleAllPlay = () => {
    return dispatch(setAudioImmediate({ currentSong: item.song }));
  };
  return (
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(SongReplace);
