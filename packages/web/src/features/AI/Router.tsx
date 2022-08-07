import React from "react";
import { useRoutes } from "react-router-dom";
import AI from "./AI";
const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <AI />,
    },
  ]);
};

export default Router;
