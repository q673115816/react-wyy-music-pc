import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { apiUserDetail, apiUserFollows, apiFollow } from '@/api';
import { useSelector } from 'react-redux';

const BuildUserAction = (followed) => {
  if()
}

export default () => {
  const [profile, setProfile] = useState({});
  const [data, setData] = useState([]);
  const { uid } = useParams();
  const account = useSelector(({ account }) => account);
  if (!account.profile.userId) return <Redirect to="/" />;
  const isSelf = String(account.profile.userId) === uid;

  const handleInit = async () => {
    try {
      const [{ profile }, { follow }] = await Promise.all([
        apiUserDetail({
          uid,
        }),
        apiUserFollows({
          uid,
        }),
      ]);
      setProfile(profile);
      setData(follow);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (id) => {
    try {
      const { } = await apiFollow({
        id,
        t: 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="overflow-auto">
      <div className="domUser_followlist">
        <div className="h1 domUser_followlist_header">
          <Link to="./">
            {profile.nickname}
          </Link>
          的关注
        </div>
        <div className="domUser_followlist_main">
          <div className="list">
            {data.map((item) => (
              <div className="item" key={item.userId}>
                <Link to={`/user/${item.userId}`} className="avatar">
                  <img src={`${item.avatarUrl}?param=100y100`} alt="" />
                  {
                    item.avatarDetail
                    && (
                      <div className="ico">
                        <img src={item.avatarDetail.identityIconUrl} alt="" />
                      </div>
                    )
                  }
                </Link>
                <div className="content">
                  <div className="contain">
                    <div className="left">
                      <Link
                        className="nickname"
                        to={`/user/${item.userId}`}
                      >
                        {item.nickname}
                      </Link>
                    </div>
                  </div>
                  <div className="contain">
                    <div className="left">
                      <div className="text-overflow">{item.signature}</div>
                    </div>
                    <div className="right">
                      {/* {isSelf ? <button type="button" className="follow">私信</button>:BuildUserAction(item.followed)} */}
                      {
                        item.followed
                          ? <span className="follow on">已关注</span>
                          : (
                            <button
                              onClick={() => handleFollow(item.userId)}
                              type="button"
                              className="follow"
                            >
                              <IconPlus size={16} style={{ color: '#EC4141' }} />
                            &nbsp; 关注
                            </button>
                          )
                      }
                    </div>
                  </div>
                  <div className="contain">
                    <div className="left">
                      <span>
                        歌单：
                        {item.playlistCount}
                      </span>
                      <span style={{ height: 12, width: 1, backgroundColor: '#E1CAE1' }} />
                      <span>
                        歌单：
                        {item.followeds}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
