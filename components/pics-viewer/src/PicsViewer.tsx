import React, { FC, memo } from "react";
import { iProps } from "./types";
import Detail from "./Detail";
import Grid from "./Grid";
import { useCounter } from "react-use";
import { formatUnit } from "./utils";

const PicsViewer: FC<iProps> = ({
  srcList = [],
  gap = "0.25rem",
  width = 370,
  className = "",
  el = "",
}) => {
  if (!srcList.length) return null;
  const _srcList = srcList.slice(0, 9);
  const { length } = _srcList;
  const [value, control] = useCounter(-1, length - 1, -1);
  gap = formatUnit(gap);
  width = formatUnit(width);
  if (value >= 0) {
    return (
      <Detail
        srcList={_srcList}
        className={className}
        value={value}
        control={control}
        el={el}
      />
    );
  }
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

export default memo(PicsViewer);
