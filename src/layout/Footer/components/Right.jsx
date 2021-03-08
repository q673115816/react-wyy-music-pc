import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconEar,
  IconVolume,
  IconVolume3,
  IconList,
} from '@tabler/icons';
import { setVolume, setBeforeMuted } from '@/reducers/audio/actions';
import { setPopup } from '@/reducers/common/actions';
import classNames from 'classnames';

const rotes = {
  128000: '标准音质',
  192000: '较高音质',
  320000: '极高音质',
  999000: '无损音质',
};

export default () => {
  const dispatch = useDispatch();
  const [toneQuality, settoneQuality] = useState('normal');
  const [visibility, setVisibility] = useState(false);
  const {
    popupStatus,
  } = useSelector(({ common }) => common);
  const { volume, currentSong, beforeMuted } = useSelector(({ audio }) => audio);
  const [muted, setMuted] = useState(() => volume === '0');
  const currentVolume = muted ? 0 : volume;

  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
    if (e.target.value === '0') {
      dispatch(setBeforeMuted('10'));
    }
  };
  const handlesetPopup = () => {
    if (popupStatus === 'playlist') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'playlist' }));
    }
  };

  const handleVisibilityChange = () => {
    setVisibility(!visibility);
  };

  const handleMutedChange = () => {
    if (muted) {
      dispatch(setVolume(beforeMuted));
    } else {
      dispatch(setVolume('0'));
      dispatch(setBeforeMuted(volume));
    }
  };

  useEffect(() => {
    if (volume === '0') {
      setMuted(true);
    } else if (muted) {
      setMuted(false);
    }
  }, [volume]);

  return (
    <div className="domfooter_right flex items-center justify-end flex-1 space-x-3">
      <div className="relative">
        <button
          type="button"
          onClick={handleVisibilityChange}
          className="tone border border-current px-1 rounded-sm text-gray-500"
        >
          标准
        </button>
        {
          visibility
        && (
        <div className="toneQuality absolute w-32 left-1/2 bottom-full transform -translate-x-1/2 -translate-y-4 bg-white flex flex-col whitespace-nowrap rounded-lg">
          {
            currentSong
              ?.privilege
              ?.chargeInfoList
              .map(({ rate }) => (
                <button
                  type="button"
                  className={classNames('py-1 ui_text_gray_hover')}
                  key={rate}
                >
                  {rotes[rate]}
                </button>
              ))
          }
        </div>
        )
        }
      </div>
      <button type="button" title="打开音效">
        <IconEar size={28} stroke={1} />
      </button>
      <button
        type="button"
        className="volume_btn"
        title="静音/恢复音量"
        onClick={handleMutedChange}
      >
        {
          (muted || volume === '0')
            ? <IconVolume3 size={28} stroke={1} />
            : <IconVolume size={28} stroke={1} />
        }
      </button>
      <input
        type="range"
        className="volume_value"
        title="音量调节"
        min="0"
        max="100"
        step="1"
        onChange={handleVolume}
        value={currentVolume}
        style={{ '--volume': currentVolume }}
      />
      <button type="button" onClick={handlesetPopup}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
};
