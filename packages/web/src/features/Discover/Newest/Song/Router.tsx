import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Song from "./Song";

const Router = () => {
  return useRoutes([
    {
      index: true,
      element: <Navigate to="全部" replace={true} />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ":type",
          element: <Song />,
        },
      ],
    },
  ]);
};

export default memo(Router);
