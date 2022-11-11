import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import { navs } from "./config";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="ui_header text-base gap-x-5">
        {navs.map(([name, path]) => (
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

export default memo(Layout);
