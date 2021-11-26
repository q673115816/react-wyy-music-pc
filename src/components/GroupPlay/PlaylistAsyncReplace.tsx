import React from "react";
import { setAudioPlaylist } from "@/reducers/audio/slice";
import { apiPlaylistDetail, apiSongDetail } from "@/api";
import { useAppDispatch } from "@/reducers/hooks";

export default ({ children, id, ...props }) => {
  const dispatch = useAppDispatch();
  const handleAllPlay = async () => {
    const data = await apiPlaylistDetail({
      id,
    });
    if (data.playlist.trackCount === 0) return false;
    const { songs: playlist } = await apiSongDetail({
      ids: data.playlist.trackIds.map(({ id }) => id).join(","),
    });
    return dispatch(setAudioPlaylist({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllPlay} {...props}>
      {children}
    </button>
  );
};
