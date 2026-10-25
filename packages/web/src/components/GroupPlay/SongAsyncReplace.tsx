import React, { FC, memo, PropsWithChildren } from "react";

import { useLazyGetSongDetailQuery } from "@/modules/services/song";
import { useToast } from "@/components/Toast";
import { useAudioStore } from "@/stores";

interface iProps extends PropsWithChildren {
  id: number;
  className?: string;
}

const SongAsyncReplace: FC<iProps> = ({ children, id, className = "" }) => {
  const toast = useToast();
  const [SongDetailGet, { data }] = useLazyGetSongDetailQuery();
  const handleAllPlay = async () => {
    const data = await SongDetailGet({
      ids: String(id),
    });
    if (data?.data?.songs.length === 0) {
      toast("出错，推测是版权方要求下架");
      return;
    }
    const currentSong = data?.data?.songs?.[0] || {};
    useAudioStore.getState().setAudioImmediate({ currentSong });
  };
  return (
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(SongAsyncReplace);
