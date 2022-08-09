import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Song from "./Song";
import Album from "./Album";
import { divide } from "lodash";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="新歌速递" replace={true} />,
        },
        {
          path: encodeURIComponent("新歌速递") + "/*",
          element: <Song />,
        },
        {
          path: encodeURIComponent("新碟上架") + "/*",
          element: <Album />,
        },
      ],
    },
  ]);
};

export default memo(Router);
