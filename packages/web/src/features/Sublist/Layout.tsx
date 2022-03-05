import classNames from "classnames";
import React, { createElement, memo } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { navs, nodes } from "./config";

const Layout = () => {
  const { path } = useParams();
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map((name) => (
          <NavLink
            key={name}
            to={encodeURI(name)}
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
