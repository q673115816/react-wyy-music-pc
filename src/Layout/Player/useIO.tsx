import { useRef, useState, useEffect } from "react";

const useIO = () => {
  const DomVideoWrap = useRef(null);
  const DomScroll = useRef(null);
  const Io = useRef(null);
  const [fixed, setFixed] = useState(false);

  const handleIo = () => {
    Io.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setFixed(!entry.isIntersecting);
        });
      },
      {
        root: DomScroll.current,
      }
    );
    Io.current.observe(DomVideoWrap.current);
  };

  const handleUnIo = () => {
    Io.current.disconnect();
  };

  useEffect(() => {
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);
  return {
    DomVideoWrap,
    DomScroll,
    fixed,
  };
};

export default useIO;
