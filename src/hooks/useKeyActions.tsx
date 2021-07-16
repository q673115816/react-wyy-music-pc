import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAudioRunningToggle,
  setAudioNext,
  setAudioPrev,
} from "@/reducers/audio/actions";
import { setVolumePlusTen, setVolumeSubTen } from "@/reducers/volume/actions";

export default () => {
  const dispatch = useDispatch();
  // console.log('keyActions');
  const keyDown = (e: KeyboardEvent) => {
    const { ctrlKey, keyCode, key } = e;
    console.log(key);

    if (ctrlKey) {
      switch (key) {
        case 'ArrowUp': // 音量
          return dispatch(setVolumePlusTen());
        case 'ArrowDown': // 音量
          return dispatch(setVolumeSubTen());
        case 'ArrowLeft':
          return dispatch(setAudioPrev());
        case 'ArrowRight':
          return dispatch(setAudioNext());
        case 'p':
          e.preventDefault(); // 原为打印
          return dispatch(setAudioRunningToggle());
        default:
          break;
      }
    }
    return true;
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);
};
