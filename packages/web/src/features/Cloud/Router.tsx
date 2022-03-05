import React from "react";
import { Routes, Route } from "react-router-dom";
import Cloud from "./Cloud";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Cloud />} />
    </Routes>
  );
};

export default Router;
