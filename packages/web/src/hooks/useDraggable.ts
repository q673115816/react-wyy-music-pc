import {
  cloneElement,
  createElement,
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { fromEvent, map, takeUntil } from "rxjs";
import { switchMap } from "rxjs/operators";

const getInitialRect = (ele: Element) => {
  const { x, y } = ele.getBoundingClientRect();
  return {
    initialX: x,
    initialY: y,
  };
};

interface iProps {
  ele: ReactElement;
  offset: string | null;
  next: ({ x, y }) => void;
}

const createDraggable = ({ ele, offset = null, next }) => {
  const offsetEle = offset ? document.querySelector(offset) : ele;
  const mouseDown$ = fromEvent(ele, "mousedown");
  const mouseMove$ = fromEvent(document, "mousemove");
  const mouseUp$ = fromEvent(document, "mouseup");
  mouseDown$
    .pipe(
      map((down: MouseEvent) => ({
        clientX: down.clientX,
        clientY: down.clientY,
        // initialX: 0,
        // initialY: 0,
        ...getInitialRect(offsetEle),
      })),
      switchMap((down) => {
        return mouseMove$.pipe(
          map((move: MouseEvent) => {
            return {
              x: down.initialX - down.clientX + move.clientX,
              y: down.initialY - down.clientY + move.clientY,
            };
          }),
          takeUntil(mouseUp$)
        );
      })
    )
    .subscribe({
      next: (val) => {
        next(val);
      },
    });
};

const useDraggable = ({ ele, offset = null, next }: iProps) => {
  const ref = useRef();
  ele = cloneElement(ele, { ref });
  useEffect(() => {
    ref.current && createDraggable({ ele: ref.current, offset, next });
  }, []);
  console.log(ele);
  return ele;
};

export default useDraggable;
