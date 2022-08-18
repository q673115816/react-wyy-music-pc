import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Video from "./Video";
import MV from "./MV";
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="视频" replace={true} />,
        },
        {
          path: encodeURIComponent("视频"),
          element: <Video />,
        },
        {
          path: "MV",
          element: <MV />,
        },
      ],
    },
  ]);
};

export default memo(Router);
