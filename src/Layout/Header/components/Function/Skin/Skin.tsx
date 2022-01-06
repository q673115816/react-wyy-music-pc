import React, {
  useState,
  memo,
  useEffect,
  FC,
  ChangeEventHandler,
} from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { IconCheck } from "@tabler/icons";
import classNames from "classnames";

import { setTheme, setCustom } from "@/reducers/setting/slice";
import "./style.scss";
import { hexToHSL, HSLToHex, themes, colors } from "./utils";

const Check = () => (
  <i className="absolute flex-center text-white bg-red-500 -bottom-1.5 -right-1.5 border-2 p-0.5 border-white rounded-full">
    <IconCheck size={16} stroke={2} />
  </i>
);

export default memo(function Skin() {
  const dispatch = useAppDispatch();
  const { theme, custom } = useAppSelector(({ setting }) => setting);
  const [current, setCurrent] = useState(0);
  const [[h, s, l], setHSL] = useState(() => hexToHSL(theme));

  // const memoHSL = useMemo(() => RGBToHSL(...hexToRGB(theme)), [theme]);
  useEffect(() => {
    setHSL(hexToHSL(theme));
  }, [theme]);
  const handleSelectTheme = (theme: string) => {
    if (custom) dispatch(setCustom(false));
    dispatch(setTheme(theme));
  };

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
    <div
      className="domHeader_popup_skin absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow text-black z-30 py-3 px-4 rounded-b-lg"
      id="skin"
    >
      <div className="nav border-b space-x-3">
        <button
          onClick={() => setCurrent(0)}
          type="button"
          className={classNames(
            "link relative border-b border-transparent pb-0.5",
            { "border-black": current === 0 }
          )}
        >
          主题
        </button>
        <button
          onClick={() => setCurrent(1)}
          type="button"
          className={classNames(
            "link relative border-b border-transparent pb-0.5",
            { "border-black": current === 1 }
          )}
        >
          纯色
        </button>
      </div>
      <div className="skins">
        <div
          className="themes mt-2.5 grid gap-2.5"
          style={{ display: current === 0 ? null : "none" }}
        >
          {themes.map(([name, hex]) => (
            <button
              onClick={() => handleSelectTheme(hex)}
              key={name}
              type="button"
              className="skinbtn relative theme rounded"
              style={{ "--currentColor": hex }}
            >
              <span className="name absolute rounded-b-xl inset-x-0 bottom-0 bg-black bg-opacity-40 h-5 text-white">
                {name}
              </span>
              {!custom && theme === hex && <Check />}
            </button>
          ))}
        </div>
        <div
          className="colors"
          style={{ display: current === 1 ? null : "none" }}
        >
          <div className="default mt-2.5 grid gap-2.5">
            {colors.map((hex, index) => (
              <button
                key={hex}
                onClick={() => handleSelectTheme(hex)}
                type="button"
                className={classNames(
                  "skinbtn relative color rounded",
                  index === 0 && "border"
                )}
                style={{ "--currentColor": hex }}
              >
                {!custom && theme === hex && <Check />}
              </button>
            ))}
          </div>
          <div className="mt-8 mb-2">自定义颜色</div>
          <div className="custom">
            <button
              type="button"
              className="relative colour flex-none w-10 h-10 mr-2.5"
              onClick={() => dispatch(setCustom(true))}
            >
              {custom && <Check />}
            </button>
            <div className="ranges">
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
        </div>
      </div>
    </div>
  );
});
