import React, { memo, useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUserDetail, apiUserPlaylist, apiFollow } from "@/api";
import "./style.scss";
import Gender from "@/components/Gender";
import { IconEdit, IconCheck, IconMail, IconPlus } from "@tabler/icons";
import { SymbolWB } from "@/components/Symbol";
import Loading from "@/components/Loading";

import Layout from "./components/layout";
import { useAppSelector } from "@/reducers/hooks";
const defaultUser = {
  profile: {},
  bindings: []
}
const Detail = () => {
  const { uid } = useParams();
  const { isLogin } = useAppSelector(({ common }) => common);
  const account = useAppSelector(({ account }) => account);
  const [user, setUser] = useState(defaultUser);
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const isSelf = useMemo(() => {
    if(!isLogin) return false
    return String(account.profile.userId) === uid
  }, [isLogin])

  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  const handleGetUserInfo = async () => {
    try {
      const [user, { playlist }] = await Promise.all([
        apiUserDetail({ uid }),
        apiUserPlaylist({ uid }),
      ]);
      setUser({...defaultUser, ...user });
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
    return <div>查看个人信息请先登录</div>;
  }
  if (!loading) {
    return (
      <div className="flex-center">
        <Loading />
      </div>
    );
  }
  if(user.code === 404) {
    return (
      <div className={`flex`}>用户不存在</div>
    )
  }
  return (
    <div className="domUserDetail">
      <div className="domUserDetail_header p-8">
        <div className="avatar w-44 h-44 rounded-full overflow-hidden flex-none">
          <img
            src={`${user.profile?.avatarUrl}?param=180y180`}
            alt=""
            className="w-full h-ull object-cover block"
          />
        </div>
        <div className="content">
          <div className="font-bold text-xl">{user.profile?.nickname}</div>
          <div className="contain">
            <div className="left flex-center">
              {user.profile?.vipType === 11 && (
                <>
                  <a href="https://music.163.com/#/member">黑胶会员</a>
                  &nbsp;
                </>
              )}
              {user.identify && (
                <span
                  className="authentication"
                  title={user.identify.imageDesc}
                >
                  <span className="ico">
                    <img
                      className="ui_containimg"
                      src={user.identify.imageUrl}
                      alt=""
                    />
                  </span>
                  {user.identify.imageDesc}
                </span>
              )}
              <a className="level" href="https://music.163.com/#/user/level">
                Lv
                {user.level}
              </a>
              <Gender gender={user.profile?.gender} size={16} />
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
                  {user.profile?.followed ? (
                    <button
                      type="button"
                      className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
                      onClick={() => handleFollow(user.profile?.userId)}
                    >
                      <IconCheck size={16} />
                      &nbsp; 已关注
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"
                      onClick={() => handleFollow(user.profile?.userId)}
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
          <div
            className="infos text-center divide-x grid mt-5"
            style={{ gridTemplateColumns: "repeat(3, 88px)" }}
          >
            <Link to={`dynamic`} className="info">
              <div className="num text-base">{user.profile?.eventCount}</div>
              <div className="string">动态</div>
            </Link>
            <Link to={`follow`} className="info">
              <div className="num text-base">{user.profile?.follows}</div>
              <div className="string">关注</div>
            </Link>
            <Link to={`fans`} className="info">
              <div className="num text-base">{user.profile?.followeds}</div>
              <div className="string">粉丝</div>
            </Link>
          </div>
          <div className="leading-6 mt-2 text-sm">
            {/* <div className="item">
                <span>所在地区：</span>
                <span className="text-gray-400">浙江省 温州市</span>
              </div> */}
            <div className="item">
              <span>社交网络：</span>
              {user.bindings.map((item) => {
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
            <div className="item">
              <span>个人介绍：</span>
              <span
                className="text-gray-400"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {user.profile.signature || "暂无介绍"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="domUserDetail_main">
        <Layout uid={uid} list={ownPlaylist} />
        <Layout uid={uid} list={savePlaylist} />
      </div>
    </div>
  );
};

export default memo(Detail);
