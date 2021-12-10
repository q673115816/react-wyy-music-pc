import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

export const navs = [
  {
    path: "recommend",
    name: "个性推荐",
  },
  {
    path: "dj",
    name: "专属定制",
  },
  {
    path: "playlist",
    name: "歌单",
  },
  {
    path: "topList",
    name: "排行榜",
  },
  {
    path: "artist",
    name: "歌手",
  },
  {
    path: "newest",
    name: "最新音乐",
  },
];

const Discover = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="ui_header text-base space-x-5">
        {navs.map(({ path, name }) => (
          <NavLink
            className={({ isActive }) =>
              classNames(isActive && "text-xl font-bold ui_underline")
            }
            to={path}
            key={path}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Discover);
