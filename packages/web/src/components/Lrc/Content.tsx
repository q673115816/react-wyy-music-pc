import React, { memo } from "react";
import { useLrcStore, useAudioStore } from "@/stores";
import Word from "./Word";

const Content = () => {
  const { currentSong } = useAudioStore();
  const lrcList = useLrcStore((state) => state.lrcList);
  if (currentSong && !currentSong.name) return <>网易云音乐</>;
  if (!lrcList.length) return <>纯音乐，请您欣赏</>;
  return <Word />;
};

export default memo(Content);
