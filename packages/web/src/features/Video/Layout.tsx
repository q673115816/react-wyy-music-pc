import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navs = [
  ["视频", "video"],
  ["MV", "mv"],
];

const Layout = () => (
  <div className="flex flex-col h-full">
    <div className="ui_header text-base space-x-4">
      {navs.map(([name, path]) => (
        <NavLink
          key={name}
          className={({ isActive }) =>
            isActive ? "text-xl ui_underline font-bold" : ""
          }
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </div>
    <Outlet />
  </div>
);

export default memo(Layout);
