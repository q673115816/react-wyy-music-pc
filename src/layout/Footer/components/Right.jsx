import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconEar,
  IconVolume,
  IconVolume3,
  IconList,
} from '@tabler/icons';
import { setPopupPlaylistToggle } from '@/reducers/mask/actions';
import classNames from 'classnames';
import DomVolume from './Volume';

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

  const { currentSong } = useSelector(({ audio }) => audio);

  const handleVisibilityChange = () => {
    // setVisibility(!visibility);
  };

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
        <div className="toneQuality absolute w-32 left-1/2 bottom-full transform -translate-x-1/2 -translate-y-4 bg-white flex flex-col whitespace-nowrap rounded-lg z-50">
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
      <DomVolume />
      <button type="button" onClick={() => dispatch(setPopupPlaylistToggle())}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
};
