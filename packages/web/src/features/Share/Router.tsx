import React from "react";
import { Routes, Route } from "react-router";
import Share from "./Share";
const Router = () => {
  return (
    <Routes>
      <Route path={":type/:id"} element={<Share />} />
    </Routes>
  );
};

export default Router;
