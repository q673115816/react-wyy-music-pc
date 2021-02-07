import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconEar,
  IconVolume,
  IconList,
} from '@tabler/icons';
import { setVolume, setPopup } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const {
    popupStatus,
  } = useSelector(({ common }) => common);
  const { volume } = useSelector(({ setting }) => setting);
  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
  };
  const handlesetPopup = () => {
    if (popupStatus === 'playlist') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'playlist' }));
    }
  };

  return (
    <div className="domfooter_right flex items-center justify-end flex-1">
      <button type="button" className="tone">标准</button>
      <button type="button" title="打开心动模式">
        <IconEar size={28} stroke={1} />
      </button>
      <button type="button" className="volume_btn" title="静音/恢复音量">
        <IconVolume size={28} stroke={1} />
      </button>
      <input
        type="range"
        className="volume_value"
        title="音量调节"
        min="0"
        max="100"
        step="1"
        onChange={handleVolume}
        value={volume}
        style={{ '--volume': volume }}
      />
      <button type="button" onClick={handlesetPopup}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
};
