import React, { memo, useEffect } from "react";
import { useLocation } from "react-router";
import { useLrcStore, useAudioStore } from "@/stores";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import Content from "./components/Content";

import style from "./Lrc.module.scss";
import classNames from "classnames";

const Lrc = () => {
  const location = useLocation();
  const { currentSong } = useAudioStore();
  const { lyricVisibility, setLyricHide } = useLrcStore();

  useEffect(() => {
    setLyricHide();
  }, [location, setLyricHide]);

  if (!lyricVisibility) return null;
  return (
    <div
      className={classNames(
        style.lrc,
        "absolute inset-x-0 z-10 overflow-hidden"
      )}
    >
      <div className="w-full h-full overflow-auto transform">
        <div className="m-auto" style={{ width: 888 }}>
          <div className="flex justify-between">
            <Left />
            <Center />
            <Right id={currentSong.id} />
          </div>
          <div className="mt-14">
            <div className={`m-auto`} style={{ width: 556 }}>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Lrc);
