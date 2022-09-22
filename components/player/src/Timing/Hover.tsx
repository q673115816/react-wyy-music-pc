import React, { FC, memo, useContext } from "react";
import dayjs from "dayjs";
import { AppContext } from "../context";

const Hover: FC<{ hoverRatio: number }> = ({ hoverRatio }) => {
  const { state } = useContext(AppContext);
  const { duration } = state;
  return (
    <div
      className="absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2"
      style={{ left: `${hoverRatio * 100}%` }}
    >
      {dayjs(hoverRatio * duration * 1000).format("mm:ss")}
    </div>
  );
};

export default memo(Hover);
