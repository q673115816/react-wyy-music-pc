import React, { memo, useContext, useMemo } from "react";
import Gender from "@/components/Gender";
import { Link, useParams } from "react-router-dom";
import { IconCheck, IconEdit, IconMail, IconPlus } from "@tabler/icons";
import { SymbolWB } from "@/components/Symbol";
import { usePostFollowMutation } from "@/modules/services/user";
import { context } from "@/features/User/context";
import { useAppSelector } from "@/modules/hooks";

const Header = () => {
  const { uid } = useParams();
  const [followPost] = usePostFollowMutation();
  const { profile, code, bindings } = useContext(context);
  const { isLogin } = useAppSelector(({ common }) => common);
  const account = useAppSelector(({ account }) => account);
  const isSelf = useMemo(() => {
    if (!isLogin) return false;
    return String(account.profile.userId) === uid;
  }, [isLogin]);

  const handleFollow = async (id) => {
    const { followed } = profile;
    try {
      await followPost({
        id,
        t: followed === true ? 0 : 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (!code) {
    return null;
  }
  return (
    <div className="domUserDetail_header flex p-8">
      <div className="avatar w-44 h-44 rounded-full overflow-hidden flex-none">
        <img
          src={`${profile?.avatarUrl}?param=180y180`}
          alt=""
          className="w-full h-ull object-cover block"
        />
      </div>
      <div className="ml-5 flex-auto">
        <div className="font-bold text-xl">{profile?.nickname}</div>
        <div className="flex items-center py-2">
          <div className="left flex-center">
            {profile?.vipType === 11 && (
              <>
                <a href="https://music.163.com/#/member">黑胶会员</a>
                &nbsp;
              </>
            )}
            {profile?.identify && (
              <span
                className="authentication"
                title={profile.identify.imageDesc}
              >
                <span className="w-4 h-4 ml-1">
                  <img
                    className="ui_containimg"
                    src={profile.identify.imageUrl}
                    alt=""
                  />
                </span>
                {profile.identify.imageDesc}
              </span>
            )}
            <a
              className="w-8 h-4 flex-center rounded-full mr-2 bg-gray-200"
              href="https://music.163.com/#/user/level"
            >
              Lv
              {profile.level}
            </a>
            <Gender gender={profile?.gender} size={16} />
          </div>
          <div className="right ml-auto flex-center">
            {isSelf ? (
              <Link
                to={`edit`}
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
              >
                <IconEdit size={18} stroke={1.5} />
                &nbsp; 编辑个人信息
              </Link>
            ) : (
              <>
                <button
                  type="button"
                  className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
                >
                  <IconMail size={20} stroke={1} />
                  &nbsp;发私信
                </button>
                {profile?.followed ? (
                  <button
                    type="button"
                    className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
                    onClick={() => handleFollow(profile?.userId)}
                  >
                    <IconCheck size={16} />
                    &nbsp; 已关注
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
                    onClick={() => handleFollow(profile?.userId)}
                  >
                    <IconPlus size={16} style={{ color: "#EC4141" }} />
                    &nbsp; 关注
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <hr />
        <div className="text-center divide-x flex mt-5">
          <Link to={`dynamic`} className={`w-20`}>
            <div className="text-base">{profile?.eventCount}</div>
            <div>动态</div>
          </Link>
          <Link to={`follow`} className={`w-20`}>
            <div className="text-base">{profile?.follows}</div>
            <div>关注</div>
          </Link>
          <Link to={`fans`} className={`w-20`}>
            <div className="text-base">{profile?.followeds}</div>
            <div>粉丝</div>
          </Link>
        </div>
        <div className="leading-6 mt-2 text-sm">
          {/* <div className="item">
                <span>所在地区：</span>
                <span className="text-gray-400">浙江省 温州市</span>
              </div> */}
          <div>
            <span>社交网络：</span>
            {bindings?.map((item) => {
              if (item.url) {
                switch (item.type) {
                  case 2:
                    return (
                      <a href={item.url} key={item.url}>
                        <SymbolWB size={16} active key={item.url} />
                      </a>
                    );
                  default:
                    return null;
                }
              }
            })}
          </div>
          <div>
            <span>个人介绍：</span>
            <span className="text-gray-400" style={{ whiteSpace: "pre-wrap" }}>
              {profile?.signature || "暂无介绍"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
