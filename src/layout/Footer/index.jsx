import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const { currentSong, playlist, popupStatus } = useSelector(({ common }) => common);
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
            <svg className="icon icon-tabler icon-tabler-arrows-split-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="current" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897" />
              <path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9" />
              <path d="M18 10l3 -3l-3 -3" />
              <path d="M18 20l3 -3l-3 -3" />
            </svg>
          </button>
          <button type="button" className="domfooter_center_prev flex-center">
            <svg className="icon icon-tabler icon-tabler-player-skip-back" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 5v14l-12 -7z" fill="currentColor" />
              <line x1="4" y1="5" x2="4" y2="19" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleToggle}
            className="domfooter_center_play flex-center"
          >
            {isPlay
              ? <i className="ti-parse" />
              : (
                <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="#000" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4v16l13 -8z" fill="currentColor" />
                </svg>
              )}
          </button>
          <button type="button" className="domfooter_center_next flex-center">
            <svg className="icon icon-tabler icon-tabler-player-skip-forward" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="current" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5v14l12 -7z" fill="currentColor" />
              <line x1="20" y1="5" x2="20" y2="19" />
            </svg>
          </button>
          <button type="button">词</button>
        </div>
        <div className="domfooter_center_bottom flex-center">
          <span>00:00</span>
          <span className="domfooter_center_range">
            <span
              className="domfooter_center_process"
              style={{ width: `${(currentProcess / 180) * 100}%` }}
            />
          </span>
          <span>00:00</span>
        </div>
      </div>
      <div className="domfooter_right">
        <span>标准</span>
        <span title="打开心动模式">
          <svg className="icon icon-tabler icon-tabler-ear" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
            <path d="M10 10a3 3 0 1 1 5 2.2" />
          </svg>
        </span>
        <button type="button" className="volume_btn" title="静音">
          <svg className="icon icon-tabler icon-tabler-volume-3" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            <path d="M16 10l4 4m0 -4l-4 4" />
          </svg>
        </button>
        <span title="音量调节" className="volume_value" />
        <button type="button" onClick={handlesetPopup}>
          <svg className="icon icon-tabler icon-tabler-list" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="9" y1="6" x2="20" y2="6" />
            <line x1="9" y1="12" x2="20" y2="12" />
            <line x1="9" y1="18" x2="20" y2="18" />
            <line x1="5" y1="6" x2="5" y2="6.01" />
            <line x1="5" y1="12" x2="5" y2="12.01" />
            <line x1="5" y1="18" x2="5" y2="18.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};
