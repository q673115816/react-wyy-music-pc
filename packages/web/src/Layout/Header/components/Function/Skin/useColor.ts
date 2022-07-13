import Color from "color";
import { useRef } from "react";

const useColor = (hex: string) => {
  const color = useRef(Color(hex));

  return {
    ...color.current.hsl().object(),
  };
};

export default useColor;
