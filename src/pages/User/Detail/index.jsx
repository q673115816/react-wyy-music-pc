import React, { useEffect, useState } from 'react';
import {
  useParams, Link, Redirect, useRouteMatch,
} from 'react-router-dom';
import { apiUserDetail, apiUserPlaylist } from '@/api';
import { setUserDetail } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { DomMale, DomFamale } from '@/components/Gender';
import { IconEdit, IconCheck, IconMail } from '@tabler/icons';
import RainbowCat from './RainbowCat';

const BuildBindings = (item) => {
  if (item.url) {
    switch (item.type) {
      case 2:
        return (
          <a href={item.url}>
            <svg viewBox="0 0 1024 1024" width="16" height="16">
              <path d="M394.574688 575.773721c-17.916969 8.356952-27.35924 26.026141-21.08999 39.47078 6.26413 13.439519 25.870511 17.561681 43.78748 9.204729 17.923113-8.356952 27.375622-26.03126 21.111491-39.47078-6.26925-13.439519-25.885869-17.561681-43.808981-9.204729z" fill="#F56467" p-id="2670" />
              <path d="M442.354296 459.421441c-97.905963 13.763067-170.017182 76.508807-161.083782 140.155566 8.950806 63.64164 95.581743 104.078967 193.493848 90.315901 97.911082-13.757947 170.022302-76.503688 161.087879-140.150447-8.950806-63.64164-95.585838-104.077943-193.497945-90.32102z m14.308798 213.136065c-58.240645 11.319052-113.094277-18.845633-122.524262-67.374726-9.441247-48.529093 30.126802-97.042827 88.362328-108.36188 58.240645-11.325196 113.093254 18.845633 122.529381 67.374726 9.414626 48.523973-30.131921 97.042827-88.367447 108.36188z" fill="#F56467" p-id="2671" />
              <path d="M458.560353 565.706881m-17.904682 0a17.904683 17.904683 0 1 0 35.809365 0 17.904683 17.904683 0 1 0-35.809365 0Z" fill="#F56467" />
              <path d="M512.270306 64.429008c-247.185371 0-447.57304 200.382549-447.57304 447.56792 0.001024 247.191515 200.387669 447.57304 447.57304 447.57304 247.180252 0 447.56792-200.382549 447.56792-447.57304 0-247.185371-200.387669-447.56792-447.56792-447.56792z m-44.758123 680.305246c-153.250036 0-277.495449-80.150767-277.495449-179.029421 0-98.871486 186.063513-254.986354 257.247092-254.986353 29.840114 0 88.421713 22.249028 47.439679 92.737389-2.864831 4.932056 92.413842-40.98101 144.493769-10.784584 52.101429 30.19745 0 78.721423 0 84.111155 0 5.394852 104.607292 5.394852 104.607292 88.923417 0 98.87763-123.042347 179.028397-276.292383 179.028397z m218.072216-366.078935c-17.258611-20.489993-48.102133-15.694114-48.102133-15.694115-9.061385 0.069624-16.3965-6.142288-17.604684-14.702993 1.213304-8.759339 8.603708-16.452813 17.551442-17.630281 0 0 37.360552-10.207113 69.710208 18.910138 32.354776 29.117251 19.120035 77.269554 19.120035 77.26853-1.397603 9.808821-10.990385 17.626186-20.928216 17.626186h-1.769274c-9.969571 0-15.776025-7.671973-13.035084-17.134721 0 0 12.300958-28.156846-4.942294-48.642744z m122.692178 61.892844c-1.24914 13.6402-13.141568 24.85584-26.69781 26.356856-13.156926-1.503064-21.946982-12.743277-20.029245-26.393716 0 0 14.6047-56.465228-20.965075-107.541748-35.592302-51.076519-112.074488-42.249604-112.074488-42.249604-13.616651-0.015358-25.154815-9.968548-26.578015-23.340489 1.411938-13.368871 12.803686-24.014206 26.648663-24.110452 0 0 79.632681-8.038524 138.946358 48.038652 59.314701 56.072056 40.750636 149.241525 40.749612 149.240501z" fill="#F56467" />
            </svg>
          </a>
        );
      default:
        return null;
    }
  }
};

export default () => {
  // const {
  //   account,
  //   user: { profile, level, playlist = [] },
  //   common: { isLogin },
  // } = useSelector((state) => state);
  const { isLogin } = useSelector(({ common }) => common);
  const {
    profile, level, playlist, identify,
    bindings,
  } = useSelector(({ user }) => user);
  const account = useSelector(({ account }) => account);
  const { url } = useRouteMatch();
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [isSelf, setIsSelf] = useState(false);
  useEffect(() => {
    if (isLogin) {
      setIsSelf(String(account.profile.userId) === uid);
    }
  }, [isLogin]);
  const dispatch = useDispatch();
  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  const handleGetUserInfo = async () => {
    try {
      const [
        {
          profile, level, identify, bindings,
        },
        { playlist }] = await Promise.all([
        apiUserDetail({ uid }),
        apiUserPlaylist({ uid }),
      ]);
      dispatch(setUserDetail({
        profile, level, playlist, identify, bindings,
      }));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, [uid]);
  if (!isLogin) {
    return (
      <div>查看个人信息请先登录</div>
    );
  }
  if (!loading) {
    return <div>loading</div>;
  }
  return (
    <div className="overflow-auto">
      <div className="domUser">

        <div className="domUser_header">
          <div className="avatar">
            <img src={`${profile?.avatarUrl}?param=200y200`} alt="" className="ui_coverimg" />
          </div>
          <div className="content">
            <div className="name">{profile.nickname}</div>
            <div className="contain">
              <div className="left flex-center">
                {
                  profile.vipType === 11
                  && (
                    <>
                      <a href="https://music.163.com/#/member">黑胶会员</a>
                      &nbsp;
                    </>
                  )
                }
                {
                  identify
                  && (
                  <span className="authentication" title={identify.imageDesc}>
                    <span className="ico">
                      <img className="ui_containimg" src={identify.imageUrl} alt="" />
                    </span>
                    {identify.imageDesc}
                  </span>
                  )
                }
                <a className="level" href="https://music.163.com/#/user/level">
                  Lv
                  {level}
                </a>
                {profile.gender === 1 && <DomMale size={10} />}
                {profile.gender === 2 && <DomFamale size={10} />}
              </div>
              <div className="right flex-center">
                {
                  isSelf
                    ? (
                      <Link to={`${url}/edit`} className="ui_btn flex-center">
                        <IconEdit size={18} stroke={1.5} />
                        &nbsp;
                        编辑个人信息
                      </Link>
                    )
                    : (
                      <>
                        <button type="button" className="ui_btn flex-center">
                          <IconMail size={20} stroke={1} />
                                &nbsp;发私信
                        </button>
                        {
                          profile.followed
                            ? (
                              <button type="button" className="ui_btn flex-center">
                                <IconCheck size={16} />
                                &nbsp;
                                已关注
                              </button>
                            )
                            : (
                              <button type="button" className="ui_btn">

                                关注
                              </button>
                            )
                        }
                      </>
                    )
                }
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: '#E5E5E5' }} />
            <div className="infos">
              <Link to={`/user/${uid}/dynamic`} className="info">
                <div className="num">{profile.eventCount}</div>
                <div className="string">动态</div>
              </Link>
              <i style={{ height: 36, width: 1, backgroundColor: '#E5E5E5' }} />
              <Link to={`/user/${uid}/follow`} className="info">
                <div className="num">{profile.follows}</div>
                <div className="string">关注</div>
              </Link>
              <i style={{ height: 36, width: 1, backgroundColor: '#E5E5E5' }} />
              <Link to={`/user/${uid}/fans`} className="info">
                <div className="num">{profile.followeds}</div>
                <div className="string">粉丝</div>
              </Link>
            </div>
            <div className="list">
              {/* <div className="item">
                <span>所在地区：</span>
                <span className="gray">浙江省 温州市</span>
              </div> */}
              <div className="item">
                <span>社交网络：</span>
                {
                  bindings.map((item) => BuildBindings(item))
                }
              </div>
              <div className="item">
                <span>个人介绍：</span>
                <span className="gray" style={{ whiteSpace: 'pre-wrap' }}>
                  {profile.signature || '暂无介绍'}

                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="domUser_main">
          <div>
            <span>
              歌单
            </span>
            <div>
              <button type="button" title="大图模式">
                <i className="material-icons">widgets</i>
              </button>
              <button type="button" title="列表模式">
                <i className="material-icons">menu</i>
              </button>
              <button type="button" title="图列模式">
                <i className="material-icons">list</i>
              </button>
            </div>
          </div>
          <div className="domUser_list ui_grid square col_4">
            <div className="item">
              <Link to={`${url}/record`}>
                <div className="cover">
                  <div className="inner">
                    <RainbowCat />
                  </div>
                  <div className="rb">
                    <span className="playArrow">
                      <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 4v16l13 -8z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              <div className="footer">
                <Link to="/" className="name">{isSelf ? '我的听歌排行' : '听歌排行'}</Link>
              </div>
            </div>
            {ownPlaylist.map((item) => (
              <div className="item" key={item.id}>
                <Link to="/">
                  <div className="cover">
                    <div className="inner">
                      <img src={`${item.coverImgUrl}?param=200y200`} className="ui_containimg" alt="" />
                    </div>
                    <div className="rb">
                      <span className="playArrow">
                        <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 4v16l13 -8z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="footer">
                  <Link to="/">
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
