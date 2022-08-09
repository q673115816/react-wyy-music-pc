import React, { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import { elements } from "./config";

const Router = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={elements[0][0]} replace={true} />,
        },
        ...elements.map(([path, Element]) => ({
          path: `${path}/*`,
          element: <Element />,
        })),
      ],
    },
  ]);
};

export default memo(Router);
