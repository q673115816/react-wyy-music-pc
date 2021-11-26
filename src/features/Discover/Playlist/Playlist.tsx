import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Base from "./Base";
import Highquality from "./Highquality";

const Playlist = () => (
  <Routes>
    <Route path="highquality">
      <Route path={`:cat`} element={<Highquality />} />
      <Route path={`*`} element={<Navigate to={`全部歌单`} />} />
    </Route>
    <Route path=":cat/:page" element={<Base />} />
    <Route path=":cat" element={<Navigate to=":cat/1" />} />
    <Route path="*" element={<Navigate to="全部歌单" />} />
    {/* <Route path="/home/playlist" component={DomHome} /> */}
  </Routes>
);

export default memo(Playlist);
