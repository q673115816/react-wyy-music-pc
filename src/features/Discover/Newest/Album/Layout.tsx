import React, { memo } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { apiTopAlbum, apiAlbumNew } from "@/api";
import classNames from "classnames";

import { limit } from "@/common/config";
import { areas } from "@/features/Discover/Newest/config";

const Album = () => {
  const { type, area } = useParams();
  console.log("type && area", type, area);
  const handleGetData = async () => {
    try {
      if (showtype === "RECOMMEND") {
        const { monthData, weekData } = await apiTopAlbum({
          area,
          type,
          limit,
          offset,
        });
      } else {
        const { albums: monthData, weekData } = await apiAlbumNew({
          area,
          type,
          limit,
          offset,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
