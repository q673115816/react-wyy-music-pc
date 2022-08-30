import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { navs } from "./config";
import Layout from "./Layout";

const Router = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Layout />,
      children: navs.map((path) => ({
        path: `${encodeURIComponent(path)}/*`,
        element: <div>{path}</div>,
      })),
    },
    {
      index: true,
      element: <Navigate to={navs[0]} replace />,
    },
  ]);
};
export default Router;
