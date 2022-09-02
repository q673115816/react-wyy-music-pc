import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

interface iProps {
  name: string;
}

const User: FC<iProps> = ({ name }) => {
  return <Link to={`/user/redirect/${name}`}>{name}</Link>;
};

export default memo(User);
