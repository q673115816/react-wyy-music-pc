import React, {
  ChangeEventHandler,
  FC,
  memo,
  useEffect,
  useState,
} from "react";
import { setCustom, setTheme } from "@/reducers/setting/slice";
import Check from "./Check";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { hexToHSL, HSLToHex } from "./utils";

const Custom: FC = () => {
  const dispatch = useAppDispatch();
  const { theme, custom } = useAppSelector(({ setting }) => setting);
  const [[h, s, l], setHSL] = useState(() => hexToHSL(theme));
  useEffect(() => {
    setHSL(hexToHSL(theme));
  }, [theme]);
  const handleRGB: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!custom) dispatch(setCustom(true));
    const val = e.target.value;
    dispatch(setTheme(HSLToHex(val, s, l)));
  };

  const handleHSL: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!custom) dispatch(setCustom(true));
    const val = e.target.value;
    dispatch(setTheme(HSLToHex(h, s, val)));
  };

  return (
    <div className="custom flex">
      <button
        type="button"
        className="relative colour flex-none w-10 h-10 mr-2.5"
        onClick={() => dispatch(setCustom(true))}
      >
        {custom && <Check />}
        {custom && "true"}
      </button>
      <div className="flex-auto pt-1.5">
        <input
          className="rgb"
          type="range"
          min="0"
          max="359"
          step="1"
          value={h}
          onChange={handleRGB}
        />
        <input
          className="hsl"
          type="range"
          min="0"
          max="50"
          step="1"
          value={l}
          onChange={handleHSL}
          style={{ "--h": h }}
        />
      </div>
    </div>
  );
};

export default memo(Custom);
