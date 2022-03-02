import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";

interface iProps {
  item: {};
}

const Item: FC<iProps> = ({ item }) => {
  return (
    <div className="flex flex-col">
      <Link
        to={`/playlist/music/${item.id}`}
        className="group rounded overflow-hidden relative"
      >
        <span className="flex-center absolute top-0 right-0 py-0.5 px-2 text-white">
          <IconPlayerPlay size={12} />
          {transPlayCount(item.playCount)}
        </span>
        <img
          loading={`lazy`}
          className="w-full h-full object-fit "
          src={`${item.coverImgUrl}?param=200y200`}
          alt=""
        />
        <button
          type="button"
          className="opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95"
        >
          <IconPlayerPlay size={20} className="fill-current" />
        </button>
      </Link>
      <Link
        to={`/playlist/music/${item.id}`}
        className="mt-1 text-sm text-gray-600 hover:text-black"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default memo(Item);
