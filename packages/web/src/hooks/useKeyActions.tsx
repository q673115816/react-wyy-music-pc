import React, { MouseEventHandler, useEffect } from "react";

import { useVolumeStore, useAudioStore } from "@/stores";

const useKeyActions = () => {
  const setVolumePlusTen = useVolumeStore((state) => state.setVolumePlusTen);
  const setVolumeSubTen = useVolumeStore((state) => state.setVolumeSubTen);
  const keyDown = (e: KeyboardEvent) => {
    const { ctrlKey, keyCode, key } = e;

    if (ctrlKey) {
      switch (key) {
        case "ArrowUp": // 音量
          return setVolumePlusTen();
        case "ArrowDown": // 音量
          return setVolumeSubTen();
        case "ArrowLeft":
          return useAudioStore.getState().setAudioPrev();
        case "ArrowRight":
          return useAudioStore.getState().setAudioNext();
        case "p":
          e.preventDefault(); // 原为打印
          return useAudioStore.getState().setAudioRunningToggle();
        default:
          break;
      }
    }
    return true;
  };
  const contextMenu = (e: MouseEvent) => e.preventDefault();

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("contextmenu", contextMenu);
    return () => {
      document.removeEventListener("contextmenu", contextMenu);
    };
  }, []);
};

export default useKeyActions;
