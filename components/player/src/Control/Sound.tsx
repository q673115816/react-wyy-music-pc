import React, {
  memo,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import IconMute from "../assets/mute.svg";
import styled from "styled-components";
import { concatAll, fromEvent, map, takeUntil } from "rxjs";

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
  right: 0;
  transform: translate(0, -50%);
  width: 8px;
  height: 8px;
  border: 2px solid #fff;
  background-color: var(--playerThemeColor, #f00);
  border-radius: 50%;
`;

const Background = styled.div`
  width: 100px;
  height: 5px;
  margin: 0 10px;
  background-color: rgba(255, 255, 255, 0.2);
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
  const [width, setWidth] = useState(100);
  const point = useRef<HTMLDivElement>(null);
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const { currentTarget, clientX } = event;
    const rect = currentTarget.getBoundingClientRect();
    const left = clientX - rect.left;
    setWidth(((left / rect.width) * 100) | 0);
  };
  useEffect(() => {
    const mousedown$ = fromEvent(point.current, "mousedown");
    const mousemove$ = fromEvent(document, "mousemove");
    const mouseup$ = fromEvent(document, "mouseup");

    const subscription = mousedown$
      .pipe(
        map((e) => {
          console.log(e);
          return e;
        }),
        map((mouseDownEvent) =>
          mousemove$.pipe(
            takeUntil(mouseup$),
            map((mouseMoveEvent) => {
              return mouseMoveEvent;
            })
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Content>
      <Button type={"button"}>
        <IconMute width={16} />
      </Button>
      <Background onClick={handleClick}>
        <Inner width={width}>
          <Point ref={point} />
        </Inner>
      </Background>
    </Content>
  );
};

export default memo(Sound);
