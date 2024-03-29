import React, { useRef, useEffect, RefObject } from "react";

export default (
  scrollCallback: () => void,
  domScroll: RefObject<HTMLElement> | null,
  domObserver: RefObject<HTMLElement>,
  deps = []
) => {
  const io = useRef<IntersectionObserver>(null);

  const handleIo = () => {
    io.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("isIntersecting");
            scrollCallback();
          }
        });
      },
      {
        root: domScroll?.current || null,
        // rootMargin: '100px 0px 0px 0px',
        // thresholds: [1],
      }
    );
    io.current.observe(domObserver.current);
  };

  const handleUnIo = () => {
    io.current.disconnect();
  };

  useEffect(() => {
    // handleInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, deps);

  return {
    handleIo,
    handleUnIo,
  };
};
