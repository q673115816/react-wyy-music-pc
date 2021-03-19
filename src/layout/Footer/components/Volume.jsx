import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconVolume,
  IconVolume3,
} from '@tabler/icons';
import { setVolume, setBeforeMuted } from '@/reducers/audio/actions';
import { createPortal } from 'react-dom';
import { computedPositionPercentage } from '@/common/utils';

export default () => {
  const dispatch = useDispatch();
  const { volume, beforeMuted } = useSelector(({ audio }) => audio);
  const RefProgress = useRef();
  const RefRatio = useRef();
  const [muted, setMuted] = useState(() => volume === 0);
  const [droper, setDroper] = useState(false);
  const currentVolume = muted ? 0 : volume;
  const [beforeDropVolume, setBeforeDropVolume] = useState(0);
  const [startX, setStartX] = useState(0);
  const [active, setActive] = useState(false);
  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
    if (e.target.value === 0) {
      dispatch(setBeforeMuted(10));
    }
  };

  const handleClickSetVolume = (e) => {
    const percentage = computedPositionPercentage(e, RefProgress.current);
    dispatch(setVolume(percentage * 100));
    // console.log(percentage);
  };

  const handleMutedChange = () => {
    if (muted) {
      dispatch(setVolume(beforeMuted));
    } else {
      dispatch(setVolume(0));
      dispatch(setBeforeMuted(volume));
    }
  };

  const handleDropDown = ({ clientX }) => {
    setDroper(true);
    setBeforeDropVolume(volume);
    setStartX(clientX);
  };

  const handleDropMove = ({ clientX }) => {
    const moveX = clientX - startX;
    // console.log(moveX);
    dispatch(setVolume(beforeDropVolume + moveX * RefRatio.current));
  };

  const handleDropUp = () => {
    setDroper(false);
  };

  useEffect(() => {
    if (volume === 0) {
      setMuted(true);
    } else if (muted) {
      setMuted(false);
    }
  }, [volume]);

  useEffect(() => {
    RefRatio.current = 100 / RefProgress.current.clientWidth;
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className="volume_btn"
        title="静音/恢复音量"
        onClick={handleMutedChange}
      >
        {
          (muted || volume === 0)
            ? <IconVolume3 size={28} stroke={1} />
            : <IconVolume size={28} stroke={1} />
        }
      </button>
      <div
        title="音量调节（Ctrl + Up / Ctrl + Down）"
        ref={RefProgress}
        onClick={handleClickSetVolume}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="volume_value w-14 h-1 bg-gray-200"
      >
        <div className="curr width-full h-full ui_theme_bg_color relative" style={{ width: `${currentVolume}%` }}>
          {
            (droper || active)
          && (
          <button
            type="button"
            onMouseDown={handleDropDown}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 ui_theme_bg_color rounded-full"
          >
            { }
          </button>
          )
          }
        </div>
      </div>
      {droper && createPortal(<div
        className="fixed inset-0"
        onMouseMove={handleDropMove}
        onMouseUp={handleDropUp}
      />, document.querySelector('#help-root'))}
    </div>
  );
};
