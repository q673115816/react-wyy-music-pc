import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import TopList from "./TopList";
import React, { memo } from "react";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="program" replace={true} />,
        },
        {
          path: ":type",
          element: <TopList />,
          children: [],
        },
      ],
    },
  ]);
};

export default memo(Router);
