import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconUser,
  IconCaretDown,
} from '@tabler/icons';
import { dialogLoginVisibilty } from '@/redux/actions';
import { useDispatch } from 'react-redux';

export default ({ isLogin, profile = {} }) => {
  const dispatch = useDispatch();
  const handleShowLogin = () => {
    dispatch(dialogLoginVisibilty());
  };
  return (
    <div className="domHeader_user">
      {isLogin && profile
        ? (
          <div className="domHeader_user_profile">
            <Link to={`/user/${profile.userId}`} className="avator">
              <img className="ui_containimg" src={profile.avatarUrl} alt="" />
            </Link>
            <button type="button" className=" ">
              <span>{profile.nickname}</span>
              <i className="ti ti-caret-down-fill" />
            </button>
          </div>
        )
        : (
          <button
            type="button"
            className="domHeader_user_login"
            onClick={handleShowLogin}
          >
            <span className="person flex-center">
              <IconUser size={24} stroke={1} />
            </span>
            <span>未登录</span>
            <IconCaretDown size={12} fill="CurrentColor" />
          </button>
        )}
      <button type="button" className="">开通VIP</button>
    </div>
  );
};
