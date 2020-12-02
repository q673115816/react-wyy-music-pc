import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUserDetail, apiUserPlaylist } from '@/api';
import { setUserDetail } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const { uid } = useParams();
  const dispatch = useDispatch();
  const { profile, level, playlist } = useSelector(({ user }) => user);
  const handleGetUserInfo = async () => {
    try {
      const [{ profile, level }, { playlist }] = await Promise.all([
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
  }, []);
  return (
    <div className="domUser">
      <div className="overflow-auto">

        <div className="domUser_header">
          <div className="avatar">
            <img src={profile.avatarUrl} alt="" className="containimg" />
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
              <button type="button" />
              <button type="button" />
              <button type="button" />
            </div>
          </div>
          <div>
            {
              playlist.map((item) => (
                <div key={item.id}>
                  <div>
                    <img src={item.coverImgUrl} className="containimg" alt="" />
                  </div>
                  <div>{item.name}</div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
};
