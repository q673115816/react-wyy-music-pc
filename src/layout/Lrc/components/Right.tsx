import React, { memo } from "react";
import DomLoading from "@/components/Loading";

interface iSimiSong {
  id: number;
  album: { picUrl: string };
  name: string;
  alias: string;
  artists: { name: string }[];
  [key: string]: any;
}

interface iRight {
  simiSong: iSimiSong[];
  loading: boolean;
}

export default memo<iRight>(({ simiSong = [], loading = false }) => {
  return (
    <div
      className="right flex-none mt-28 h-72 overflow-auto"
      style={{ width: 244 }}
    >
      {loading ? (
        <div className="flex justify-center">
          <DomLoading />
        </div>
      ) : (
        <div className="pb-4 relative">
          <div>播放来源：...</div>
          <div className="font-bold py-3 text-sm">包含这首歌的歌单</div>
          <div>{}</div>
          <div className="font-bold py-3 text-sm">相似歌曲</div>
          <div>
            {simiSong.map((song) => (
              <button
                key={song.id}
                type="button"
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
              </button>
            ))}
          </div>
          <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
      )}
    </div>
  );
});
