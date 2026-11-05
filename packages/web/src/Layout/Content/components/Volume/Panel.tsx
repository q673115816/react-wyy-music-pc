import React, { FC, memo, useRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useVolumeStore } from "@/stores";

interface iPanelProps {
  setVisible: (bool: boolean) => void;
}

const Panel: FC<iPanelProps> = ({ setVisible }) => {
  const volume = useVolumeStore((state) => state.volume);
  const setVolume = useVolumeStore((state) => state.setVolume);
  const RefRect = useRef<HTMLDivElement>(null);

  const handleValueCommit = () => {
    // 与原来的 onMouseUp 一致：指针仍在面板内时保持面板可见
    if (RefRect.current?.matches(":hover")) setVisible(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    // 滑块获得焦点时 react-hotkeys-hook 会忽略 role=slider 上的全局快捷键，
    // 这里补回 Ctrl + Up / Ctrl + Down 的 10% 步进，与本文件 title 提示一致。
    if (!event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) return;
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    event.stopPropagation();
    if (event.key === "ArrowUp") useVolumeStore.getState().setVolumePlusTen();
    else useVolumeStore.getState().setVolumeSubTen();
  };

  return (
    <div className="w-8 h-24 flex-center absolute bottom-full bg-white rounded shadow z-50" ref={RefRect}>
      <SliderPrimitive.Root orientation="vertical" min={0} max={100} step={1} value={[volume]} onValueChange={([v]) => setVolume(v)} onValueCommit={handleValueCommit} onKeyDown={handleKeyDown} title="音量调节（Ctrl + Up / Ctrl + Down）" className="relative flex-center h-20 w-1 touch-none select-none">
        <SliderPrimitive.Track className="bg-gray-200 relative h-20 w-1 rounded-full overflow-hidden">
          <SliderPrimitive.Range className="absolute inset-x-0 ui_theme_bg_color rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-2 h-2 ui_theme_bg_color rounded-full focus:outline-hidden" />
      </SliderPrimitive.Root>
    </div>
  );
};

export default memo(Panel);
