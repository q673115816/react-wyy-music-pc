import React, { memo } from "react";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
const navs = [
  ["节目榜", "program"],
  ["新晋电台榜", "now"],
  ["热门电台榜", "hot"],
];

const Layout = () => {
  return (
    <div className="h-full overflow-auto pt-8">
      <div className="m-auto w-min flex rounded-full border">
        {navs.map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              classNames(
                "flex-center w-28 h-8 rounded-full text-center",
                isActive ? "text-white bg-gray-200" : "hover:bg-gray-100"
              )
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
