import { IconPlayerPlay } from "@tabler/icons";
import React, { FC, memo } from "react";

interface iProps {
  item: {};
}

const Song: FC<iProps> = ({ item }) => {
  if (!item) return null;
  console.log(item);
  return (
    <div className="bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5">
      <div className="relative overflow-hidden rounded flex-none">
        <img
          className="rounded w-10 h-10"
          src={`${item.album.blurPicUrl}?param=40y40`}
          alt=""
        />
        <div className="ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor">
          <IconPlayerPlay size={14} className="fill-current" />
        </div>
      </div>
      <div className="aside text-left px-3 w-0 flex-auto">
        <div className="name">{item.name}</div>
        <div className="artist truncate mt-1 text-gray-400">
          {item.artists.map(({ name }) => name).join(" / ")}
        </div>
      </div>
    </div>
  );
};

export default memo(Song);
