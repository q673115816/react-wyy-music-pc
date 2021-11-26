import React, { memo } from "react";
import { NavLink, Routes, Navigate, Route } from "react-router-dom";
import "./style.scss";
import Song from "./Song";
import Album from "./Album";
import classNames from "classnames";

export default memo(() => (
  <div className="domHome_content overflow-auto max-h-full flex-auto">
    <div className="domHome_newest">
      <div className="domHome_newest_nav">
        <NavLink
          className={({ isActive }) => classNames(isActive && "on")}
          to="/home/newest/song"
        >
          新歌速递
        </NavLink>
        <NavLink
          className={({ isActive }) => classNames(isActive && "on")}
          to="/home/newest/album"
        >
          新碟上架
        </NavLink>
      </div>
      <Routes>
        <Route path="/home/newest/song/:type" element={<Song />} />
        <Route path="/home/newest/album">
          <Album />
        </Route>
        <Route path="*" element={<Navigate to="/home/newest/song/全部" />} />
      </Routes>
    </div>
  </div>
));
