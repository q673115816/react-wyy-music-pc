import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { dialogLoginVisibilty, setContriesCodeList } from '@/redux/actions';
import { apiCountriesCodeList } from '@/api';

export default ({ mousedown }) => {
  const { goBack, goForward } = useHistory();
  const dispatch = useDispatch();

  const handleShowLogin = () => {
    dispatch(dialogLoginVisibilty());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCountriesCodeList();
  }, []);

  return (
    <div className="domheader" onMouseDown={() => ''}>
      <Link to="/" className="domheader_logo">
        首页
      </Link>
      <div>
        <span onClick={() => goBack()} className="domheader_page_prev">
          <i className="material-icons">arrow_back_ios</i>
        </span>
        <span onClick={() => goForward()} className="domheader_page_next">
          <i className="material-icons">arrow_forward_ios</i>
        </span>
      </div>
      <form style={{ position: 'relative' }}>
        <input type="text" placeholder="搜索" className="domheader_search" />
      </form>
      <Link to="/" className="domheader_voice">
        <i className="material-icons">mic</i>
      </Link>
      <div className="domheader_user">
        <span className="_handle" onClick={handleShowLogin}>
          未登录
        </span>
        <span className="_handle">开通VIP</span>
        <Link to="/settings" className="_handle domheader_ico" title="设置">
          <i className="material-icons">settings</i>
        </Link>
        <span className="_handle domheader_ico" title="换肤">
          <i className="material-icons">palette</i>
        </span>
        <span className="_handle domheader_ico" title="私信">
          <i className="material-icons">mail_outline</i>
        </span>
      </div>
      <span className="domheader_spilt" />
      <div className="domheader_control">
        <span className="_handle domheader_ico" title="mini模式">
          <i className="material-icons">close_fullscreen</i>
        </span>
        <span className="_handle domheader_ico" title="最小化">
          <i className="material-icons">remove</i>
        </span>
        <span className="_handle domheader_ico" title="最大化">
          <i className="material-icons">crop_square</i>
        </span>
        <span className="_handle domheader_ico" title="关闭">
          <i className="material-icons">close</i>
        </span>
      </div>
    </div>
  );
};
