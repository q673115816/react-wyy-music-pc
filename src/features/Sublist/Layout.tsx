import classNames from "classnames";
import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navs = [
  ["专辑", "album"],
  ["歌手", "artist"],
  ["视频", "mv"],
  ["专栏", "topic"],
];

const Layout = () => {
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
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
};

export default memo(Layout);
