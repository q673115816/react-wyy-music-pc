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
import {
  concatAll,
  concatMap,
  fromEvent,
  map,
  merge,
  mergeMap,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs";
import Hover from "./Hover";
import styled from "styled-components";
import { actionUpdate } from "../reducers";

const Context = styled.div`
  position: relative;
  background-color: #000;
  cursor: pointer;
  z-index: 2;
`;

const Point = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);
  transform: translate(0, -50%);
  background-color: var(--playerThemeColor, #f00);
  border: calc(var(--radius) - var(--inner)) solid #fff;
  border-radius: 50%;
`;

const Progress = styled.div`
  position: relative;
  width: 0;
  height: 100%;
  background-color: var(--playerThemeColor, #f00);
`;

const Track = styled.div`
  --radius: 7px;
  --inner: 2px;
  padding-right: calc(var(--radius) * 2);
  height: 4px;
`;

const Timing = () => {
  const track = useRef(null);
  const progress = useRef(null);
  const point = useRef(null);
  const [draging, setDraging] = useState(false);
  const [isHoverTime, setIsHoverTime] = useState(false);
  const [hoverRatio, setHoverRatio] = useState(0);
  const [playerRatio, setPlayerRatio] = useState(0);
  const { state, dispatch } = useContext(AppContext);
  const { duration, currentTime } = state;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    setHoverRatio((clientX - left) / width);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
    clientX,
  }) => {
    const rect = currentTarget.getBoundingClientRect();
    const left =
      rect.left > clientX
        ? rect.left
        : rect.left + rect.width < clientX
        ? rect.left + rect.width
        : clientX;
    const ratio = (left - rect.left) / rect.width;
    dispatch(actionUpdate({ jumpRatio: ratio }));
  };

  useEffect(() => {
    const ele = track.current as HTMLDivElement;
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
    const ele = point.current as HTMLDivElement;
    const mousedown$ = fromEvent<MouseEvent>(ele, "mousedown");
    const mousemove$ = fromEvent<MouseEvent>(document, "mousemove");
    const mouseup$ = fromEvent<MouseEvent>(document, "mouseup");
    const subscription = mousedown$
      .pipe(
        map(({ clientX, currentTarget, target }) => {
          setDraging(true);
          return track.current.getBoundingClientRect();
        }),
        map((rect) =>
          mousemove$.pipe(
            takeUntil(
              mouseup$.pipe(
                tap(() => {
                  setDraging(false);
                })
              )
            ),
            map((mouseMoveEvent) => {
              const { clientX } = mouseMoveEvent;
              const diffX = clientX - rect.left;
              const left =
                diffX < 0 ? 0 : diffX > rect.width ? rect.width : diffX;
              return left / rect.width;
            })
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          setPlayerRatio(data);
        },
      });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!draging) setPlayerRatio(currentTime / duration);
  }, [currentTime, duration, draging]);

  return (
    <Context>
      {isHoverTime && <Hover hoverRatio={hoverRatio} />}
      <Buffer />
      <Track ref={track} onMouseMove={handleMouseMove} onClick={handleClick}>
        <Progress ref={progress} style={{ width: `${playerRatio * 100}%` }}>
          <Point ref={point} />
        </Progress>
      </Track>
    </Context>
  );
};

export default memo(Timing);
