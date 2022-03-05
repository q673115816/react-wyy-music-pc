import React, { FC, memo } from "react";
import SimiSong from "./SimiSong";

interface iProps {
  id: number;
}

const Right: FC<iProps> = ({ id }) => {
  return (
    <div
      className="right flex-none mt-28 h-72 overflow-auto"
      style={{ width: 244 }}
    >
      <div className="pb-4 relative">
        <div>播放来源：...</div>
        <div className="font-bold py-3 text-sm">包含这首歌的歌单</div>
        <div>{}</div>
        <div className="font-bold py-3 text-sm">相似歌曲</div>
        <SimiSong id={id} />
        <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
};

export default memo(Right);
