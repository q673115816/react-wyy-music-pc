import React, { memo } from "react";
import { IconHash } from "@tabler/icons";

const HashSender = () => {
  return (
    <button type="button" className="text-gray-500 hover:text-black">
      <IconHash size={20} stroke={1.5} />
    </button>
  );
};
export default memo(HashSender);
