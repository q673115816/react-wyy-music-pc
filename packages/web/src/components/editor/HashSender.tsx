import React, { FC, memo, MouseEventHandler, RefObject } from "react";
import { IconHash } from "@tabler/icons";
interface iProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  element: RefObject<HTMLElement>;
}
const HashSender: FC<iProps> = () => {
  return (
    <button type="button" className="text-gray-500 hover:text-black">
      <IconHash size={20} stroke={1.5} />
    </button>
  );
};
export default memo(HashSender);
