import React, { CSSProperties, FC, memo, useRef } from "react";
import scopeStyle from "./Range.module.scss";
import classNames from "classnames";
import { useSlider, useUpdateEffect } from "react-use";

interface iProps {
  min: number;
  max: number;
  value: number;
  className?: string;
  onChange: (val: number) => void;
  style?: CSSProperties;
}

const Range: FC<iProps> = ({
  min,
  max,
  value,
  onChange,
  className = "",
  style,
}) => {
  value = Math.min(Math.max(value, min), max);
  const ref = useRef<HTMLDivElement>(null);
  const { value: pos, isSliding } = useSlider(ref as React.RefObject<HTMLElement>);
  useUpdateEffect(() => {
    onChange(Math.round(pos * max) + min);
  }, [pos]);
  return (
    <div className={classNames(scopeStyle.wrapper, className)} style={style}>
      <div ref={ref} className={scopeStyle.inner}>
        <i
          className={scopeStyle.drag}
          style={{ left: ((value - min) / (max - min)) * 100 + "%" }}
        />
      </div>
    </div>
  );
};

export default memo(Range);
