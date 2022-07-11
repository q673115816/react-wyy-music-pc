import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Box from "./Box";

interface iProps {
  item: object;
  className: string;
  sq: boolean;
  mv: string;
}

const Tag: FC<iProps> = ({
  item = {},
  className = "",
  sq = false,
  mv = item.mv,
}) => (
  <div
    className={classNames(
      "tags flex-none px-1 space-x-1 flex items-center",
      className
    )}
  >
    {item.fee === 1 && (
      <>
        <Box text="VIP" />
        <Box text="试听" />
      </>
    )}
    {(sq || item.maxbr === 999000 || item.privilege?.maxbr === 999000) && (
      <Box text="SQ" />
    )}
    {mv > 0 && (
      <Link className="TAG" to={`/player/mv/${mv}`}>
        <Box text="MV" />
      </Link>
    )}
  </div>
);

export default memo(Tag);
