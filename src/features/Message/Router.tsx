import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Message from "./Message";
import { navs } from "./Config";
const Router = () => {
  return (
    <Routes>
      <Route element={<Message />}>
        {navs.map(({ path, Element }) => (
          <Route path={path} key={path} element={<Element />} />
        ))}
        <Route path="*" element={<Navigate to={"download"} />} />
      </Route>
    </Routes>
  );
};

export default Router;
