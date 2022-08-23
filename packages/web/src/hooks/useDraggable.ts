import { concatAll, fromEvent, map, takeUntil } from "rxjs";
import { useEffect, useState } from "react";

type Inset = "startX" | "startY" | "moveX" | "moveY";

const useDraggable = (el?: any) => {
  const [state, setState] = useState<Record<Inset, number | null>>({
    startX: null,
    startY: null,
    moveX: null,
    moveY: null,
  });

  const mouseDown$ = fromEvent<MouseEvent>(el || document, "mousedown");
  const mouseMove$ = fromEvent<MouseEvent>(document, "mousemove");
  const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");
  const handleInit = () => {
    return mouseDown$
      .pipe(
        map((e) => {
          return {
            startX: e.clientX,
            startY: e.clientY,
          };
        }),
        map(({ startX, startY }) =>
          mouseMove$.pipe(
            takeUntil(mouseUp$),
            map((moveEvent) => ({
              moveX: moveEvent.clientX,
              moveY: moveEvent.clientY,
              startX,
              startY,
            }))
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          setState(data);
        },
      });
  };
  useEffect(() => {
    const subscribed = handleInit();
    return () => {
      subscribed.unsubscribe();
    };
  }, [el]);

  return state;
};

export default useDraggable;
