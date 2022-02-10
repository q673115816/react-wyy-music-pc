import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Search from "./Search";

const Router = () => {
  return (
    <Routes>
      <Route path=":keywords" element={<Layout />}>
        <Route path={`:type`} element={<Search />} />
        <Route index element={<Navigate to="单曲" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
