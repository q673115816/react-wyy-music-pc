import React, { FC, memo } from "react";

interface iProps {
  pop: number;
}

const Pop: FC<iProps> = ({ pop = 0 }) => (
  <div className="range w-20 h-1.5 rounded bg-gray-200">
    <div className="h-full bg-gray-300 rounded" style={{ width: `${pop}%` }} />
  </div>
);

export default memo(Pop);
