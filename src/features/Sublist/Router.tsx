import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
import { elements } from "./config";
const Router = () => {
  return (
    <Routes>
      <Route path={`/*`} element={<Layout />}>
        {elements.map(([path, Element]) => (
          <Route path={path} key={path} element={<Element path={path} />} />
        ))}
        <Route
          index
          element={<Navigate to={elements[0][0]} replace={true} />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
