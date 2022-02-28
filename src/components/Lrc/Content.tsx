import React, { memo } from "react";
import { useAppSelector } from "@/modules/hooks";
import { LrcSelector } from "@/modules/reducers/lrc/slice";
import Word from "./Word";
import { audioSelector } from "@/modules/reducers/audio/slice";

const Content = () => {
  const { currentSong } = useAppSelector(audioSelector);
  const { lrcList } = useAppSelector(LrcSelector);
  if (currentSong && !currentSong.name) return <>网易云音乐</>;
  if (!lrcList.length) return <>纯音乐，请您欣赏</>;
  return <Word />;
};

export default memo(Content);
