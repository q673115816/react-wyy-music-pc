import React, { memo } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Layout from "./Layout";
import SongLayout from "./Song/Layout";
import Song from "./Song";
import Album from "./Album";

export default memo(function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={encodeURI("新歌速递")} element={<SongLayout />}>
          <Route path={`:type`} element={<Song />} />
          <Route path="*" element={<Navigate to="全部" replace={true} />} />
        </Route>
        <Route path={encodeURI("新碟上架")} element={<Album />} />
        <Route path="*" element={<Navigate to="新歌速递" replace={true} />} />
      </Route>
    </Routes>
  );
});
