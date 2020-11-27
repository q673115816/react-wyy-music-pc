import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiPersonalizedPrivatecontent,
  apiPersonalizedNewsong,
  apiPersonalizedMv,
  apiPersonalizedDjprogram,
} from '@/api';
import { setHomeRecommend } from '@/redux/actions';
import Lazyload from 'react-lazyload';

export default () => {
  const {
    privatecontent, newsong, mv, djprogram,
  } = useSelector(({ home }) => home.recommend);
  const { isLogin } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const handleGet = async () => {
    try {
      const [
        PersonalizedPrivatecontent,
        PersonalizedNewsong,
        PersonalizedMv,
        PersonalizedDjprogram] = await Promise.all([
        apiPersonalizedPrivatecontent(),
        apiPersonalizedNewsong({
          limit: 12,
        }),
        apiPersonalizedMv(),
        apiPersonalizedDjprogram(),
      ]);
      dispatch(setHomeRecommend({
        privatecontent: PersonalizedPrivatecontent.result,
        newsong: PersonalizedNewsong.result,
        mv: PersonalizedMv.result,
        djprogram: PersonalizedDjprogram.result,

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
        <div>
          {isLogin ? '已经登录' : <div>需要登录</div>}
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/privatecontent">
          独家放送 &gt;
        </Link>
        <div className="domHome_recommend_privatecontent">
          {
            privatecontent.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <Link to="/">
                    <span className="ico">
                      <i className="material-icons">play_arrow</i>
                    </span>
                    <Lazyload>
                      <img className="containimg" src={item.sPicUrl} alt="" />
                    </Lazyload>
                  </Link>
                </div>
                <div className="name">
                  <Link to="/">{item.name}</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          最新音乐 &gt;
        </Link>
        <div className="domHome_recommend_newsong">
          {
            newsong.map((item) => (
              <div key={item.id} className="item">
                <button type="button" onClick={() => console.log(item.id)} className="cover">
                  <span className="ico">
                    <i className="material-icons">play_arrow</i>
                  </span>
                  <Lazyload overflow>
                    <img className="containimg" src={`${item.picUrl}?param=100y100`} alt="" />
                  </Lazyload>
                </button>
                <div className="content">
                  <div className="name text-overflow">
                    {item.name}
                  </div>
                  <div className="artist text-overflow">
                    <span className="SQ">SQ</span>
                    &nbsp;
                    {
                      item.song.artists.map((artist) => (
                        <Link
                          to={`/artist/${artist.id}`}
                          className="gray"
                          key={artist.id}
                        >
                          {artist.name}

                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          推荐mv &gt;
        </Link>
        <div className="domHome_recommend_mv">
          {
            mv.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <Link to="/mv/:id">
                    <div className="copywriter">{item.copywriter}</div>
                    <div className="playCount">{item.playCount}</div>
                    <Lazyload>
                      <img className="containimg" src={item.picUrl} alt="" />
                    </Lazyload>
                  </Link>
                </div>
                <div className="name text-overflow">
                  <Link className="" to="/mv/:id">
                    {item.name}
                  </Link>
                </div>
                <div className="artist text-overflow">
                  {
                    item.artists.map((artist) => <Link to="/artist/:id" key={artist.id}>{artist.name}</Link>)
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="/home/playlist">
          主播电台 &gt;
        </Link>
        <div className="domHome_recommend_djprogram">
          {
            djprogram.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <Link to="/dj">
                    <Lazyload>
                      <img className="containimg" src={`${item.program.coverUrl}?param=200y200`} alt="" />
                    </Lazyload>
                    <div className="name text-overflow">{item.name}</div>
                  </Link>
                </div>
                <div>
                  <Link to="/dj" className="description">{item.description}</Link>
                </div>
                {item.name}
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Link className="domHome_titlelink" to="https://look.163.com/hot?livetype=2">
          听听 &gt;
        </Link>
      </div>
      <div>
        <Link className="domHome_titlelink" to="https://look.163.com/hot?livetype=1">
          看看 &gt;
        </Link>
      </div>
    </div>
  );
};
