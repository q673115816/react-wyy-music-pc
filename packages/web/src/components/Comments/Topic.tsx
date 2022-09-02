import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

interface iProps {
  name: string;
}

const Topic: FC<iProps> = ({ name }) => {
  return <Link to={`/friend/redirect/${name}`}>{name}</Link>;
};

export default memo(Topic);
