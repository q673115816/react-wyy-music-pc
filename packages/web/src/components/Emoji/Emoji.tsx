import React, {
  FC,
  memo,
  MouseEventHandler,
  useState,
  WheelEventHandler,
} from "react";
import { IconX } from "@tabler/icons";
import faces from "./faces";
import style from "./emoji.module.scss";
import classNames from "classnames";

interface iProps {
  handleHide: MouseEventHandler<HTMLButtonElement>;
  handleCheck: (emoji: string) => void;
}

const Emoji: FC<iProps> = ({ handleHide, handleCheck }) => {
  const [page, setPage] = useState(0);
  const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    if (e.deltaY < 0) {
      setPage(Math.max(page - 1, 0));
    } else {
      setPage(Math.min(page + 1, faces.length - 1));
    }
  };
  return (
    <div
      className={classNames(style.emoji, "bg-white rounded shadow")}
      onWheel={handleWheel}
    >
      <button
        type="button"
        className="absolute close right-0 top-0 ui_text_gray_hover mx-1"
        onClick={handleHide}
      >
        <IconX size={24} stroke={1} />
      </button>
      <div className="page text-lg grid grid-cols-10 p-4 gap-2">
        {faces[page].map(([name, face]) => (
          <button
            key={face}
            type="button"
            className={style.ico}
            title={name}
            onClick={() => handleCheck(`[${name}]`)}
          >
            {face}
          </button>
        ))}
      </div>
      <div className="jump flex-center pb-2.5">
        {faces.map((item, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            type="button"
            className={classNames(
              "m-1 w-1 h-1 rounded-full bg-gray-200",
              page === index && "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Emoji);
