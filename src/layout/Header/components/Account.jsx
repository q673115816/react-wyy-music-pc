import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconUser,
  IconCaretDown,
  IconLogout,
  IconCircleSquare,
  IconShoppingCart,
  IconMedal,
  IconBrandVimeo,
  IconCoin,
} from '@tabler/icons';
import { setLoginVisibilty, setLoginInfo } from '@/redux/actions';
import {
  apiUserAccount, apiLogout, apiDailysignin, apiUserDetail,
} from '@/api';
import { useDispatch, useSelector } from 'react-redux';

const DomProfile = () => {
  const [loading, setLoading] = useState(true);
  const { profile } = useSelector(({ account }) => account);
  const { isLogin } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      // const { profile } = await apiUserAccount();
      const { profile: accountDetail } = await apiUserDetail({
        uid: profile.userId,
      });
      dispatch(setLoginInfo({ profile: { ...profile, ...accountDetail } }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const { } = await apiLogout();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckIn = async () => {
    try {
      const { } = await apiDailysignin();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domHeader_popup_profile">
      {
        (!loading && isLogin)
          ? (
            <ul className="list">
              <li className="detail item">
                <div className="infos">
                  <Link to={`/user/${profile.userId}/dynamic`} className="info">
                    <div className="num">{profile.eventCount}</div>
                    <div className="string">动态</div>
                  </Link>
                  <Link to={`/user/${profile.userId}/follow`} className="info">
                    <div className="num">{profile.follows}</div>
                    <div className="string">关注</div>
                  </Link>
                  <Link to={`/user/${profile.userId}/fans`} className="info">
                    <div className="num">{profile.followeds}</div>
                    <div className="string">粉丝</div>
                  </Link>
                </div>
                <div className="flex-center">
                  <button
                    type="button"
                    className="ui_btn checkin"
                    onClick={handleCheckIn}
                  >
                    <IconCoin size={16} stroke={1} />
                    签到
                  </button>
                </div>
              </li>
              <li className="item">
                <button type="button" className="link">
                  <i className="ico">
                    <IconBrandVimeo size={20} stroke={1} />
                  </i>
                  会员中心
                </button>
                <a href="https://music.163.com/#/user/level" className="link">
                  <i className="ico">
                    <IconMedal size={20} stroke={1} />
                  </i>
                  等级
                </a>
                <a href="https://music.163.com/store/product" className="link">
                  <i className="ico">
                    <IconShoppingCart size={20} stroke={1} />
                  </i>
                  商城
                </a>
              </li>
              <li className="item">
                <Link to={`/user/${profile.userId}/edit`} className="link">
                  <i className="ico">
                    <IconUser size={20} stroke={1} />
                  </i>
                  个人信息设置
                </Link>
                <Link to={`/user/${profile.userId}/binding`} className="link">
                  <i className="ico">
                    <IconCircleSquare size={20} stroke={1} />
                  </i>
                  绑定社交账号
                </Link>
              </li>
              <li className="item">
                <button
                  className="link"
                  type="button"
                  onClick={handleLogout}
                >
                  <i className="ico">
                    <IconLogout size={20} stroke={1} />
                  </i>
                  退出登录
                </button>
              </li>
            </ul>
          )
          : <div>loading</div>
      }
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  const { profile } = useSelector(({ account }) => account);
  const [visibility, setVisibliity] = useState(false);
  const handleShowLogin = () => {
    dispatch(setLoginVisibilty());
  };
  return (
    <div className="domHeader_user">
      {isLogin && profile
        ? (
          <div className="domHeader_user_profile">
            <Link to={`/user/${profile.userId}`} className="avator">
              <img className="ui_containimg" src={profile.avatarUrl} alt="" />
            </Link>
            <button type="button" className="hover" onClick={() => setVisibliity(!visibility)}>
              <span>{profile.nickname}</span>
              <IconCaretDown size={12} fill="CurrentColor" />
            </button>
            {
              visibility && <DomProfile />
            }
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
      <button type="button" className="vip hover">开通VIP</button>
    </div>
  );
};
