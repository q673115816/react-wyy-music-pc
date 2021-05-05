import React, {
  useState, memo, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconCheck,
} from '@tabler/icons';
import classNames from 'classnames';

import { setTheme, setCustom } from '@/reducers/setting/actions';
import './style.scss';
// https://css-tricks.com/converting-color-spaces-in-javascript/
function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) { r = `0${r}`; }
  if (g.length == 1) { g = `0${g}`; }
  if (b.length == 1) { b = `0${b}`; }

  return `#${r}${g}${b}`;
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0; let g = 0; let
    b = 0;
  if (H.length == 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length == 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) { h = 0; } else if (cmax == r) { h = ((g - b) / delta) % 6; } else if (cmax == g) { h = (b - r) / delta + 2; } else { h = (r - g) / delta + 4; }

  h = Math.round(h * 60);

  if (h < 0) { h += 360; }

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l];
  // return "hsl(" + h + "," + s + "%," + l + "%)";
}

const themes = [
  ['酷炫黑', '#393D44'],
  ['官方红', '#D03535'],
  ['可爱粉', '#F95A92'],
  ['天际蓝', '#5AB4F9'],
  ['清新绿', '#38B277'],
  ['土豪金', '#D18E35'],
];

const colors = [
  '#FF5C8A',
  '#FF7A9E',
  '#FE76C8',
  '#717FF9',
  '#4791EB',
  '#39AFEA',
  '#2BB669',
  '#6ACC19',
  '#E2AB12',
  '#FF8F57',
  '#FD726D',
  '#FD544E',
];

const DomCheck = () => (
  <i className="ico absolute flex-center text-white bg-red-500 -bottom-1 -right-1 border border-white rounded-full">
    <IconCheck size={16} stroke={2} />
  </i>
);

export default memo(() => {
  const dispatch = useDispatch();
  const { theme, custom } = useSelector(({ setting }) => setting);
  const [current, setCurrent] = useState(0);
  const [[h, s, l], setHSL] = useState(() => hexToHSL(theme));

  // const memoHSL = useMemo(() => RGBToHSL(...hexToRGB(theme)), [theme]);
  useEffect(() => {
    setHSL(hexToHSL(theme));
  }, [theme]);
  const handleSelectTheme = (theme) => {
    if (custom) dispatch(setCustom(false));
    dispatch(setTheme(theme));
  };

  const handleRGB = (val) => {
    if (!custom) dispatch(setCustom(true));
    dispatch(setTheme(HSLToHex(val, s, l)));
  };

  const handleHSL = (val) => {
    if (!custom) dispatch(setCustom(true));
    dispatch(setTheme(HSLToHex(h, s, val)));
  };

  return (
    <div className="domHeader_popup_skin absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow text-black z-30 py-3 px-4" id="skin">
      <div className="nav border-b space-x-3">
        <button
          onClick={() => setCurrent(0)}
          type="button"
          className={classNames('link relative border-b border-transparent pb-0.5', { 'border-black': current === 0 })}
        >
          主题
        </button>
        <button
          onClick={() => setCurrent(1)}
          type="button"
          className={classNames('link relative border-b border-transparent pb-0.5', { 'border-black': current === 1 })}
        >
          纯色
        </button>
      </div>
      <div className="skins">
        <div className="themes mt-2.5 grid gap-2.5" style={{ display: current === 0 ? null : 'none' }}>
          {
            themes.map(([name, hex]) => (
              <button
                onClick={() => handleSelectTheme(hex)}
                key={name}
                type="button"
                className="focus:outline-none skinbtn relative theme"
                style={{ '--currentColor': hex }}
              >
                <span className="name absolute flex-center inset-x-0 bottom-0 bg-black bg-opacity-60 h-5 text-white">
                  {name}
                </span>
                {
                  (!custom && theme === hex)
                  && (
                    <DomCheck />
                  )
                }
              </button>
            ))
          }
        </div>
        <div className="colors" style={{ display: current === 1 ? null : 'none' }}>
          <div className="default mt-2.5 grid gap-2.5">
            {
              colors.map((hex) => (
                <button
                  key={hex}
                  onClick={() => handleSelectTheme(hex)}
                  type="button"
                  className="focus:outline-none skinbtn relative color"
                  style={{ '--currentColor': hex }}
                >
                  {
                    (!custom && theme === hex)
                    && (
                      <DomCheck />
                    )
                  }
                </button>
              ))
            }
          </div>
          <div className="mt-8 mb-2">自定义颜色</div>
          <div className="custom">
            <button
              type="button"
              className="focus:outline-none relative colour flex-none w-10 h-10 mr-2.5"
              onClick={() => dispatch(setCustom(true))}
            >
              {
                custom
                && (
                  <DomCheck />
                )
              }
            </button>
            <div className="ranges">
              <input
                className="rgb"
                type="range"
                min="0"
                max="359"
                step="1"
                value={h}
                onChange={(e) => handleRGB(e.target.value)}
              />
              <input
                className="hsl"
                type="range"
                min="0"
                max="50"
                step="1"
                value={l}
                onChange={(e) => handleHSL(e.target.value)}
                style={{ '--h': h }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
