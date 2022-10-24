import { IconAlien } from "@tabler/icons";
import React, { memo } from "react";

const Empty = () => {
  return (
    <div
      className={`h-full flex-center flex-col text-base text-gray-500 gap-2`}
    >
      <IconAlien size={72} stroke={1} />
      <div>抱歉，该用户不存在</div>
    </div>
  );
};

export default memo(Empty);
