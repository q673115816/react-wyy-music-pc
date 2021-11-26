import React, { useState, memo, MouseEventHandler, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconUser, IconCaretDown } from "@tabler/icons";
import { setLoginVisibilty } from "@/reducers/common/slice";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import Profile from "./Profile";
const Account = () => {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(({ common }) => common);
  const { profile } = useAppSelector(({ account }) => account);
  const [visibility, setVisibility] = useState(false);

  const handleHide: MouseEventHandler = useCallback(
    () => setVisibility(false),
    []
  );
  const handleShowLogin = () => {
    dispatch(setLoginVisibilty());
  };
  return (
    <div className="ml-auto flex relative items-center space-x-2 mr-2 h-full">
      {isLogin && profile ? (
        <div className="flex items-center space-x-2">
          <Link to={`/user/${profile.userId}`} className="w-7 h-7 z-10">
            <img
              className="ui_containimg rounded-full"
              src={profile.avatarUrl}
              alt=""
            />
          </Link>
          <button
            type="button"
            className="flex items-center z-10 text-white text-opacity-90 hover:text-opacity-100"
            onClick={() => setVisibility(!visibility)}
          >
            <span>{profile.nickname}</span>
            <IconCaretDown size={12} className="fill-current" />
          </button>
          {visibility && <Profile handleHide={handleHide} />}
        </div>
      ) : (
        <button
          type="button"
          className="flex items-center z-10 text-white text-opacity-90 hover:text-opacity-100"
          onClick={handleShowLogin}
        >
          <span className="w-7 h-7 rounded-full flex-center mr-2 bg-gray-300">
            <IconUser size={24} stroke={1.5} />
          </span>
          <span>未登录</span>
          <IconCaretDown size={12} fill="CurrentColor" />
        </button>
      )}
      <button
        type="button"
        className="vip text-white text-opacity-90 hover:text-opacity-100 z-10"
      >
        开通VIP
      </button>
    </div>
  );
};

export default memo(Account);
