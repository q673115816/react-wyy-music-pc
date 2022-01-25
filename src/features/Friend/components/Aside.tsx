import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { apiHotTopic } from "@/api";
import { Link } from "react-router-dom";
import Gender from "@/components/Gender";
import { setLoginVisibilty } from "@/modules/reducers/common/slice";
import TopicList from "./TopicList";
import React, { memo, useEffect, useState } from "react";

export default memo(function Aside() {
  const { profile } = useAppSelector(({ account }) => account);
  const dispatch = useAppDispatch();
  const [hot, setHot] = useState([]);
  const handleInitHot = async () => {
    try {
      const { hot = [] } = await apiHotTopic({
        limit: 5,
      });
      setHot(hot);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInitHot();
  }, []);
  return (
    <div className="flex-none" style={{ width: 250 }}>
      <div className="">
        {profile.userId ? (
          <div className="h-40 pt-8 bg-gray-100">
            <div className="top flex px-5 items-start">
              <Link
                to={`/user/${profile.userId}`}
                className="avatar w-12 h-12 rounded-full overflow-hidden"
              >
                <img
                  className=""
                  src={`${profile.avatarUrl}?param=100y100`}
                  alt=""
                />
              </Link>
              <div className="flex-center">
                <Link
                  to={`/user/${profile.userId}`}
                  className="nickname ml-2.5"
                >
                  {profile.nickname}
                </Link>
                &nbsp;
                <Gender gender={profile.gender} size={14} />
              </div>
            </div>
            <div className="infos flex divide-x text-center mt-4">
              <Link
                to={`/user/${profile.userId}/dynamic`}
                className="info flex-1 ui_text_black_hover"
              >
                <div className="num text-xl">{profile.eventCount}</div>
                <div className="string">动态</div>
              </Link>
              <Link
                to={`/user/${profile.userId}/follow`}
                className="info flex-1 ui_text_black_hover"
              >
                <div className="num text-xl">{profile.follows}</div>
                <div className="string">关注</div>
              </Link>
              <Link
                to={`/user/${profile.userId}/fans`}
                className="info flex-1 ui_text_black_hover"
              >
                <div className="num text-xl">{profile.followeds}</div>
                <div className="string">粉丝</div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="nologin px-5">
            <div style={{ height: 170 }} />
            <div className="tips text-center text-gray-500">
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </div>
            <button
              type="button"
              className="ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full"
              onClick={() => dispatch(setLoginVisibilty())}
            >
              立即登录
            </button>
          </div>
        )}
      </div>
      <div className="mt-5">
        <div className="flex px-5 mb-2.5">
          <span className="font-bold">热门话题</span>
          <Link className="text-gray-400 ml-auto" to="/friend/top">
            更多 &gt;
          </Link>
        </div>
        <TopicList list={hot} />
      </div>
      <div className="mt-8">
        <div className="flex px-5 mb-2.5">
          <span className="font-bold">认识的人</span>
          <Link className="text-gray-400 ml-auto" to="/friend/acquaintance">
            更多 &gt;
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex px-5 mb-2.5">
          <span className="font-bold">添加关注</span>
        </div>
      </div>
    </div>
  );
});
