import React, { useState, memo, useRef, FC } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import classNames from "classnames";

import {
  setTheme,
  setCustom,
  settingSelector,
} from "@/modules/reducers/settings/slice";
import style from "./style.module.scss";
import { themes, colors } from "./config";

import Custom from "./Custom";
import Color from "./Color";
import { useClickAway } from "react-use";

const panels = ["主题", "纯色"];

interface iProps {
  setVisibility: (bool: boolean) => void;
}

const Popup: FC<iProps> = ({ setVisibility }) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setVisibility(false);
  });
  const dispatch = useAppDispatch();
  const { theme, custom } = useAppSelector(settingSelector);
  const [current, setCurrent] = useState(panels[0]);

  const handleSelectTheme = (theme: string) => {
    if (custom) dispatch(setCustom(false));
    dispatch(setTheme(theme));
  };

  return (
    <div
      ref={ref}
      className={classNames(
        style.skin,
        "absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow text-black z-30 py-3 px-4 rounded-b-lg"
      )}
    >
      <div className="nav border-b space-x-3">
        {panels.map((panel) => (
          <button
            key={panel}
            onClick={() => setCurrent(panel)}
            type="button"
            className={classNames(
              "link relative border-b  pb-0.5",
              current === panel ? "border-black" : "border-transparent"
            )}
          >
            {panel}
          </button>
        ))}
      </div>
      <div className="skins">
        <div
          className={classNames(style.themes, "mt-2.5 grid gap-2.5")}
          style={{
            display: current === panels[0] ? undefined : "none",
          }}
        >
          {themes.map(([name, hex]) => (
            <Color
              key={hex}
              onClick={() => handleSelectTheme(hex)}
              checked={!custom && theme === hex}
              color={hex}
            />
          ))}
        </div>
        <div style={{ display: current === panels[1] ? undefined : "none" }}>
          <div className={classNames(style.colors, "mt-2.5 grid gap-2.5")}>
            {colors.map((hex, index) => (
              <Color
                key={hex}
                onClick={() => handleSelectTheme(hex)}
                checked={!custom && theme === hex}
                color={hex}
              />
            ))}
          </div>
          <div className="mt-8 mb-2">自定义颜色</div>
          <Custom />
        </div>
      </div>
    </div>
  );
};

export default memo(Popup);
