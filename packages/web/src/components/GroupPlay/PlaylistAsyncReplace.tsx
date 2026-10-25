import React, { FC, memo, PropsWithChildren } from "react";

import { apiPlaylistDetail, apiSongDetail } from "@/api";
import { useAudioStore } from "@/stores";

interface iProps extends PropsWithChildren {
  id: number;
  className: string;
}

const PlaylistAsyncReplace: FC<iProps> = ({ children, id, className = "" }) => {
  const handleAllPlay = async () => {
    const data = await apiPlaylistDetail({
      id,
    });
    if (data.playlist.trackCount === 0) return false;
    const { songs: playlist } = await apiSongDetail({
      ids: data.playlist.trackIds.map(({ id }) => id).join(","),
    });
    return useAudioStore.getState().setAudioPlaylist({ playlist });
  };
  return (
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(PlaylistAsyncReplace);
