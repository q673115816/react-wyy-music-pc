import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default () => {
  const { currentSong, playlist } = useSelector(({ common }) => common);
  const [isPlay, setIsPlay] = useState(false);
  const [currentProcess, setCurrentProcess] = useState(60);
  const audio = useRef();
  const handleToggle = () => {
    if (isPlay === true) {
      audio.current.pause();
      setIsPlay(false);
    } else {
      setIsPlay(true);

      playlist.length > 0 && audio.current.play();
    }
  };
  return (
    <div className="domfooter">
      <div hidden>
        <audio
          ref={audio}
          src={currentSong.url}
          onLoadedData={({ target }) => isPlay && target.play()}
        />
      </div>
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
      <div className="domfooter_center">
        <div className="domfooter_center_Top">
          <span>
            <i className="material-icons">shuffle</i>
          </span>
          <span className="domfooter_center_prev">
            <i className="material-icons">skip_previous</i>
          </span>
          <button
            type="button"
            onClick={handleToggle}
            className="domfooter_center_play"
          >
            {isPlay
              ? <i className="material-icons">pause</i>
              : <i className="material-icons">play_arrow</i>}
          </button>
          <span className="domfooter_center_next">
            <i className="material-icons">skip_next</i>
          </span>
          <span>词</span>
        </div>
        <div className="domfooter_center_bottom">
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
          <i className="material-icons">psychology</i>
        </span>
        <button type="button" className="volume_btn" title="静音">
          <i className="material-icons">volume_mute</i>
        </button>
        <span title="音量调节" className="volume_value" />
        <button type="button">
          <i className="material-icons">list</i>
        </button>
      </div>
    </div>
  );
};
