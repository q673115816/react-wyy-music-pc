import React, { memo } from "react";
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconSquareOff,
  IconX,
} from "@tabler/icons";
import {
  setScreenFull,
  setScreenNormal,
  setPositionFalse,
  setPositionTrue,
} from "@/modules/reducers/inset/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const Control = () => {
  const dispatch = useAppDispatch();
  const { SCREEN } = useAppSelector(({ inset }) => inset);
  const handleFullScreen = async () => {
    await document.documentElement.requestFullscreen();
    dispatch(setScreenFull());
    dispatch(setPositionFalse());
  };

  const handleExitFullScreen = async () => {
    await document.exitFullscreen();
    dispatch(setScreenNormal());
    dispatch(setPositionTrue());
  };
  return (
    <div className="flex gap-3 pr-5">
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="mini模式"
      >
        <IconArrowsMinimize size={24} />
      </button>
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="最小化"
      >
        <IconMinus size={24} />
      </button>
      {SCREEN === "normal" ? (
        <button
          type="button"
          className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
          title="最大化"
          onClick={handleFullScreen}
        >
          <IconSquare size={24} />
        </button>
      ) : (
        <button
          type="button"
          className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
          title="向下还原"
          onClick={handleExitFullScreen}
        >
          <IconSquareOff size={24} />
        </button>
      )}
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="关闭"
      >
        <IconX size={24} />
      </button>
    </div>
  );
};

export default memo(Control);
