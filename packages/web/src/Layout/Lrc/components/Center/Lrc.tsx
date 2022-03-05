import { useAppSelector } from "@/modules/hooks";
import classnames from "classnames";
import React, { memo, useEffect, useRef, useState } from "react";

const Lrc = () => {
  const { currentTime } = useAppSelector(({ audio }) => audio);
  const { lrcList } = useAppSelector(({ lrc }) => lrc);
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
