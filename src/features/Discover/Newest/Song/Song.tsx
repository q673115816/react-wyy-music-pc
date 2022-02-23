import React, { memo } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";

const Song = () => {
  const { type } = useParams();
  return <Content type={type} />;
};

export default memo(Song);
