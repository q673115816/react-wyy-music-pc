import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  IconSettings,
  IconTool,
  IconMail,
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
  ['#FF5C8A'],
  ['#FF7A9E'],
  ['#FE76C8'],
  ['#717FF9'],
  ['#4791EB'],
  ['#39AFEA'],
  ['#2BB669'],
  ['#6ACC19'],
  ['#E2AB12'],
  ['#FF8F57'],
  ['#FD726D'],
  ['#FD544E'],
];

const DomSkin = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(({ common }) => common);
  const [current, setCurrent] = useState(1);
  const [RGB, setRGB] = useState(0);
  const [HSL, setHSL] = useState(80);
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
                key={name}
                type="button"
                className={classnames('theme', classname)}
              >
                <span className="name">{name}</span>
                <i className="ico" />
              </button>
            ))
          }
        </div>
        <div className="colors" style={{ display: current === 1 ? null : 'none' }}>
          <div className="default">
            {
              colors.map(([stylename]) => (
                <button
                  type="button"
                  className="color"
                  style={{ '--currentColor': stylename }}
                >
                  <i className="ico" />

                </button>
              ))
            }
          </div>
          <div style={{ marginTop: '3em', marginBottom: '1em' }}>自定义颜色</div>
          <div className="custom">
            <button
              type="button"
              className="colour"
            />
            <div className="ranges">
              <div className="rgb">
                <i className="point" style={{ left: `${RGB / 259 * 100}%` }} />
                <input
                  type="range"
                  min="0"
                  max="259"
                  value={RGB}
                  onChange={(e) => setRGB(e.target.value)}
                />
              </div>
              <div className="hsl">
                <i className="point" style={{ left: `${HSL / 80 * 100}%` }} />
                <input
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
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { popupStatus, newMsgCount } = useSelector(({ common }) => common);
  const [visibility, setVisibility] = useState(true);
  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };
  return (
    <div className="domHeader_function">
      <Link to="/settings" className="hover domHeader_ico" title="设置">
        <IconSettings size={24} stroke={1} />
      </Link>
      <div className="domHeader_function_skin domHeader_ico">
        <button
          onClick={() => setVisibility(!visibility)}
          type="button"
          className="hover"
          title="换肤"
        >
          <IconTool size={24} stroke={1} />
        </button>
        {
          visibility && <DomSkin />
        }
      </div>
      <button
        type="button"
        className="hover domHeader_ico"
        onClick={handlesetPopup}
        title="私信"
      >
        <IconMail size={24} stroke={1} />
        <span className="rt_ico">{newMsgCount}</span>
      </button>
    </div>
  );
};
