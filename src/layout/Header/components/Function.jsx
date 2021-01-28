import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  IconSettings,
  IconTool,
  IconMail,
  IconCheck,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup, setTheme } from '@/redux/actions';

const themes = [
  ['酷炫黑', 'themeBlack'],
  ['官方红', 'themeRed'],
  ['可爱粉', 'themePink'],
  ['天际蓝', 'themeBlue'],
  ['清新绿', 'themeGreen'],
  ['土豪金', 'themeGold'],
];

const colors = [
  ['hotpink'],
  ['lightpink'],
  ['lightblue'],
  ['lightcoral'],
  ['lightcyan'],
  ['lightgray'],
  ['lightgreen'],
  ['lightsalmon'],
  ['lightseagreen'],
  ['lightskyblue'],
  ['lightslategray'],
  ['lightsteelblue'],
];

const DomSkin = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(({ common }) => common);
  const [current, setCurrent] = useState(0);
  const [RGB, setRGB] = useState(0);
  const [HSL, setHSL] = useState(80);

  const handleSelectTheme = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="domHeader_popup_skin">
      <div className="nav">
        <button
          onClick={() => setCurrent(0)}
          type="button"
          className={classnames('link', { on: current === 0 })}
        >
          主题
        </button>
        <button
          onClick={() => setCurrent(1)}
          type="button"
          className={classnames('link', { on: current === 1 })}
        >
          纯色
        </button>
      </div>
      <div className="skins">
        <div className="themes" style={{ display: current === 0 ? null : 'none' }}>
          {
            themes.map(([name, classname, stylename]) => (
              <button
                onClick={() => handleSelectTheme(classname)}
                key={name}
                type="button"
                className={classnames('skinbtn theme', classname)}
              >
                <span className="name">{name}</span>
                {
                  theme === classname
                  && <i className="ico"><IconCheck size={16} stroke={2} /></i>
                }
              </button>
            ))
          }
        </div>
        <div className="colors" style={{ display: current === 1 ? null : 'none' }}>
          <div className="default">
            {
              colors.map(([stylename]) => (
                <button
                  key={stylename}
                  onClick={() => handleSelectTheme(stylename)}
                  type="button"
                  className="skinbtn color"
                  style={{ '--currentColor': stylename }}
                >
                  {
                    theme === stylename
                    && <i className="ico"><IconCheck size={16} stroke={2} /></i>
                  }
                </button>
              ))
            }
          </div>
          <div style={{ marginTop: '3em', marginBottom: '1em' }}>自定义颜色</div>
          <div className="custom">
            <button
              type="button"
              className="colour"
            >
              {
                /custom/.test(theme)
                && <i className="ico"><IconCheck size={16} stroke={2} /></i>
              }
            </button>
            <div className="ranges">
              <input
                className="rgb"
                type="range"
                min="0"
                max="259"
                value={RGB}
                onChange={(e) => setRGB(e.target.value)}
                style={{ backgroundImage: 'linear-gradient(to right, hsl(0, 100%, 0) 0, hsl(0, 100%, 50%) 100%)' }}
              />
              <input
                className="hsl"
                type="range"
                min="0"
                max="80"
                value={HSL}
                onChange={(e) => setHSL(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { popupStatus, newMsgCount } = useSelector(({ common }) => common);
  const [visibility, setVisibility] = useState(false);
  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };
  return (
    <div className="domHeader_function space-x-3">
      <Link
        to="/settings"
        className="relative text-white text-opacity-90 hover:text-opacity-100 "
        title="设置"
      >
        <IconSettings size={24} />
      </Link>
      <div className="domHeader_function_skin ">
        <button
          onClick={() => setVisibility(!visibility)}
          type="button"
          className="relative text-white text-opacity-90 hover:text-opacity-100"
          title="换肤"
        >
          <IconTool size={24} />
        </button>
        {
          visibility && <DomSkin />
        }
      </div>
      <button
        type="button"
        className="text-white text-opacity-90 hover:text-opacity-100 relative"
        onClick={handlesetPopup}
        title="私信"
      >
        <IconMail size={24} />
        <span className="absolute -right-3 -top-0.5 bg-white ui_themeColor rounded-full px-1">{newMsgCount}</span>
      </button>
    </div>
  );
};
