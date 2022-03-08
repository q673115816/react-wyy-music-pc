import React, { FC, memo } from "react";
import { iProps } from "./types";
import Detail from "./Detail";
import Grid from "./Grid";
import { useCounter } from "react-use";

const PicsViewer: FC<iProps> = ({
  srcList,
  gap = "0.25rem",
  width = 370,
  className = "",
}) => {
  if (!srcList) return null;
  const { length } = srcList;
  const [value, control] = useCounter(-1, length - 1, -1);
  gap = formatUnit(gap);
  width = formatUnit(width);

  if (value >= 0)
    return <Detail srcList={srcList} value={value} control={control} />;
  return (
    <Grid
      srcList={srcList}
      value={value}
      control={control}
      className={className}
      gap={gap}
      width={width}
    />
  );
};

const formatUnit = (val: string | number): string => {
  if (typeof val === "number") val = String(val) + "px";
  return val;
};

export default memo(PicsViewer);
