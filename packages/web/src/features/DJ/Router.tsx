import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router";
import DJ from "./DJ";

const Router = () => (
  <Routes>
    <Route index element={<DJ />} />
  </Routes>
);

export default memo(Router);
