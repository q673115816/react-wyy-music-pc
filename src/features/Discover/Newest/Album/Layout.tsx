import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

import { areas } from "@/features/Discover/Newest/config";

const Album = () => {
  return (
    <>
      <div className="flex px-8 py-2">
        <div className={`flex space-x-4 text-sm`}>
          {areas.map((area) => (
            <NavLink
              to={encodeURI(area)}
              key={area}
              className={({ isActive }) => classNames(isActive && "font-bold")}
            >
              {area}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default memo(Album);
