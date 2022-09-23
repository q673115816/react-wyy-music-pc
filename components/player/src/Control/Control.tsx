import React, { useContext, memo } from "react";
import dayjs from "dayjs";
import { AppContext } from "../context";
import Size from "./Size";
import Sound from "./Sound";
import IconPlayerPlay from "../assets/play.svg";
import IconPlayerPause from "../assets/pause.svg";
import IconFullScreen from "../assets/fullscreen.svg";
import IconMinimize from "../assets/minimize.svg";
import { actionUpdate } from "../reducers";

const Control = () => {
  const { state, dispatch } = useContext(AppContext);
  const { full, play, currentTime, duration } = state;
  const handleTogglePlay = () => {
    dispatch(actionUpdate({ play: !play }));
  };
  const handleToggleFull = async () => {
    dispatch(actionUpdate({ full: !full }));
  };
  return (
    <div className="h-10 flex-none bg-black flex items-center pl-2">
      <button
        type="button"
        onClick={handleTogglePlay}
        className="border rounded-full text-white border-current w-6 h-6 flex-center"
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
        <Sound />
        <Size />
        <button
          type="button"
          className="flex-center w-10 text-gray-400 hover:text-white"
        >
          {full ? <IconMinimize width={16} /> : <IconFullScreen width={16} />}
        </button>
      </div>
    </div>
  );
};

export default memo(Control);
