import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

const Router = () => {
  return (
    <Routes>
      <Route path=":keywords" element={<Layout />}>
        <Route path={`:type`} element={<Home />} />
        <Route index element={<Navigate to="单曲" />} />
      </Route>
    </Routes>
  );
};

export default Router;
