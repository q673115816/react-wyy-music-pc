import React, { memo } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
  <div className="item">
    <div className="shadow rounded overflow-hidden">
      <Link to={`/playlist/album/${item.id}`}>
        <img
          loading={"lazy"}
          className=" aspect-square w-full h-full object-fit"
          src={`${item.blurPicUrl}?param=170y170`}
          alt=""
        />
      </Link>
    </div>
    <div className="name text-sm ui_ellipse mt-2">
      <Link to={`/playlist/album/${item.id}`}>
        <span className="ui_text_black_hover">{item.name}</span>
        &nbsp;
        {item.alias.length > 0 && (
          <span className="text-gray-400">({item.alias})</span>
        )}
        {item.transNames && <span>{item.transNames}</span>}
      </Link>
    </div>
    <div className="artist mt-2">
      <Link
        to={`/artist/${item.artist.id}`}
        key={item.artist.id}
        className="ui_text_gray_hover"
      >
        {item.artist.name}
      </Link>
    </div>
  </div>
);

export default memo(Item);
