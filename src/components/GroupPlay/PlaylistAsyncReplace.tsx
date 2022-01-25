import React, { FC, memo } from "react";
import { setAudioPlaylist } from "@/modules/reducers/audio/slice";
import { apiPlaylistDetail, apiSongDetail } from "@/api";
import { useAppDispatch } from "@/modules/hooks";

interface iProps {
  id: number;
  className: string;
}

const PlaylistAsyncReplace: FC<iProps> = ({ children, id, className = "" }) => {
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
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(PlaylistAsyncReplace);
