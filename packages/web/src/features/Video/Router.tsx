import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import VideoList from "./VideoList";
import MVList from "./MVList";
const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "videolist",
          element: <VideoList />,
        },
        {
          path: "MVList",
          element: <VideoList />,
        },
        {
          path: "*",
          element: <Navigate to="videolist" replace={true} />,
        },
      ],
    },
  ]);
};

export default Router;
