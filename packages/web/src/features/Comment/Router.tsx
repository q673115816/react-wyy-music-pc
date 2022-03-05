import React from "react";
import { Routes, Route } from "react-router-dom";
import Hot from "./Hot";
import Comment from "./Comment";

const Router = () => {
  return (
    <Routes>
      <Route path={`:type/:id`}>
        <Route index element={<Comment />} />
        <Route path="hot" element={<Hot />} />
      </Route>
    </Routes>
  );
};

export default Router;
