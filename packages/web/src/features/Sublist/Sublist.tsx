import React, { createElement, memo } from "react";
import { nodes, Path } from "./config";
import { useParams } from "react-router-dom";

const Sublist = () => {
  const { path } = useParams();
  return createElement(nodes[path as Path], { path });
};

export default memo(Sublist);
