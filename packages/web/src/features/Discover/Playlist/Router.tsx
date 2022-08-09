import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Base from "./Base";

const Router = () => {
  return useRoutes([
    {
      index: true,
      element: <Navigate to="全部歌单" replace={true} />,
    },
    {
      path: ":cat",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="1" replace={true} />,
        },
        {
          path: ":page",
          element: <Base />,
        },
      ],
    },
  ]);
};

export default memo(Router);
