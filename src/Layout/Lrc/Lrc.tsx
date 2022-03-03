import React, { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import { setLyricHide } from "@/modules/reducers/lrc/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import Content from "./components/Content";

const Lrc = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { currentSong } = useAppSelector(({ audio }) => audio);
  const { lyricVisibility } = useAppSelector(({ lrc }) => lrc);

  useEffect(() => {
    dispatch(setLyricHide());
  }, [location]);

  if (!lyricVisibility) return null;
  return (
    <div id="lrc" className="absolute inset-x-0 z-10 overflow-hidden">
      <div className="w-full h-full bg-white overflow-auto transform">
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
