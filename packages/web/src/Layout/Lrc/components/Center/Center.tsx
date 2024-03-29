import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/modules/hooks";
import Lrc from "./Lrc";
import { audioSelector } from "@/modules/reducers/audio/slice";
import style from "./Center.module.scss";
import classNames from "classnames";

const Center = () => {
  const { currentSong } = useAppSelector(audioSelector);
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
        <div
          className={classNames(
            style.maskTop,
            "absolute pointer-events-none left-0 right-0 top-0 h-6"
          )}
        />
        <div
          className={classNames(
            style.maskBottom,
            "absolute pointer-events-none left-0 right-0 bottom-0 h-6"
          )}
        />
      </div>
    </div>
  );
};

export default memo(Center);
