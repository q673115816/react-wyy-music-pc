import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchHome from "@/features/Search/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/search/:keywords/:type" element={<SearchHome />} />
      <Route path="*" element={<Navigate to="/search/:keywords/单曲" />} />
    </Routes>
  );
};

export default Router;
