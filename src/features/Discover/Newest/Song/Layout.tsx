import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IconPlayerPlay, IconFolderPlus } from "@tabler/icons";
import classNames from "classnames";
import { songNavs } from "../config";

const Layout = () => {
  return (
    <>
      <div className="flex px-8 py-2">
        <div className={`flex gap-x-4 text-sm`}>
          {songNavs.map((name) => (
            <NavLink
              key={name}
              className={({ isActive }) => classNames(isActive && "font-bold")}
              to={encodeURI(name)}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <div className="ml-auto flex space-x-2 text-sm">
          <button
            type="button"
            className="flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5"
          >
            <IconPlayerPlay size={16} stroke={1} className="fill-current" />
            播放全部
          </button>
          <button
            type="button"
            className="flex-center rounded-full border px-2 py-0.5"
          >
            <IconFolderPlus size={16} stroke={1} />
            收藏全部
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default memo(Layout);
