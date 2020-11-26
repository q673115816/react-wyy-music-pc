import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiPersonalizedPrivatecontent } from '@/api';
import { setHomeRecommend } from '@/redux/actions';

export default () => {
  const { privatecontent } = useSelector(({ home }) => home.recommend);
  const dispatch = useDispatch();
  const handleGet = async () => {
    try {
      const [PersonalizedPrivatecontent] = await Promise.all([apiPersonalizedPrivatecontent()]);
      console.log(PersonalizedPrivatecontent);
      dispatch(setHomeRecommend({
        privatecontent: PersonalizedPrivatecontent.result,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <div className="domHome_recommend">
      <div>广告</div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          推荐歌单 &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/privatecontent">
          独家放送 &gt;
        </Link>
        <div>
          {
            privatecontent.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.sPicUrl} alt="" />
                </div>
                <Link to="/">{item.name}</Link>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          最新音乐 &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          推荐mv &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          主播电台 &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          听听 &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          看看 &gt;
        </Link>
      </div>
    </div>
  );
};
