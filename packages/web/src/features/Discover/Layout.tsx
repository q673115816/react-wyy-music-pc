import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import { navs } from "./config";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="ui_header text-base gap-x-5">
        {navs.map((path) => (
          <NavLink
            className={({ isActive }) =>
              classNames(isActive && "text-xl font-bold ui_underline")
            }
            to={encodeURI(path)}
            key={path}
          >
            {path}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
