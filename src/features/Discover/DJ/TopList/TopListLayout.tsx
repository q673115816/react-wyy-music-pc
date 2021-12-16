import React, { memo } from "react";
import classNames from "classnames";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
const navs = [
  ["节目榜", "program"],
  ["新晋电台榜", "now"],
  ["热门电台榜", "hot"],
];

export default memo(function TopList() {
  return (
    <div className="domHome_dj_toplist h-full overflow-auto pt-8">
      <div className="domHome_dj_toplist_header">
        <div
          className="domHome_dj_toplist_nav m-auto w-min flex rounded-full border"
        >
          {navs.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                classNames(
                  "flex-center w-28 h-8 rounded-full text-center hover:bg-gray-100",
                  isActive && "text-white"
                )
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet/>
    </div>
  );
});
