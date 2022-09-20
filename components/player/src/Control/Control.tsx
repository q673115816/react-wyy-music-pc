import React, { useContext, memo } from "react";
import dayjs from "dayjs";
import { VideoContext } from "../reducer";
import Size from "./Size";
import IconPlayerPlay from "../assets/play.svg";
import IconPlayerPause from "../assets/pause.svg";
import IconFullSreen from "../assets/fullsreen.svg";
import IconMinimize from "../assets/minimize.svg";

const Control = () => {
  const {
    handleChangeFull,
    full,
    handleChangePlay,
    play,
    currentTime,
    duration,
  } = useContext(VideoContext);
  return (
    <div className="h-10 flex-none bg-black flex items-center pl-2">
      <button
        type="button"
        className="border rounded-full text-white border-current w-6 h-6 flex-center"
        onClick={handleChangePlay}
      >
        {play ? (
          <IconPlayerPause width={16} className="fill-current" />
        ) : (
          <IconPlayerPlay width={16} className="fill-current" />
        )}
      </button>
      <span className="text-gray-300 ml-2">
        {dayjs(currentTime * 1000).format("mm:ss")}
        &nbsp; / &nbsp;
        {dayjs(duration * 1000).format("mm:ss")}
      </span>
      <div className="ml-auto flex divide-x">
        <div className="flex">
          <button type="button">{}</button>
          <div>{}</div>
        </div>
        <Size />
        <button
          onClick={handleChangeFull}
          type="button"
          className="flex-center w-10 text-gray-400 hover:text-white"
        >
          {full ? (
            <IconMinimize width={16} className="fill-current" />
          ) : (
            <IconFullSreen width={16} className="fill-current" />
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(Control);