import React, { useEffect, useState, memo } from 'react';
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
import { setLoginInfo } from '@/reducers/account/actions';
import { setLoginVisibilty } from '@/reducers/common/actions';
import {
  apiUserAccount, apiLogout, apiDailysignin, apiUserDetail,
} from '@/api';
import { useDispatch, useSelector } from 'react-redux';

const DomProfile = ({ setVisibliity }) => {
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
    <div className="domHeader_popup_profile ">
      {
        (!loading && isLogin)
          ? (
            <ul className="list divide-y">
              <li className="detail item flex-auto">
                <div className="infos flex">
                  <Link
                    onClick={() => setVisibliity(false)}
                    to={`/user/${profile.userId}/dynamic`}
                    className="info flex-1 text-center"
                  >
                    <div className="num">{profile.eventCount}</div>
                    <div className="string">动态</div>
                  </Link>
                  <Link
                    onClick={() => setVisibliity(false)}
                    to={`/user/${profile.userId}/follow`}
                    className="info flex-1 text-center"
                  >
                    <div className="num">{profile.follows}</div>
                    <div className="string">关注</div>
                  </Link>
                  <Link
                    onClick={() => setVisibliity(false)}
                    to={`/user/${profile.userId}/fans`}
                    className="info flex-1 text-center"
                  >
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
                    &nbsp;
                    签到
                  </button>
                </div>
              </li>
              <li className="item">
                <button
                  onClick={() => setVisibliity(false)}
                  type="button"
                  className="link flex items-center"
                >
                  <i className="ico">
                    <IconBrandVimeo size={20} stroke={1} />
                  </i>
                  会员中心
                </button>
                <a
                  onClick={() => setVisibliity(false)}
                  href="https://music.163.com/#/user/level"
                  className="link flex items-center"
                >
                  <i className="ico">
                    <IconMedal size={20} stroke={1} />
                  </i>
                  等级
                </a>
                <a
                  onClick={() => setVisibliity(false)}
                  href="https://music.163.com/store/product"
                  className="link flex items-center"
                >
                  <i className="ico">
                    <IconShoppingCart size={20} stroke={1} />
                  </i>
                  商城
                </a>
              </li>
              <li className="item">
                <Link
                  onClick={() => setVisibliity(false)}
                  to={`/user/${profile.userId}/edit`}
                  className="link flex items-center"
                >
                  <i className="ico">
                    <IconUser size={20} stroke={1} />
                  </i>
                  个人信息设置
                </Link>
                <Link
                  onClick={() => setVisibliity(false)}
                  to={`/user/${profile.userId}/binding`}
                  className="link flex items-center"
                >
                  <i className="ico">
                    <IconCircleSquare size={20} stroke={1} />
                  </i>
                  绑定社交账号
                </Link>
              </li>
              <li className="item">
                <button
                  className="link flex items-center"
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

export default memo(() => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  const { profile } = useSelector(({ account }) => account);
  const [visibility, setVisibliity] = useState(false);
  const handleShowLogin = () => {
    dispatch(setLoginVisibilty());
  };
  return (
    <div className="domHeader_user space-x-3 mr-3">
      {isLogin && profile
        ? (
          <div className="domHeader_user_profile">
            <Link to={`/user/${profile.userId}`} className="avator z-10">
              <img className="ui_containimg" src={profile.avatarUrl} alt="" />
            </Link>
            <button
              type="button"
              className="flex z-10 text-white text-opacity-90 hover:text-opacity-100"
              onClick={() => setVisibliity(!visibility)}
            >
              <span>{profile.nickname}</span>
              <IconCaretDown size={12} className="fill-current" />
            </button>
            {
              visibility && <DomProfile setVisibliity={setVisibliity} />
            }
          </div>
        )
        : (
          <button
            type="button"
            className="domHeader_user_login z-10 text-white text-opacity-90 hover:text-opacity-100"
            onClick={handleShowLogin}
          >
            <span className="person flex-center">
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
});
