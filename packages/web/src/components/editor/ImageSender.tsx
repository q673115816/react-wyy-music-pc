import React, { memo } from "react";
import { IconPhoto } from "@tabler/icons";

const ImageSender = () => {
  return (
    <button type="button" className="text-gray-500 hover:text-black">
      <IconPhoto size={20} stroke={1.5} />
    </button>
  );
};
export default memo(ImageSender);
