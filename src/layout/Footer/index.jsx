import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconEar,
  IconVolume, IconList,
} from '@tabler/icons';
import { setPopup, setVolume } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const {
    currentSong, playlist, popupStatus,
  } = useSelector(({ common }) => common);
  const { volume } = useSelector(({ setting }) => setting);

  const [isPlay, setIsPlay] = useState(false);
  const [currentProcess, setCurrentProcess] = useState(60);
  const audio = useRef();
  const handleToggle = () => {
    setIsPlay(!isPlay);
  };

  const handlesetPopup = () => {
    if (popupStatus === 'playlist') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'playlist' }));
    }
  };

  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value));
  };

  const handleProcess = (e) => {

  };

  useEffect(() => {
    if (isPlay) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  }, [isPlay]);
  return (
    <div className="domfooter">
      <div hidden>
        <audio
          ref={audio}
          src={currentSong.url}
          onLoadedData={({ target }) => isPlay && target.play()}
          volume={volume * 0.01}
        />
      </div>
      {

      }
      <div className="domfooter_left">
        <Link to="/" className="domfooter_left_img">
          <img src="" alt="" />
        </Link>
        <div className="domfooter_left_info">
          <span className="domfooter_left_info_name">
            <Link to="/">name</Link>
            <Link to="/" />
          </span>
          <Link to="/" className="domfooter_left_info_singer">
            singer
          </Link>
        </div>
      </div>
      <div className="domfooter_center flex-center">
        <div className="domfooter_center_Top flex-center">
          <button type="button">
            <IconArrowsSplit2 size={22} />
          </button>
          <button type="button" className="domfooter_center_prev flex-center">
            <IconPlayerSkipBack size={20} className="fill-current" />
          </button>
          <button
            type="button"
            onClick={handleToggle}
            className="domfooter_center_play flex-center"
          >
            {isPlay
              ? <i className="ti-parse" />
              : (
                <IconPlayerPlay size={24} fill="#2C2C2D" stroke="0" />
              )}
          </button>
          <button type="button" className="domfooter_center_next flex-center">
            <IconPlayerSkipForward size={20} className="fill-current" />
          </button>
          <button type="button">词</button>
        </div>
        <div className="domfooter_center_bottom flex-center">
          <span>00:00</span>
          <input
            onChange={() => handleProcess()}
            type="range"
            value="0"
            className="domfooter_center_process"
          />
          <span>00:00</span>
        </div>
      </div>
      <div className="domfooter_right">
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
    </div>
  );
};
