import React, { memo } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Download from "./Download";
import Local from "./Local";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={`Download`} replace />} />
      <Route path="/*" element={<Layout />}>
        <Route path={"Download/*"} element={<Download />} />
        <Route path={"Local/*"} element={<Local />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
