import React, { FC, memo, PropsWithChildren } from "react";
import { setAudioImmediate } from "@/modules/reducers/audio/slice";
import { useAppDispatch } from "@/modules/hooks";
import { useLazyGetSongDetailQuery } from "@/modules/services/song";
import { useToast } from "@/components/Toast";

interface iProps extends PropsWithChildren {
  id: number;
  className?: string;
}

const SongAsyncReplace: FC<iProps> = ({ children, id, className = "" }) => {
  const dispatch = useAppDispatch();
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
    dispatch(setAudioImmediate({ currentSong }));
  };
  return (
    <button type="button" onClick={handleAllPlay} className={className}>
      {children}
    </button>
  );
};

export default memo(SongAsyncReplace);
