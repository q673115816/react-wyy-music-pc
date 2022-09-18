import React from "react";
import { Routes, Route } from "react-router-dom";
import DJSublist from "./DJSublist";
const Router = () => {
  return (
    <Routes>
      <Route index element={<DJSublist />} />
    </Routes>
  );
};

export default Router;
