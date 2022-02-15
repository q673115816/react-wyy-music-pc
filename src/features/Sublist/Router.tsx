import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import SubList from "./SubList";
const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={`:path`} element={<SubList />} />
      </Route>
    </Routes>
  );
};

export default Router;
