import { useEffect, RefObject } from "react";
import { useInView } from "react-intersection-observer";

export default (
  scrollCallback: () => void,
  domScroll: RefObject<HTMLElement | null> | null,
  deps: any[] = []
) => {
  const { ref, inView } = useInView({
    root: domScroll?.current ?? null,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (inView) scrollCallback();
  }, [inView, ...deps]);
  return { ref, inView };
};
