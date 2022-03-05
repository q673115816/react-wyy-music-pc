import React, { useContext, memo } from "react";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconArrowsMaximize,
  IconArrowsMinimize,
} from "@tabler/icons";
import dayjs from "dayjs";
import { VideoContext } from "../reducer";
import Size from "./Size";

const DomSpeed = () => <div className="relative w-20">{}</div>;

const Control = () => {
  const {
    handlechangeFull,
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
          <IconPlayerPause className="fill-current" size={12} />
        ) : (
          <IconPlayerPlay className="fill-current" size={12} />
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
        {/* <DomSpeed /> */}
        <Size />
        <button
          onClick={handlechangeFull}
          type="button"
          className="flex-center w-10 text-gray-400 hover:text-white"
        >
          {full ? (
            <IconArrowsMinimize size={20} stroke={1} />
          ) : (
            <IconArrowsMaximize size={20} stroke={1} />
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(Control);
