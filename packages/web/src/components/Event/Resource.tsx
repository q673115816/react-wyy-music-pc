import { Link } from "react-router-dom";
import React, { memo } from "react";

const Resource = ({ item }) => {
  if (!item) return null;
  return (
    <Link
      to={`/artist/${item.id}`}
      className="mt-2 flex items-center p-2 h-14 rounded bg-gray-100 hover:bg-gray-200"
    >
      <div className="w-10 h-10 rounded">
        <img
          src={item.img80x80}
          className="rounded w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="px-3">{`歌手：${item.name}`}</div>
    </Link>
  );
};

export default memo(Resource);
