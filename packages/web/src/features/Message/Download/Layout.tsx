import React, { memo } from "react";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import { navs } from "./config";

const Layout = () => (
  <div className="domManage flex-1 h-0">
    <div className="text-sm flex gap-4 px-8">
      {navs.map((item) => (
        <NavLink
          to={encodeURIComponent(item)}
          key={item}
          className={({ isActive }) =>
            classNames(isActive && "ui_underline font-bold")
          }
        >
          {item}
        </NavLink>
      ))}
    </div>
    <div className="flex-1 px-8 overflow-auto">
      <Outlet />
    </div>
  </div>
);
export default memo(Layout);
