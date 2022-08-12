import { IconMoodSmile } from "@tabler/icons";
import React, { FC, memo, MouseEventHandler } from "react";
interface iProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const EmojiSender: FC<iProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-gray-500 hover:text-black"
    >
      <IconMoodSmile size={20} stroke={1.5} />
    </button>
  );
};

export default memo(EmojiSender);
