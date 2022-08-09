import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

const navs = ["新歌速递", "新碟上架"];

const Layout = () => {
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="flex border rounded-full mx-auto w-min">
        {navs.map((path) => (
          <NavLink
            key={path}
            className={({ isActive }) =>
              classNames(
                "w-28 rounded-full flex-center h-7",
                !isActive && "hover:bg-gray-100",
                isActive && "text-white bg-gray-400"
              )
            }
            to={encodeURIComponent(path)}
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
