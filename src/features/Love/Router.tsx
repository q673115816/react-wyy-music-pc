import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path={"*"} element={<div>hello world</div>} />
    </Routes>
  );
};

export default Router;
