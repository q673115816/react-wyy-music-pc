import classnames from "classnames";
import React, { memo, useEffect, useRef, useState } from "react";

import { useLrcStore, useAudioStore } from "@/stores";

const Lrc = () => {
  const { currentTime } = useAudioStore();
  const lrcList = useLrcStore((state) => state.lrcList);
  const RefScroll = useRef(null);
  const RefCurrentLine = useRef(null);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    setCurrentLineIndex(
      lrcList.findIndex(({ time }) => time > currentTime) - 1
    );
  }, [currentTime]);

  useEffect(() => {
    RefScroll.current.scrollTop = 0;
  }, [lrcList]);

  useEffect(() => {
    if (RefCurrentLine?.current) {
      RefScroll.current.scrollTop =
        RefCurrentLine.current.offsetTop - RefScroll.current.clientHeight / 2;
    }
  }, [currentLineIndex]);
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="whitespace-pre-line select-text text-center text-gray-500 space-y-2 overflow-auto overscroll-contain h-full pt-36"
      ref={RefScroll}
    >
      {lrcList.length ? (
        lrcList.map(({ time, word }, index) => (
          <div
            ref={currentLineIndex === index ? RefCurrentLine : null}
            key={time}
            className={classnames(
              "leading-5",
              currentLineIndex === index && "font-bold text-black"
            )}
          >
            {word.trim()}
            &nbsp;
          </div>
        ))
      ) : (
        <div>纯音乐，请您欣赏</div>
      )}
    </div>
  );
};

export default memo(Lrc);
