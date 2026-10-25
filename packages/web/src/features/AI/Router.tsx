import React from "react";
import { useRoutes } from "react-router";
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
