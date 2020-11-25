import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AiOutlineMinus, AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { VscChromeMaximize } from "react-icons/vsc";
import { CgMiniPlayer } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiNeteaseCloudMusicFill, RiTShirtLine } from "react-icons/ri";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardVoice
} from "react-icons/md";

import { dialogloginvisibilty, getcountriescodelist } from "@/redux/actions";
import { countries_code_list } from '@/api'
export default ({ mousedown }) => {
  const dispatch = useDispatch();

  const handleShowLogin = (e) => {
    console.log('123')
    dispatch(dialogloginvisibilty());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await countries_code_list()
      dispatch(getcountriescodelist(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetCountriesCodeList()
  }, [])

  return (
    <div className="domheader" onMouseDown={() => ''}>
      <Link to="/" className="domheader_logo">
        <RiNeteaseCloudMusicFill size="32" />
        首页
      </Link>
      <div>
        <Link to="/" className="domheader_page_prev">
          <MdKeyboardArrowLeft />
        </Link>
        <Link to="/" className="domheader_page_next">
          <MdKeyboardArrowRight />
        </Link>
      </div>
      <form style={{ position: "relative" }}>
        <AiOutlineSearch size="20" className="domheader_search_ico" />
        <input type="text" placeholder="搜索" className="domheader_search" />
      </form>
      <Link to="/" className="domheader_voice">
        <MdKeyboardVoice />
      </Link>
      <div className="domheader_user">
        <span className="_handle" onClick={handleShowLogin}>
          未登录
        </span>
        <span className="_handle">开通VIP</span>
        <span className="_handle domheader_ico" title="设置">
          <FiSettings />
        </span>
        <span className="_handle domheader_ico" title="换肤">
          <RiTShirtLine />
        </span>
        <span className="_handle domheader_ico" title="私信">
          <AiOutlineMail />
        </span>
      </div>
      <span className="domheader_spilt"></span>
      <div className="domheader_control">
        <span className="_handle domheader_ico" title="mini模式">
          <CgMiniPlayer />
        </span>
        <span className="_handle domheader_ico" title="最小化">
          <AiOutlineMinus />
        </span>
        <span className="_handle domheader_ico" title="最大化">
          <VscChromeMaximize />
        </span>
        <span className="_handle domheader_ico" title="关闭">
          ×
        </span>
      </div>
    </div>
  );
};
