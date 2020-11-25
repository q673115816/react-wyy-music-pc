import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
        首页
      </Link>
      <div>
        <Link to="/" className="domheader_page_prev">
        </Link>
        <Link to="/" className="domheader_page_next">
        </Link>
      </div>
      <form style={{ position: "relative" }}>
        <input type="text" placeholder="搜索" className="domheader_search" />
      </form>
      <Link to="/" className="domheader_voice">
      </Link>
      <div className="domheader_user">
        <span className="_handle" onClick={handleShowLogin}>
          未登录
        </span>
        <span className="_handle">开通VIP</span>
        <span className="_handle domheader_ico" title="设置">
        </span>
        <span className="_handle domheader_ico" title="换肤">
        </span>
        <span className="_handle domheader_ico" title="私信">
        </span>
      </div>
      <span className="domheader_spilt"></span>
      <div className="domheader_control">
        <span className="_handle domheader_ico" title="mini模式">
        </span>
        <span className="_handle domheader_ico" title="最小化">
        </span>
        <span className="_handle domheader_ico" title="最大化">
        </span>
        <span className="_handle domheader_ico" title="关闭">
          ×
        </span>
      </div>
    </div>
  );
};
