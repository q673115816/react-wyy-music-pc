import React, { FC, memo } from "react";
import { useGetSimiSongQuery } from "@/modules/services/lrc/api";
import Loading from "@/components/Loading";
import SongAsyncReplace from "@/components/GroupPlay/SongAsyncReplace";

interface iProps {
  id: number;
}

const SimiSong: FC<iProps> = ({ id }) => {
  const { data, isLoading } = useGetSimiSongQuery({ id });
  const songs = data?.songs || [];
  if (isLoading) return <Loading />;
  return (
    <div>
      {songs.map((song) => (
        <SongAsyncReplace
          key={song.id}
          id={song.id}
          className="flex text-left w-full rounded hover:bg-gray-100 p-1.5 h-10"
        >
          <div className="rounded relative overflow-hidden">
            <img src={`${song.album.picUrl}?param=30y30`} alt="" />
          </div>
          <div className="w-0 flex-auto px-2 py-1 text-gray-600">
            <div className="truncate">
              {song.name}
              <span className="text-gray-500">{song.alias}</span>
              &nbsp; - &nbsp;
              {song.artists.map((artist) => artist.name)}
            </div>
          </div>
        </SongAsyncReplace>
      ))}
    </div>
  );
};

export default memo(SimiSong);
