import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext, BiVolumeLow } from "react-icons/bi";
import { BsPlayFill, BsPause } from "react-icons/bs";
export default () => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentProcess, setCurrentProcess] = useState(60);
  return (
    <div className="domfooter">
      <div className="domfooter_left">
        <Link to="/" className="domfooter_left_img">
          <img src="" alt="" />
        </Link>
        <div className="domfooter_left_info">
          <span className="domfooter_left_info_name">
            <Link to="/">name</Link>
            <Link to="/">
              <AiOutlineHeart className="domfooter_left_like" />
            </Link>
          </span>
          <Link to="/" className="domfooter_left_info_singer">
            singer
          </Link>
        </div>
      </div>
      <div className="domfooter_center">
        <div className="domfooter_center_Top">
          <span>
            <FaRandom />
          </span>
          <span className="domfooter_center_prev">
            <BiSkipPrevious />
          </span>
          <span className="domfooter_center_play">
            {isPlay ? <BsPause /> : <BsPlayFill />}
          </span>
          <span className="domfooter_center_next">
            <BiSkipNext />
          </span>
          <span>词</span>
        </div>
        <div className="domfooter_center_bottom">
          <span>00:00</span>
          <span className="domfooter_center_range">
            <span
              className="domfooter_center_process"
              style={{ width: (currentProcess / 180) * 100 + "%" }}
            ></span>
          </span>
          <span>00:00</span>
        </div>
      </div>
      <div className="domfooter_right">
        <span>口</span>
        <span>口</span>
        <span>
          <BiVolumeLow />
          <span></span>
        </span>
        <span>
          <AiOutlineMenuUnfold />
        </span>
      </div>
    </div>
  );
};
