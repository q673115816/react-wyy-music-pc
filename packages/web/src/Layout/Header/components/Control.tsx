import React, { memo } from "react";
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconSquareOff,
  IconX,
} from "@tabler/icons-react";

import { useMedia } from "react-use";
import button from "@/components/Page/Button";
import { useInsetStore } from "@/stores";

const className = `relative text-white/90 hover:text-white z-10`;

const Control = () => {
  const isFullScreen = useMedia(`(display-mode: fullscreen)`);
  const handleFullScreen = async () => {
    await document.documentElement.requestFullscreen();
    useInsetStore.getState().setPositionFalse();
  };

  const handleExitFullScreen = async () => {
    await document.exitFullscreen();
    useInsetStore.getState().setPositionTrue();
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
