import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import VideoList from "./VideoList";
import MVList from "./MVList";
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="videolist" replace={true} />,
        },
        {
          path: "videolist",
          element: <VideoList />,
        },
        {
          path: "MVList",
          element: <VideoList />,
        },
      ],
    },
  ]);
};

export default memo(Router);
