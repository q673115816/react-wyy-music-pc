import React from "react";
import { Routes, Route } from "react-router-dom";
import Artist from "./Artist";
const Router = () => {
  return (
    <Routes>
      <Route path={":id"} element={<Artist />} />
    </Routes>
  );
};

export default Router;
