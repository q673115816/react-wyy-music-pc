import React, { FC, memo, MouseEventHandler, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { computedPositionPercentage, isInTheRect } from "@/common/utils";
import { setVolume, volumeSelector } from "@/modules/reducers/volume/slice";
import Drag from "@/components/Drag";

interface iPanelProps {
  setVisible: (bool: boolean) => void;
}

const Panel: FC<iPanelProps> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  const { volume } = useAppSelector(volumeSelector);
  const RefRect = useRef<HTMLDivElement>(null);
  const RefProgress = useRef<HTMLDivElement>(null);

  const computedPosition = (e: MouseEvent) => {
    const { current: dom } = RefProgress;
    if (!dom) return 0;
    const percentage = computedPositionPercentage(e, dom, "y");
    return percentage * 100;
  };

  const onMouseMove: MouseEventHandler = (e) => {
    dispatch(setVolume(computedPosition(e)));
  };

  const onMouseUp: MouseEventHandler = (e) => {
    const { current: dom } = RefRect;
    if (dom && isInTheRect(e, dom)) setVisible(true);
  };

  return (
    <div
      className="w-8 h-24 flex-center absolute bottom-full bg-white rounded shadow z-50"
      ref={RefRect}
    >
      <div
        className="bg-gray-200 flex flex-col h-20 justify-end w-1"
        title="音量调节（Ctrl + Up / Ctrl + Down）"
        onMouseDown={onMouseMove}
        ref={RefProgress}
      >
        <div
          className="curr width-full h-full ui_theme_bg_color relative"
          style={{ height: `${volume}%` }}
        >
          <Drag
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            className="absolute right-1/2 top-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 ui_theme_bg_color rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Panel);
