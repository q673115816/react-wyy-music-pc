import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import classnames from "classnames";

const Lrc = memo(() => {
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
});

export default memo(() => {
  const { currentSong } = useAppSelector(({ audio }) => audio);
  return (
    <div className="center overflow-auto pt-5" style={{ width: 300 }}>
      <div className="text-2xl text-center">{currentSong.name}</div>
      <div className="flex justify-center mt-2 whitespace-nowrap">
        <div className="truncate">
          {currentSong.ar.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="ui_text_gray_hover"
            >
              {artist.name}
            </Link>
          ))}
        </div>
        &nbsp; - &nbsp;
        <div className="truncate">
          <Link
            to={`/playlist/album/${currentSong.al.id}`}
            className="ui_text_gray_hover"
          >
            {currentSong.al.name}
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="relative mt-8" style={{ height: 330 }}>
          <Lrc />
        </div>
        <div className="absolute pointer-events-none left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
});
