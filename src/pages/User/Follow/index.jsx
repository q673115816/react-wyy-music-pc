import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IconPlus } from '@tabler/icons';
import { apiUserDetail, apiUserFollows, apiFollow } from '@/api';
import { setPopup, setMsgPrivateHistory } from '@/redux/actions';

const BuildUserAction = (item, handleFollow) => (item.followed
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
  ));

export default () => {
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({});
  const [data, setData] = useState([]);
  const { uid } = useParams();
  const account = useSelector(({ account }) => account);

  // if (!account.profile.userId) return <Redirect to="/" />;
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
      const { code } = await apiFollow({
        id,
        t: 1,
      });
      if (code === 200) {
        setData(data.map((item) => {
          if (item.userId === id) {
            item.followed = true;
          }
          return item;
        }));
      }
      // toast 通知
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrivateLetter = (uid, nickname) => {
    dispatch(setPopup({ popupStatus: 'privateLetter' }));
    dispatch(setMsgPrivateHistory({
      uid,
      nickname,
      showMsgPrivateHistory: true,
    }));
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (

    <div className="domUser_followlist">
      <div className="h1 domUser_subpage_header ui_header">
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
                    <div className="truncate">{item.signature}</div>
                  </div>
                  <div className="right">
                    {BuildUserAction(item, handleFollow)}
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
  );
};
