import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { elements } from "./config";
const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        {elements.map(([path, Element]) => (
          <Route path={encodeURIComponent(path)} key={path} element={<Element/>}/>
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
