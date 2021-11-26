import React, { MouseEventHandler, useEffect } from "react";
import {
  setAudioRunningToggle,
  setAudioNext,
  setAudioPrev,
} from "@/reducers/audio/slice";
import { setVolumePlusTen, setVolumeSubTen } from "@/reducers/volume/slice";
import { useAppDispatch } from "@/reducers/hooks";

export default () => {
  console.log("action");
  const dispatch = useAppDispatch();
  // console.log('keyActions');
  const keyDown = (e: KeyboardEvent) => {
    const { ctrlKey, keyCode, key } = e;
    console.log(key);

    if (ctrlKey) {
      switch (key) {
        case "ArrowUp": // 音量
          return dispatch(setVolumePlusTen());
        case "ArrowDown": // 音量
          return dispatch(setVolumeSubTen());
        case "ArrowLeft":
          return dispatch(setAudioPrev());
        case "ArrowRight":
          return dispatch(setAudioNext());
        case "p":
          e.preventDefault(); // 原为打印
          return dispatch(setAudioRunningToggle());
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
