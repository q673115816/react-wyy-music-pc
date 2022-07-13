import React, { FC, memo, useCallback, useMemo } from "react";
import {
  setCustom,
  setTheme,
  settingSelector,
} from "@/modules/reducers/settings/slice";
import Color from "color";
import style from "./style.module.scss";
import Check from "./Check";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import classNames from "classnames";
import Range from "./Range";

const Custom: FC = () => {
  const dispatch = useAppDispatch();
  const { theme, custom } = useAppSelector(settingSelector);
  const color = useMemo(() => Color(theme), [theme]);
  const [h, s, l] = useMemo(() => color.hsl().array(), [color]);
  const handleRGB = useCallback(
    (val: number) => {
      if (!custom) dispatch(setCustom(true));
      const theme = color.hue(val).hex();
      dispatch(setTheme(theme));
    },
    [color]
  );

  const handleHSL = useCallback(
    (val: number) => {
      if (!custom) dispatch(setCustom(true));
      const theme = color.lightness(val).hex();
      dispatch(setTheme(theme));
    },
    [color]
  );

  return (
    <div className="flex gap-2.5">
      <button
        type="button"
        className={classNames(
          style.colour,
          "relative flex-none w-10 h-10 rounded"
        )}
        onClick={() => dispatch(setCustom(true))}
      >
        {custom && <Check />}
      </button>
      <div className="flex-auto flex flex-col pt-1.5 gap-5">
        <Range
          min={0}
          max={359}
          value={h}
          onChange={handleRGB}
          style={{
            backgroundImage: `linear-gradient(to right, red, yellow, lime, aqua, blue, magenta, red)`,
          }}
        />
        <Range
          min={1}
          max={50}
          value={l}
          onChange={handleHSL}
          style={{
            backgroundImage: `linear-gradient(to right,
              hsl(${h}, 100%, 0%) 0,
              hsl(${h}, 100%, 50%) 100%
            )`,
          }}
        />
      </div>
    </div>
  );
};

export default memo(Custom);
