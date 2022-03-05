import React, { memo } from "react";
import { types } from "../config";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

const Area = () => {
  return (
    <>
      <div className="flex -mt-7 mb-8 px-8">
        <div className="flex ml-auto gap-4">
          {types.map((type) => (
            <NavLink
              key={type}
              to={encodeURIComponent(type)}
              className={({ isActive }) => classNames(isActive && "font-bold")}
            >
              {type}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default memo(Area);
