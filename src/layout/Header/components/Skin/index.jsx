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

const RGBToHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};

const hexToRGB = (hex) => {
  // let alpha = false;
  let h = hex.slice(hex.startsWith('#') ? 1 : 0);
  // if (h.length === 3) h = [...h].map((x) => x + x).join('');
  // else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return [
    h >>> 16,
    (h & 0x00ff00) >>> 8,
    (h & 0x0000ff) >>> 0,
  ];
  return (
    `rgb${alpha ? 'a' : ''
    }(${h >>> (alpha ? 24 : 16)
    }, ${(h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)
    }, ${(h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)
    }${alpha ? `, ${h & 0x000000ff}` : ''
    })`
  );
};

const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + (b >> 0)).toString(16).padStart(6, '0');

const HexToHSL = (hex) => RGBToHSL(...hexToRGB(hex));

const themes = [
  ['酷炫黑', '000000'],
  ['官方红', 'EC4141'],
  ['可爱粉', 'ffc0cb'],
  ['天际蓝', '87ceeb'],
  ['清新绿', '008000'],
  ['土豪金', 'ffd700'],
];

const colors = [
  'ff69b4',
  'ffb6c1',
  'add8e6',
  'f08080',
  'e0ffff',
  'd3d3d3',
  '90ee90',
  'ffa07a',
  '20b2aa',
  '87cefa',
  '778899',
  'b0c4de',
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
  const [[h, s, l], setHSL] = useState(() => RGBToHSL(...hexToRGB(theme)));

  // const memoHSL = useMemo(() => RGBToHSL(...hexToRGB(theme)), [theme]);
  useEffect(() => {
    setHSL(RGBToHSL(...hexToRGB(theme)));
  }, [theme]);
  const handleSelectTheme = (theme) => {
    if (custom) dispatch(setCustom(false));
    dispatch(setTheme(theme));
  };

  const handleRGB = (val) => {
    if (!custom) dispatch(setCustom(true));
    const rgb = HSLToRGB(val, s, l);
    const theme = RGBToHex(...rgb);
    dispatch(setTheme(theme));
  };

  const handleHSL = (val) => {
    if (!custom) dispatch(setCustom(true));
    const rgb = HSLToRGB(h, s, val);
    const theme = RGBToHex(...rgb);
    dispatch(setTheme(theme));
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
                style={{ '--currentColor': `#${hex}` }}
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
                  style={{ '--currentColor': `#${hex}` }}
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
                max="100"
                step="1"
                value={l}
                onChange={(e) => handleHSL(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
