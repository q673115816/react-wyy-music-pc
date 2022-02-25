import React, { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Content from "./Content";
import { songNavs } from "@/features/Discover/Newest/config";

const Song = () => {
  const { type = "" } = useParams();
  if (!songNavs.includes(type)) {
    return <Navigate to={songNavs[0]} />;
  }
  return <Content type={type} />;
};

export default memo(Song);
