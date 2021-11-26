import React, { memo, ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

interface iRoot {
  [key: string]: ReactNode;
}

const root: iRoot = {};

const requireContext = require.context(
  "./",
  true,
  /^\.\/.*\/Router\.tsx$/,
  "lazy"
);

requireContext.keys().forEach((key) => {
  const mod = requireContext(key);
  root[key.slice(2, -11)] = mod.__esModule && mod.default ? mod.default : mod;
});

const RootRouter = () => (
  <Routes>
    {Object.entries(root).map(([path, Element]) => (
      <Route path={`${path}/*`} key={path} element={<Element />} />
    ))}
    <Route path={`*`} element={<Navigate to={"discover"} replace={true} />} />
  </Routes>
);

export default memo(RootRouter);
