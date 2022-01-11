import React, { useState, memo } from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import classNames from "classnames";

import { setTheme, setCustom } from "@/reducers/setting/slice";
import "./style.scss";
import { themes, colors } from "./utils";

import Custom from "./Custom";
import Color from "./Color";

const panels = ["主题", "纯色"];

export default memo(function Skin() {
  const dispatch = useAppDispatch();
  const { theme, custom } = useAppSelector(({ setting }) => setting);
  const [current, setCurrent] = useState(panels[0]);

  const handleSelectTheme = (theme: string) => {
    if (custom) dispatch(setCustom(false));
    dispatch(setTheme(theme));
  };

  return (
    <div
      className="domHeader_popup_skin absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow text-black z-30 py-3 px-4 rounded-b-lg"
      id="skin"
    >
      <div className="nav border-b space-x-3">
        {panels.map((panel) => (
          <button
            key={panel}
            onClick={() => setCurrent(panel)}
            type="button"
            className={classNames(
              "link relative border-b border-transparent pb-0.5",
              { "border-black": current === panel }
            )}
          >
            {panel}
          </button>
        ))}
      </div>
      <div className="skins">
        {current === "主题" && (
          <div
            className="mt-2.5 grid gap-2.5"
            style={{ gridTemplate: "repeat(2, 90px)/repeat(3, 90px)" }}
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
        )}
        {current === "纯色" && (
          <div className="colors">
            <div
              className="mt-2.5 grid gap-2.5"
              style={{ gridTemplate: "repeat(2, 40px)/repeat(6, 40px)" }}
            >
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
        )}
      </div>
    </div>
  );
});
