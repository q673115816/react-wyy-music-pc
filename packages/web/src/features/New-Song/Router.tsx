import React from "react";
import { Routes, Route } from "react-router-dom";
import NewSong from "./NewSong";
const Router = () => {
  return (
    <Routes>
      <Route index element={<NewSong />} />
    </Routes>
  );
};

export default Router;
