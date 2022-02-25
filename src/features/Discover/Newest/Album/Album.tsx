import React, { memo } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";

const Album = () => {
  const { area, type } = useParams();

  return <Content area={area} type={type} />;
};

export default memo(Album);
