import React, {
  useState,
  useContext,
  useEffect,
  memo,
  MouseEventHandler,
} from "react";
import dayjs from "dayjs";
import { actionSetData } from "../reducer/actions";
import { VideoContext } from "../reducer";

const Timing = () => {
  const [timeTips, setTimeTips] = useState(false);
  const [dragger, setDragger] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);
  const [playerLengthRatio, setPlayerLengthRatio] = useState(0);
  const { duration, currentTime, buffered, videoDispatch } =
    useContext(VideoContext);

  const handleProgressEnter: MouseEventHandler<HTMLProgressElement> = () => {
    setTimeTips(true);
  };

  const handleProgressMove: MouseEventHandler<HTMLProgressElement> = (
    event
  ) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    setMousePosition((clientX - left) / width);
    if (dragger) {
      setPlayerLengthRatio((clientX - left) / width);
    }
  };

  const handleProgressLeave: MouseEventHandler<HTMLProgressElement> = () => {
    setTimeTips(false);
  };

  const handleProgressDropUp: MouseEventHandler<HTMLProgressElement> = () => {
    //
  };

  const handleClick: MouseEventHandler<HTMLProgressElement> = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const ratio = (clientX - left) / width;
    setPlayerLengthRatio(ratio);
    videoDispatch(actionSetData({ jumpTime: ratio * duration }));
  };

  useEffect(() => {
    if (!dragger) {
      setPlayerLengthRatio(currentTime / duration);
    }
  }, [currentTime]);

  return (
    <div className="h-1 relative bg-black cursor-pointer">
      {timeTips && (
        <div
          className="absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2"
          style={{ left: `${mousePosition * 100}%` }}
        >
          {dayjs(mousePosition * duration * 1000).format("mm:ss")}
        </div>
      )}
      <div className="absolute inset-0" title="缓存">
        {buffered.map(([start, end]) => (
          <div
            key={`${start}-${end}`}
            className="absolute inset-y-0 bg-gray-400"
            style={{
              left: `${(start / duration) * 100}%`,
              right: `${(1 - end / duration) * 100}%`,
            }}
          />
        ))}
      </div>
      <div
        className="h-full relative w-0 ui_theme_bg_color"
        title="播放进度"
        style={{ width: `${playerLengthRatio * 100}%` }}
      >
        <i className="rounded-full ui_theme_bg_color w-1 h-1" />
      </div>
      <progress
        onMouseEnter={handleProgressEnter}
        onMouseMove={handleProgressMove}
        onMouseLeave={handleProgressLeave}
        onMouseUp={handleProgressDropUp}
        onClick={handleClick}
        max={duration}
        value={currentTime}
        className="absolute bottom-0 left-0 opacity-0 w-full"
      />
    </div>
  );
};

export default memo(Timing);
