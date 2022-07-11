import classNames from "classnames";
import React, {
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

interface iProps extends PropsWithChildren {
  className: string;
  small: string;
  big: string;
}

const Resize: FC<iProps> = ({
  children,
  className = "",
  small = "",
  big = "",
}) => {
  const RefResize = useRef(null);
  const RO = useRef<ResizeObserver>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    RO.current = new ResizeObserver((entries) => {
      entries.forEach(({ contentRect: { width } }) => {
        setWidth(width);
      });
    });
    RO.current.observe(RefResize.current);
    return () => {
      RO.current.disconnect();
    };
  }, []);
  return (
    <div
      className={classNames(className, width >= 810 ? big : small)}
      ref={RefResize}
    >
      {children}
    </div>
  );
};

export default memo(Resize);
