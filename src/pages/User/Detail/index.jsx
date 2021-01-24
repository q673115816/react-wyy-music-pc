import React, { useEffect, useState } from 'react';
import {
  useParams, Link, Redirect, useRouteMatch,
} from 'react-router-dom';
import { apiUserDetail, apiUserPlaylist, apiFollow } from '@/api';
import { useSelector } from 'react-redux';
import './style.scss';
import { DomMale, DomFamale } from '@/components/Gender';
import {
  IconEdit,
  IconCheck,
  IconMail,
  IconPlus,
  IconPlayerPlay,
  IconLayoutGrid,
  IconLayoutList,
  IconList,
} from '@tabler/icons';
import classnames from 'classnames';
import { SymbolWB } from '@/components/Symbol';
import { transPlayCount } from '@/common/utils';
import RainbowCat from './RainbowCat';

const BuildBindings = (item) => {
  if (item.url) {
    switch (item.type) {
      case 2:
        return (
          <a href={item.url}>
            <SymbolWB size={16} active />
          </a>
        );
      default:
        return null;
    }
  }
  return null;
};

export default () => {
  const { isLogin } = useSelector(({ common }) => common);
  const [user, setUser] = useState({});
  const [playlist, setPlaylist] = useState([]);

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
  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  const handleGetUserInfo = async () => {
    try {
      const [
        user,
        { playlist }] = await Promise.all([
        apiUserDetail({ uid }),
        apiUserPlaylist({ uid }),
      ]);
      setUser(user);
      setPlaylist(playlist);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (id) => {
    const { followed } = user.profile;
    try {
      const { code } = await apiFollow({
        id,
        t: followed === true ? 0 : 1,
      });
      if (code === 200) {
        setUser({ ...user, profile: { ...user.profile, followed: !followed } });
      }
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
    <div className="domUserDetail">
      <div className="domUserDetail_header">
        <div className="avatar">
          <img src={`${user.profile.avatarUrl}?param=200y200`} alt="" className="ui_coverimg" />
        </div>
        <div className="content">
          <div className="name">{user.profile.nickname}</div>
          <div className="contain">
            <div className="left flex-center">
              {
                user.profile.vipType === 11
                && (
                  <>
                    <a href="https://music.163.com/#/member">黑胶会员</a>
                      &nbsp;
                  </>
                )
              }
              {
                user.identify
                && (
                  <span className="authentication" title={user.identify.imageDesc}>
                    <span className="ico">
                      <img className="ui_containimg" src={user.identify.imageUrl} alt="" />
                    </span>
                    {user.identify.imageDesc}
                  </span>
                )
              }
              <a className="level" href="https://music.163.com/#/user/level">
                Lv
                {user.level}
              </a>
              {user.profile.gender === 1 && <DomMale size={10} />}
              {user.profile.gender === 2 && <DomFamale size={10} />}
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
                        user.profile.followed
                          ? (
                            <button
                              type="button"
                              className="ui_btn flex-center"
                              onClick={() => handleFollow(user.profile.userId)}
                            >
                              <IconCheck size={16} />
                              &nbsp;
                              已关注
                            </button>
                          )
                          : (
                            <button
                              type="button"
                              className="ui_btn flex-center"
                              onClick={() => handleFollow(user.profile.userId)}
                            >
                              <IconPlus size={16} style={{ color: '#EC4141' }} />
                              &nbsp;
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
            <Link to={`${url}/dynamic`} className="info">
              <div className="num">{user.profile.eventCount}</div>
              <div className="string">动态</div>
            </Link>
            <i style={{ height: 36, width: 1, backgroundColor: '#E5E5E5' }} />
            <Link to={`${url}/follow`} className="info">
              <div className="num">{user.profile.follows}</div>
              <div className="string">关注</div>
            </Link>
            <i style={{ height: 36, width: 1, backgroundColor: '#E5E5E5' }} />
            <Link to={`${url}/fans`} className="info">
              <div className="num">{user.profile.followeds}</div>
              <div className="string">粉丝</div>
            </Link>
          </div>
          <div className="list">
            {/* <div className="item">
                <span>所在地区：</span>
                <span className="text-gray-400">浙江省 温州市</span>
              </div> */}
            <div className="item">
              <span>社交网络：</span>
              {
                user.bindings.map((item) => BuildBindings(item))
              }
            </div>
            <div className="item">
              <span>个人介绍：</span>
              <span className="text-gray-400" style={{ whiteSpace: 'pre-wrap' }}>
                {user.profile.signature || '暂无介绍'}

              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="domUserDetail_main">
        <div className="domUserDetail_headerBar">
          <span className="name">
            歌单
          </span>
          <div className="layouts">
            <button type="button" className={classnames('layout', 'on')} title="大图模式">
              <IconLayoutGrid size={16} />
            </button>
            <button type="button" className="layout" title="列表模式">
              <IconLayoutList size={16} />
            </button>
            <button type="button" className="layout" title="图列模式">
              <IconList size={16} />
            </button>
          </div>
        </div>
        <div className="domUserDetail_list ui_grid square col_4">
          <div className="item">
            <Link to={`${url}/record`}>
              <div className="cover">
                <div className="inner">
                  <RainbowCat />
                </div>
                <div className="rb">
                  <span className="playArrow">
                    <IconPlayerPlay size={22} className="fill-current" />
                  </span>
                </div>
              </div>
            </Link>
            <div className="footer">
              <Link to="/" className="name">
                {isSelf ? '我的听歌排行' : '听歌排行'}
              </Link>
            </div>
          </div>
          {ownPlaylist.map((item) => (
            <div className="item" key={item.id}>
              <Link to="/">
                <div className="cover">
                  <div className="inner">
                    <img
                      src={`${item.coverImgUrl}?param=200y200`}
                      className="ui_containimg"
                      alt=""
                    />
                  </div>
                  <div className="topmask" />
                  <div className="rb">
                    <span className="playArrow">
                      <IconPlayerPlay size={22} className="fill-current" />
                    </span>
                  </div>
                  <div className="rt">
                    <div className="whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
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
        <div className="domUserDetail_headerBar">
          <span className="name">
            歌单
          </span>
          <div className="layouts">
            <button type="button" className={classnames('layout', 'on')} title="大图模式">
              <IconLayoutGrid size={16} />
            </button>
            <button type="button" className="layout" title="列表模式">
              <IconLayoutList size={16} />
            </button>
            <button type="button" className="layout" title="图列模式">
              <IconList size={16} />
            </button>
          </div>
        </div>
        <div className="domUserDetail_list ui_grid square col_4">
          {savePlaylist.map((item) => (
            <div className="item" key={item.id}>
              <Link to="/">
                <div className="cover">
                  <div className="inner">
                    <img
                      src={`${item.coverImgUrl}?param=200y200`}
                      className="ui_containimg"
                      alt=""
                    />
                  </div>
                  <div className="topmask" />
                  <div className="rb">
                    <span className="playArrow">
                      <IconPlayerPlay size={22} className="fill-current" />
                    </span>
                  </div>
                  <div className="rt">
                    <div className="whitetext">{transPlayCount(item.playCount)}</div>
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
  );
};
