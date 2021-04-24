import React, {
  useState, useEffect, useRef, memo, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconVolume,
  IconVolume3,
} from '@tabler/icons';
import { setVolume, setBeforeMuted } from '@/reducers/volume/actions';
import { computedPositionPercentage } from '@/common/utils';
import DomHelpMask from '@/components/HelpMask';

export default memo(() => {
  const dispatch = useDispatch();
  const { volume, beforeMuted } = useSelector(({ volume }) => volume);
  const RefProgress = useRef();
  const [muted, setMuted] = useState(() => volume === 0);
  const [dragger, SetDragger] = useState(false);
  const [active, setActive] = useState(false);

  const computedPosition = (e) => {
    const percentage = computedPositionPercentage(e, RefProgress.current);
    return percentage * 100;
  };

  const handleClickSetVolume = (e) => {
    dispatch(setVolume(computedPosition(e)));
  };

  const handleMutedChange = () => {
    if (muted) {
      dispatch(setVolume(beforeMuted));
    } else {
      dispatch(setVolume(0));
      dispatch(setBeforeMuted(volume));
    }
  };

  const handleDropDown = () => {
    SetDragger(true);
  };

  const handleDropMove = (e) => {
    dispatch(setVolume(computedPosition(e)));
  };

  const handleDropUp = () => {
    SetDragger(false);
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
        onClick={handleClickSetVolume}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="volume_value w-14 h-1 bg-gray-200"
      >
        <div className="curr width-full h-full ui_theme_bg_color relative" style={{ width: `${volume}%` }}>
          {
            (dragger || active)
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
      <DomHelpMask {...{ dragger, onMouseMove: handleDropMove, onMouseUp: handleDropUp }} />
    </div>
  );
});
