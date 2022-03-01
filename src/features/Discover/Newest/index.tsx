import React, { memo } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Layout from "./Layout";
import Song from "./Song";
import Album from "./Album";
import { songNavs } from "@/features/Discover/Newest/config";

export default memo(function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={encodeURI("新歌速递")} element={<Song />} />
        <Route path={encodeURI("新碟上架")} element={<Album />} />
        <Route path="*" element={<Navigate to="新歌速递" replace={true} />} />
      </Route>
    </Routes>
  );
});
