import { Link } from "react-router-dom";
import React, { FC, memo } from "react";

interface iItem {
  item: {};
}

const Item: FC<iItem> = ({ item = {} }) => (
  <div className="item">
    <div className="cover relative rounded border overflow-hidden">
      <Link to={`/playlist/dj/${item.id}`}>
        <img
          loading={"lazy"}
          className="aspect-square block"
          src={item.picUrl}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom" />
        <div className="absolute left-0 bottom-0 max-w-full px-2 py-1 text-white truncate">
          {item.name}
        </div>
      </Link>
    </div>
    <div className="footer mt-2 text-sm">
      <Link
        to={`/playlist/dj/${item.id}`}
        className="text-gray-600 hover:text-black"
      >
        {item.rcmdtext}
      </Link>
    </div>
  </div>
);

export default memo(Item);
