import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { Link } from "react-router-dom";
import Gender from "@/components/Gender";
import { toggleLoginVisibility } from "@/modules/reducers/mask/slice";
import TopicList from "./TopicList";
import React, { memo } from "react";
import { accountSelector } from "@/modules/reducers/account/slice";

const Aside = () => {
  const { profile } = useAppSelector(accountSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="flex-none" style={{ width: 250 }}>
      <div className="">
        {profile.userId ? (
          <div className="py-8 bg-gray-100">
            <div className="top flex gap-2 px-5 items-start">
              <Link
                to={`/user/${profile.userId}`}
                className="avatar w-12 h-12 rounded-full overflow-hidden flex-none"
              >
                <img
                  className=""
                  src={`${profile.avatarUrl}?param=100y100`}
                  alt=""
                />
              </Link>
              <div className={`flex-1 w-0`}>
                <div className="">
                  <Link to={`/user/${profile.userId}`}>{profile.nickname}</Link>
                  &nbsp;
                  <Gender gender={profile.gender} size={14} />
                </div>
                <div className={`break-all text-gray-500 truncate`}>
                  {profile.signature}
                </div>
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
              onClick={() => dispatch(toggleLoginVisibility())}
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
        <TopicList limit={5} />
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
};

export default memo(Aside);
