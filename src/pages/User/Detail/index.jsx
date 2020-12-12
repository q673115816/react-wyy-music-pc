import React, { useEffect } from 'react';
import {
  useParams, Link, Redirect, useRouteMatch,
} from 'react-router-dom';
import { apiUserDetail, apiUserPlaylist } from '@/api';
import { setUserDetail } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import loadable from '@loadable/component';
import './style.scss';

const RainbowCat = loadable(() => import(/* webpackChunkName: "RainbowCat" */'./RainbowCat'));

export default () => {
  const {
    account,
    user: { profile, level, playlist },
    common: { isLogin },
  } = useSelector((state) => state);
  const { url } = useRouteMatch();
  const { uid } = useParams();
  const isSelf = isLogin ? String(account.profile.userId) === uid : false;

  const dispatch = useDispatch();
  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  const handleGetUserInfo = async () => {
    try {
      const [
        { profile, level },
        { playlist }] = await Promise.all([
        apiUserDetail(uid),
        apiUserPlaylist(uid),
      ]);
      dispatch(setUserDetail({ profile, level, playlist }));
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
  return (
    <div className="overflow-auto">
      <div className="domUser">

        <div className="domUser_header">
          <div className="avatar">
            <img src={`${profile.avatarUrl}?param=200y200`} alt="" className="containimg" />
          </div>
          <div className="content">
            <div className="name">{profile.nickname}</div>
            <div>
              <span>{level}</span>
              <span>{profile.gender}</span>
            </div>
            <div>

              <button type="button">编辑个人信息</button>
              <button type="button">发私信</button>
              <button type="button">关注</button>
            </div>
            <br />
            <div>
              <div>
                <div>27</div>
                <div>动态</div>
              </div>
              <div>
                <div>27</div>
                <div>关注</div>
              </div>
              <div>
                <div>27</div>
                <div>粉丝</div>
              </div>
            </div>
            <ul>
              <li>
                <span>所在地区：</span>
                <span>浙江省 温州市</span>
              </li>
              <li>
                <span>社交网络：</span>
                <span>xixi</span>
              </li>
              <li>
                <span>个人介绍：</span>
                <span>66</span>
              </li>
            </ul>
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
                      <i className="material-icons">play_arrow</i>
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
                      <img src={`${item.coverImgUrl}?param=200y200`} className="containimg" alt="" />
                    </div>
                    <div className="rb">
                      <span className="playArrow">
                        <i className="material-icons">play_arrow</i>
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
