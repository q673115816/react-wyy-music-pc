import React, { memo, useEffect, useState } from "react";
import { useAppSelector } from "@/modules/hooks";
import { LrcSelector } from "@/modules/reducers/lrc/slice";
import { audioSelector } from "@/modules/reducers/audio/slice";
import { useCss } from "react-use";
import classNames from "classnames";
import style from "./style.module.scss";

const Word = () => {
  const { currentTime } = useAppSelector(audioSelector);
  const { lrcList } = useAppSelector(LrcSelector);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const className = useCss({ "--p": `${percentage}%` });
  useEffect(() => {
    let nextIndex = 0;
    lrcList.forEach(({ time }, index) => {
      if (time < currentTime) {
        nextIndex = index;
      }
    });
    setPercentage(() => {
      if (!(lrcList[nextIndex] && lrcList[nextIndex + 1])) return 0;
      const { time: time1 } = lrcList[nextIndex];
      const { time: time2 } = lrcList[nextIndex + 1];
      // console.log((currentTime - time) / ((min2 * 60 + sec2 * 1) - time));
      return ((currentTime - time1) / (time2 - time1)) * 100;
    });
    if (nextIndex !== currentLineIndex) setCurrentLineIndex(nextIndex);
  }, [currentTime]);
  return (
    <div
      className={classNames(
        style.word,
        className,
        "text-center select-none text-transparent whitespace-pre-line pointer-events-none px-4"
      )}
    >
      {lrcList?.[currentLineIndex]?.word}
      &nbsp;
    </div>
  );
};

export default memo(Word);
