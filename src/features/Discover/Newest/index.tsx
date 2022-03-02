import React, { memo } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Layout from "./Layout";
import Song from "./Song/Layout";
import SongContent from "./Song/Content";
import Album from "./Album/Layout";
import AlbumArea from "./Album/Area";
import AlbumContent from "./Album/Content";
import { songNavs } from "@/features/Discover/Newest/config";

export default memo(function Index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={encodeURI("新歌速递")} element={<Song />}>
          {songNavs.map((nav) => (
            <Route
              key={nav}
              path={encodeURI(nav)}
              element={<SongContent type={nav} />}
            />
          ))}
          <Route index element={<Navigate to="全部" replace={true} />} />
        </Route>
        <Route path={encodeURI("新碟上架")} element={<Album />}>
          <Route path={`:area`} element={<AlbumArea />}>
            <Route path={`:type`} element={<AlbumContent />} />
            <Route index element={<Navigate to="推荐" replace={true} />} />
          </Route>
          <Route index element={<Navigate to="全部" replace={true} />} />
        </Route>
        <Route index element={<Navigate to="新歌速递" replace={true} />} />
      </Route>
    </Routes>
  );
});
