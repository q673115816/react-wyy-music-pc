import React, {
  memo,
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import IconMute from "../assets/mute.svg";
import IconVoice from "../assets/voice.svg";
import styled from "styled-components";
import { concatAll, fromEvent, map, takeUntil } from "rxjs";
import { AppContext } from "../context";
import { actionUpdate } from "../reducers";
import { MUTED, VOLUME } from "../types";
import { useEffectOnce, useLocalStorage } from "react-use";

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #999;
`;

const Point = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(0, -50%);
  width: 8px;
  height: 8px;
  border: 2px solid #fff;
  background-color: var(--playerThemeColor, #f00);
  border-radius: 50%;
  box-shadow: 0 0 10px 1px rgb(255 255 255);
`;

const Background = styled.div`
  width: 100px;
  height: 4px;
  margin: 0 10px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:hover ${Point} {
    opacity: 1;
  }
`;

const Inner = styled.div<{ width: number }>`
  position: relative;
  height: 100%;
  border-radius: 5px;
  background-color: var(--playerThemeColor, #f00);
  ${({ width }) => `
    width: ${width}%
  `}
`;

const Sound = () => {
  const { state, dispatch } = useContext(AppContext);
  const { volume, muted } = state;
  const [width, setWidth] = useState(() => (muted ? 0 : volume));
  const track = useRef<HTMLDivElement>(null);
  const point = useRef<HTMLDivElement>(null);
  const [initialVolume, SET_VOLUME] = useLocalStorage(VOLUME, 1);
  const [initialMuted, SET_MUTED] = useLocalStorage(MUTED, false);
  useEffectOnce(() => {
    dispatch(actionUpdate({ muted: initialMuted, volume: initialVolume }));
  });
  const handleToggleMute = () => {
    SET_MUTED(!muted);
    dispatch(actionUpdate({ muted: !muted }));
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const { currentTarget, clientX } = event;
    const rect = currentTarget.getBoundingClientRect();
    const left = clientX - rect.left;
    const volume = left / rect.width;
    SET_MUTED(false);
    SET_VOLUME(volume);
    dispatch(actionUpdate({ volume, muted: false }));
  };

  useEffect(() => {
    const mousedown$ = fromEvent<MouseEvent>(point.current, "mousedown");
    const mousemove$ = fromEvent<MouseEvent>(document, "mousemove");
    const mouseup$ = fromEvent<MouseEvent>(document, "mouseup");

    const subscription = mousedown$
      .pipe(
        map(() => {
          return track.current.getBoundingClientRect();
        }),
        map((rect) =>
          mousemove$.pipe(
            takeUntil(mouseup$),
            map(({ clientX }) => {
              const left = clientX - rect.left;
              const _left = left < 0 ? 0 : left > rect.width ? 1 : left;
              return _left / rect.width;
            })
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (volume) => {
          SET_MUTED(false);
          SET_VOLUME(volume);
          dispatch(actionUpdate({ volume, muted: false }));
        },
      });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setWidth(muted ? 0 : volume);
  }, [muted, volume]);

  return (
    <Content>
      <Button type={"button"} onClick={handleToggleMute}>
        {muted || volume === 0 ? (
          <IconMute width={16} />
        ) : (
          <IconVoice width={16} />
        )}
      </Button>
      <Background onClick={handleClick} ref={track}>
        <Inner width={width * 100}>
          <Point ref={point} />
        </Inner>
      </Background>
    </Content>
  );
};

export default memo(Sound);
