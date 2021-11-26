import React from "react";
import { setAudioPlaylist } from "@/reducers/audio/slice";
import { useAppDispatch } from "@/reducers/hooks";

export default ({ children, playlist, ...props }) => {
  const dispatch = useAppDispatch();
  const handleAllPlay = () => {
    dispatch(setAudioPlaylist({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllPlay} {...props}>
      {children}
    </button>
  );
};
