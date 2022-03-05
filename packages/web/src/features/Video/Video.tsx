import React, { memo } from "react";
import { NavLink, Routes, Navigate, Route, Outlet } from "react-router-dom";
import VideoList from "./VideoList";
import MVList from "./MVList";

const navs = [
  ["视频", "/video/videolist"],
  ["MV", "/video/mvlist"],
];

export default memo(() => (
  <div className="domVideoList flex flex-col h-full">
    <div className="domVideoList_header ui_header text-base space-x-4">
      {navs.map(([name, path]) => (
        <NavLink
          key={name}
          className={({ isActive }) =>
            isActive ? "text-xl ui_underline font-bold" : ""
          }
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </div>
    <Outlet />
  </div>
));
