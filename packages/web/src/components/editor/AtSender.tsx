import React, { memo } from "react";
import { IconAt } from "@tabler/icons";

const AtSender = () => {
  return (
    <button type="button" className="text-gray-500 hover:text-black">
      <IconAt size={20} stroke={1.5} />
    </button>
  );
};
export default memo(AtSender);
