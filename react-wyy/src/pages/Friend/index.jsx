import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiHotTopic } from '@/api';
import { setFriendInit } from '@/redux/actions';
import { useRouteMatch } from 'react-router';
import './style.scss';

export default () => {
  const { hot } = useSelector(({ friend }) => friend);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      const { hot } = await apiHotTopic({
        limit: 5,
      });
      dispatch(setFriendInit({
        hot,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domFriend">
      <div className="domFriend_left">
        <div className="header">
          <span className="h1">动态</span>
          <button type="button" className="ui_btn_small">
            <i className="material-icons">add</i>
            写动态
          </button>
        </div>
        <div className="content">
          <div className="empty insetCenter center">
            <span className="gray">
              暂无动态
            </span>
          </div>
        </div>
      </div>
      <div className="domFriend_split" />
      <div className="domFriend_right">
        <div className="domFriend_user">
          <div className="nologin">
            <div style={{ height: 170 }} />
            <div className="tips">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <button type="button" className="login">立即登录</button>
          </div>
        </div>
        <div className="domFriend_hotTopic">
          <div className="header">
            <span>热门话题</span>
            <Link className="gray" to={`${url}/hotTopic`}>更多 &gt;</Link>
          </div>
          <div className="list">
            {hot.map((item) => (
              <Link to="/" key={item.actId} className="item">
                <div className="cover">
                  <img className="containimg" src={`${item.sharePicUrl}?param=50y50`} alt="" />
                </div>
                <div className="content">
                  <div className="title">
                    #
                    {item.title}
                    #
                  </div>
                  <div className="participateCount">
                    <span className="gray">
                      {item.participateCount}
                      人参与
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
