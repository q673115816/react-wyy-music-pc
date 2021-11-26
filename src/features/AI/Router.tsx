import React from "react";
import { Routes, Route } from "react-router-dom";
import AI from "./AI";
const Router = () => {
  return (
    <Routes>
      <Route index element={<AI />} />
    </Routes>
  );
};

export default Router;
