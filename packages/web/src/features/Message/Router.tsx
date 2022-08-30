import React, { memo } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { navs } from "./Config";
const Router = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Layout />,
      children: navs.map(({ path, Element }) => ({
        path: `${encodeURIComponent(path)}/*`,
        element: <Element />,
      })),
    },
    {
      index: true,
      element: <Navigate to={navs[0].path} replace />,
    },
  ]);
};

export default memo(Router);
