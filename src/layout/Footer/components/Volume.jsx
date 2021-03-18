import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconVolume,
  IconVolume3,
} from '@tabler/icons';
import { setVolume, setBeforeMuted } from '@/reducers/audio/actions';

export default () => {
  const dispatch = useDispatch();
  const { volume, beforeMuted } = useSelector(({ audio }) => audio);
  const RefProgress = useRef();
  const [muted, setMuted] = useState(() => volume === 0);
  const currentVolume = muted ? 0 : volume;

  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
    if (e.target.value === 0) {
      dispatch(setBeforeMuted(10));
    }
  };

  const handleSetVolume = () => {

  };

  const handleMutedChange = () => {
    if (muted) {
      dispatch(setVolume(beforeMuted));
    } else {
      dispatch(setVolume(0));
      dispatch(setBeforeMuted(volume));
    }
  };

  useEffect(() => {
    if (volume === 0) {
      setMuted(true);
    } else if (muted) {
      setMuted(false);
    }
  }, [volume]);

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
        onClick={handleSetVolume}
        className="volume_value w-14 h-1 group bg-gray-200"
      >
        <div className="curr width-full h-full ui_theme_bg_color relative" style={{ width: `${currentVolume}%` }}>
          <button type="button" className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 ui_theme_bg_color rounded-full opacity-0 group-hover:opacity-100">{ }</button>
        </div>
      </div>
    </div>
  );
};
