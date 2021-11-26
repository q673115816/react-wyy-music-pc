import React from "react";
import { Routes, Route } from "react-router-dom";
import DailySong from "./DailySong";
const Router = () => {
  return (
    <Routes>
      <Route index element={<DailySong />} />
    </Routes>
  );
};

export default Router;
