import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Video from "./Video";
import MV from "./MV";
const Router = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Layout />,
      children: [
        {
          path: "Video",
          element: <Video />,
        },
        {
          path: "MV",
          element: <MV />,
        },
      ],
    },
    {
      index: true,
      element: <Navigate to={"Video"} replace={true} />,
    },
  ]);
};

export default memo(Router);
