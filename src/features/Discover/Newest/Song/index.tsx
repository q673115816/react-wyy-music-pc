import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { songNavs } from "@/features/Discover/Newest/config";
import Song from "./Song";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={":type"} element={<Song />} />
        {/*<Route path={`*`} element={<Navigate to={songNavs[0]} />} />*/}
      </Route>
    </Routes>
  );
};

export default memo(Index);
