import React, { FC, memo } from "react";
import { iProps } from "./types";
import Detail from "./Detail";
import Grid from "./Grid";
import { useCounter } from "react-use";

const PicsViewer: FC<iProps> = ({
  srcList = [],
  gap = "0.25rem",
  width = 370,
  className = "",
}) => {
  const _srcList = srcList.slice(0, 9);
  const { length } = _srcList;
  const [value, control] = useCounter(-1, length - 1, -1);
  gap = formatUnit(gap);
  width = formatUnit(width);

  if (value >= 0)
    return <Detail srcList={_srcList} value={value} control={control} />;
  return (
    <Grid
      srcList={_srcList}
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
