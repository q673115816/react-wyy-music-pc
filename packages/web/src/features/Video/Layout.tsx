import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navs = ["视频", "MV"];

const Layout = () => (
  <div className="flex flex-col h-full">
    <div className="ui_header text-base space-x-4">
      {navs.map((name) => (
        <NavLink
          key={name}
          className={({ isActive }) =>
            isActive ? "text-xl ui_underline font-bold" : ""
          }
          to={encodeURIComponent(name)}
        >
          {name}
        </NavLink>
      ))}
    </div>
    <Outlet />
  </div>
);

export default memo(Layout);
