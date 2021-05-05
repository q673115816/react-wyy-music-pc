import React, {
  memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiHotTopic, apiEvent, apiCommentEvent } from '@/api';

import { IconPlus } from '@tabler/icons';

import { setLoginVisibilty } from '@/reducers/common/actions';
import './style.scss';

import DomGender from '@/components/Gender';
import useInfinite from '@/custom/useInfinite';
import DomLoading from '@/components/Loading';
import DomDynamic from '@/components/Dynamic';
import DomTopicList from './components/TopicList';

const getArticleFromJson = (json) => {
  const obj = JSON.parse(json);
  return (
    <>
      <div className="song">
        <div className="cover">
          <img src={obj.img80x80} alt="" />
        </div>
        <div className="">
          {obj.song.name}
        </div>
      </div>
    </>
  );
};

export default memo(() => {
  console.log('friend');
  const { profile } = useSelector(({ account }) => account);
  // const [hot, setHot] = useState([]);
  const [event, setEvent] = useState([]);
  const [hot, setHot] = useState([]);
  // const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const DomScroll = useRef();
  const DomObserver = useRef();
  const refLasttime = useRef(-1);
  const handleInitHot = async () => {
    try {
      const { hot } = await apiHotTopic({
        limit: 5,
      });
      setHot(hot);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInitEvent = async () => {
    try {
      const { event, lasttime } = await apiEvent({
        lasttime: refLasttime.current,
      });
      refLasttime.current = lasttime;
      // dispatch(setFriendEventAdd({ event }));
      setEvent((prev) => [...prev, ...event]);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleInit = async () => {
  //   await handleInitHot()
  //   await handleInitEvent()
  // };

  useEffect(() => {
    setEvent([]);
    handleInitHot();
  }, []);
  useInfinite(handleInitEvent, DomScroll, DomObserver);

  return (
    <div className="domFriend h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x">
        <div className="domFriend_left relative flex-auto">
          <div className="domFriend_header h-14 px-8 flex items-center sticky top-0 z-10 bg-white">
            <span className="h1">动态</span>
            <button type="button" className="flex ml-auto items-center ui_theme_bg_color text-white h-6 px-3 rounded-full">
              <IconPlus size={12} stroke={5} />
              写动态
            </button>
          </div>
          <div className="domFriend_content">
            <div className="px-8">
              <DomDynamic list={event} />
            </div>
            <div className="flex-center" ref={DomObserver}>
              {event.length === 0
                ? (
                  <div className="empty text-center text-gray-400 pt-48">
                    暂无动态
                  </div>
                )
                : <DomLoading />}
            </div>
          </div>
        </div>
        <div className="domFriend_right flex-none" style={{ width: 250 }}>
          <div className="domFriend_user">
            {
              profile.userId
                ? (
                  <div className="logined h-40 pt-8 bg-gray-100">
                    <div className="top flex px-5 items-start">
                      <Link to={`/user/${profile.userId}`} className="avatar w-12 h-12 rounded-full overflow-hidden">
                        <img
                          className=""
                          src={`${profile.avatarUrl}?param=100y100`}
                          alt=""
                        />
                      </Link>
                      <div className="flex-center">
                        <Link to={`/user/${profile.userId}`} className="nickname ml-2.5">
                          {profile.nickname}
                        </Link>
                        &nbsp;
                        <DomGender gender={profile.gender} size={14} />
                      </div>
                    </div>
                    <div className="infos flex divide-x text-center mt-4">
                      <Link to={`/user/${profile.userId}/dynamic`} className="info flex-1 ui_text_black_hover">
                        <div className="num text-xl">{profile.eventCount}</div>
                        <div className="string">动态</div>
                      </Link>
                      <Link to={`/user/${profile.userId}/follow`} className="info flex-1 ui_text_black_hover">
                        <div className="num text-xl">{profile.follows}</div>
                        <div className="string">关注</div>
                      </Link>
                      <Link to={`/user/${profile.userId}/fans`} className="info flex-1 ui_text_black_hover">
                        <div className="num text-xl">{profile.followeds}</div>
                        <div className="string">粉丝</div>
                      </Link>
                    </div>
                  </div>
                )
                : (
                  <div className="nologin px-5">
                    <div style={{ height: 170 }} />
                    <div className="tips text-center text-gray-500">
                      登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                    </div>
                    <button
                      type="button"
                      className="login ui_theme_bg_color text-white w-full h-10 mt-4"
                      onClick={() => dispatch(setLoginVisibilty(true))}
                    >
                      立即登录
                    </button>
                  </div>
                )
            }
          </div>
          <div className="domFriend_hotTopic mt-5">
            <div className="header flex px-5 mb-2.5">
              <span className="font-bold">热门话题</span>
              <Link className="text-gray-400 ml-auto" to="/friend/hotTopic">更多 &gt;</Link>
            </div>
            <DomTopicList list={hot} />
          </div>
        </div>
      </div>
    </div>
  );
});
