import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import { navs } from "./Config";
const Layout = () => {
  return (
    <div className={`flex flex-col h-full`}>
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map(([name, path]) => (
          <NavLink
            key={path}
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
