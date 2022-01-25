import classNames from "classnames";
import React, { useState, useEffect, memo, MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  setGlobalLrcInset,
  setGlobalLrcStartInset,
} from "@/modules/reducers/inset/slice";
import { LrcSelector } from "@/modules/reducers/lrc/slice";
import "./style.scss";
import Drag from "@/components/Drag";
import Control from "./Control";

const Content = memo(function Content() {
  const { currentTime } = useAppSelector(({ audio }) => audio);
  const { lrcList } = useAppSelector(LrcSelector);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);

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
      id="global_lrc_text"
      className="text-center select-none text-transparent whitespace-pre-line pointer-events-none px-4"
      style={{ "--p": `${percentage}%` }}
    >
      {lrcList?.[currentLineIndex]?.word}
      &nbsp;
    </div>
  );
});

const Main = memo(function Main() {
  const { currentSong } = useAppSelector(({ audio }) => audio);
  const { lrcList } = useAppSelector(LrcSelector);
  if (currentSong && !currentSong.name) return <>网易云音乐</>;
  if (!lrcList.length) return <>纯音乐，请您欣赏</>;
  return <Content />;
});

const Lrc = () => {
  const dispatch = useAppDispatch();
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useAppSelector(({ inset }) => inset);
  const { globalLrcVisibility } = useAppSelector(({ lrc }) => lrc);
  const [dragger, setDragger] = useState(false);
  const [active, setActive] = useState(false);

  const onMouseMove: MouseEventHandler = (e) => {
    e.preventDefault();
    return dispatch(
      setGlobalLrcInset({
        x: e.clientX,
        y: e.clientY,
      })
    );
  };

  const onMouseUp: MouseEventHandler = () => {
    setDragger(false);
    setActive(true);
  };

  const onMouseDown: MouseEventHandler = (e) => {
    setDragger(true);
    dispatch(
      setGlobalLrcStartInset({
        x: e.clientX,
        y: e.clientY,
      })
    );
  };

  if (!globalLrcVisibility) return null;
  return (
    <div
      className={classNames(
        "flex-center z-40 text-xl",
        dragger ? "relative" : "fixed"
      )}
      style={{
        width,
        height,
        ...(dragger
          ? { transform: `translate(${x}px, ${y}px)` }
          : { top: y, left: x }),
      }}
    >
      <div onMouseEnter={() => setActive(true)}>
        <Main />
      </div>
      {(active || dragger) && (
        <div
          onMouseLeave={() => setActive(false)}
          className={`absolute w-full h-full bg-black bg-opacity-20 border border-gray-400 shadow pointer-events-${
            active || dragger ? "auto" : "none"
          }`}
        >
          <Drag
            className="w-full h-full"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <Control />
          </Drag>
        </div>
      )}
    </div>
  );
};

export default memo(Lrc);
