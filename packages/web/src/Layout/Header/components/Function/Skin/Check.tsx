import { IconCheck } from "@tabler/icons";
import React, { FC, memo } from "react";

const Check: FC = () => (
  <i className="absolute flex-center text-white bg-red-500 -bottom-1.5 -right-1.5 border-2 p-0.5 border-white rounded-full">
    <IconCheck size={16} stroke={2} />
  </i>
);

export default memo(Check);
