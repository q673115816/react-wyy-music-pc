import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Friend from "./Friend";
import Topic from "./Topic";
import Top from "./Top";
import Acquaintance from "./Acquaintance";
import Redirect from "./Redirect";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Friend />} />
      <Route path="top" element={<Top />} />
      <Route path="Acquaintance" element={<Acquaintance />} />
      <Route path=":id" element={<Topic />} />
      <Route path="redirect">
        <Route index element={<Navigate to={`..`} replace />} />
        <Route path={`keywords`} element={<Redirect />} />
      </Route>
    </Routes>
  );
};

export default Router;
