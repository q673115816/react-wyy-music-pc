import React from "react";
import { Routes, Route } from "react-router-dom";
import Recommend from "./Recommend";
const Router = () => {
  return (
    <Routes>
      <Route path="/*">
        <Route index element={<Recommend />} />
      </Route>
    </Routes>
  );
};

export default Router;
