import classNames from "classnames";
import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import './style.scss';

import DomAlbum from "./Album";
import DomArtist from "./Artist";
import DomMV from "./MV";
import DomTopic from "./Topic";

const navs = [
  ["专辑", "album"],
  ["歌手", "artist"],
  ["视频", "mv"],
  ["专栏", "topic"],
];

export default memo(function Sublist() {
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map(([name, nav]) => (
          <NavLink
            key={name}
            to={nav}
            className={({ isActive }) =>
              classNames(isActive && "text-xl font-black ui_underline")
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
});
