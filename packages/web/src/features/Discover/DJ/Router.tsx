import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DJ from "./DJ";
import TopList from "./TopList/TopList";
import TopListLayout from "./TopList/TopListLayout";

const Router = () => (
  <Routes>
    <Route index element={<DJ />} />
  </Routes>
);

export default memo(Router);
