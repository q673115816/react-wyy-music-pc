import React, {
  useState,
  useContext,
  useEffect,
  memo,
  MouseEventHandler,
  useRef,
} from "react";
import { AppContext } from "../context";
import Buffer from "./Buffer";
import { fromEvent, switchMap } from "rxjs";
import Hover from "./Hover";

const Timing = () => {
  const progress = useRef(null);
  const [isHoverTime, setIsHoverTime] = useState(false);
  const [hoverRatio, setHoverRatio] = useState(0);
  const [playerRatio, setPlayerRatio] = useState(0);
  const { state, dispatch } = useContext(AppContext);
  const { duration, currentTime } = state;

  const handleMouseMove: MouseEventHandler<HTMLProgressElement> = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    setHoverRatio((clientX - left) / width);
  };

  const handleClick: MouseEventHandler<HTMLProgressElement> = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const ratio = (clientX - left) / width;
    setPlayerRatio(ratio);
  };

  useEffect(() => {
    const ele = progress.current as HTMLProgressElement;
    const mouseenter$ = fromEvent(ele, "mouseenter");
    const mouseleave$ = fromEvent(ele, "mouseleave");
    const subscription = mouseenter$
      .pipe(
        switchMap(() => {
          setIsHoverTime(true);
          return mouseleave$;
        })
      )
      .subscribe({
        next: () => {
          setIsHoverTime(false);
        },
      });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setPlayerRatio(currentTime / duration);
  }, [currentTime, duration]);

  return (
    <div className="h-1 relative bg-black cursor-pointer">
      {isHoverTime && <Hover hoverRatio={hoverRatio} />}
      <Buffer />
      <div
        className="h-full relative w-0 ui_theme_bg_color"
        title="播放进度"
        style={{ width: `${playerRatio * 100}%` }}
      >
        <i className="rounded-full ui_theme_bg_color w-1 h-1" />
      </div>
      <progress
        ref={progress}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="absolute bottom-0 left-0 opacity-0 w-full"
      />
    </div>
  );
};

export default memo(Timing);
