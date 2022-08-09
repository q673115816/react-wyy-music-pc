import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Album from "./Album";
import Area from "./Area";

const Router = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="全部" replace={true} />,
        },
        {
          path: ":area",
          element: <Area />,
          children: [
            {
              index: true,
              element: <Navigate to="推荐" replace={true} />,
            },
            {
              path: ":type",
              element: <Album />,
            },
          ],
        },
      ],
    },
  ]);
};

export default memo(Router);
