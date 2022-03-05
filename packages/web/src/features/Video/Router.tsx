import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Video from "./Video";
import VideoList from "./VideoList";
import MVList from "./MVList";
const Router = () => {
  return (
    <Routes>
      <Route element={<Video />}>
        <Route path="videolist" element={<VideoList />} />
        <Route path="mvlist" element={<MVList />} />
        <Route path="*" element={<Navigate to="videolist" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Router;
