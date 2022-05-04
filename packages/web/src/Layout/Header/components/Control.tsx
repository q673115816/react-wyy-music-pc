import React, { memo } from "react";
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconSquareOff,
  IconX,
} from "@tabler/icons";
import {
  setPositionFalse,
  setPositionTrue,
} from "@/modules/reducers/inset/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { useMedia } from "react-use";
import button from "@/components/Page/Button";

const className = `relative text-white text-opacity-90 hover:text-opacity-100 z-10`;

const Control = () => {
  const dispatch = useAppDispatch();
  const isFullScreen = useMedia(`(display-mode: fullscreen)`);
  const handleFullScreen = async () => {
    await document.documentElement.requestFullscreen();
    dispatch(setPositionFalse());
  };

  const handleExitFullScreen = async () => {
    await document.exitFullscreen();
    dispatch(setPositionTrue());
  };
  return (
    <div className="flex gap-3 pr-5">
      <button type="button" className={className} title="mini模式">
        <IconArrowsMinimize size={24} />
      </button>
      <button type="button" className={className} title="最小化">
        <IconMinus size={24} />
      </button>
      {isFullScreen ? (
        <button
          type="button"
          className={className}
          title="向下还原"
          onClick={handleExitFullScreen}
        >
          <IconSquareOff size={24} />
        </button>
      ) : (
        <button
          type="button"
          className={className}
          title="最大化"
          onClick={handleFullScreen}
        >
          <IconSquare size={24} />
        </button>
      )}
      <button type="button" className={className} title="关闭">
        <IconX size={24} />
      </button>
    </div>
  );
};

export default memo(Control);
