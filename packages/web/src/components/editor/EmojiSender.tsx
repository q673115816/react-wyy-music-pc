import { IconMoodSmile } from "@tabler/icons";
import React, {
  FC,
  memo,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from "react";
interface iProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  element: RefObject<HTMLElement>;
}

const EmojiSender: FC<iProps> = ({ onClick, element }) => {
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
