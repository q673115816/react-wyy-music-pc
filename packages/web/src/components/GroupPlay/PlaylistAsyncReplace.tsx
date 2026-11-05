import React, { FC, memo, PropsWithChildren } from "react";

import { apiPost } from "@/shared/api/client";
import { useAudioStore } from "@/stores";

interface iProps extends PropsWithChildren {
  id: number;
  className: string;
}

const PlaylistAsyncReplace: FC<iProps> = ({ children, id, className = "" }) => {
  const handleAllPlay = async () => {
    const data = await apiPost("/playlist/detail", {
      id,
    });
    if (data.playlist.trackCount === 0) return false;
    const { songs: playlist } = await apiPost("/song/detail", {
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
