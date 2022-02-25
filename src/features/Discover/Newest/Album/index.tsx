import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { areas, types } from "../config";
import Album from "./Album";
import Layout from "./Layout";
import Area from "./Area";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={`:area`} element={<Area />}>
          <Route path={`:type`} element={<Album />} />
          <Route
            path={`*`}
            element={<Navigate to={types[0]} replace={true} />}
          />
        </Route>
        <Route path={`*`} element={<Navigate to={areas[0]} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default memo(Index);
