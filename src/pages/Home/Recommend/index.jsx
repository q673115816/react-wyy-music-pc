import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import {
  apiBanner,
  apiRecommendResource,
  apiPersonalizedPrivatecontent,
  apiPersonalizedNewsong,
  apiPersonalizedMv,
  apiPersonalizedDjprogram,
} from '@/api';
import { setHomeRecommend } from '@/redux/actions';
import DomSwiper from '@/components/DomSwiper';

import DOMtingting from '@/components/AdLookSquare';
import DOMkankan from '@/components/AdLookRectangle';

import RecommendPlaylist from './playlist';
import RecommendPrivatecontent from './Privatecontent';
import RecommendNewsong from './Newsong';
import RecommendDjprogram from './Djprogram';
import RecommendMv from './Mv';

export default () => {
  const {
    banners,
    playlist,
    privatecontent,
    newsong,
    mv,
    djprogram,
  } = useSelector(({ home }) => home.recommend);
  const { isLogin } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const handleGet = async () => {
    try {
      const [
        { banners },
        { recommend: playlist },
        PersonalizedPrivatecontent,
        PersonalizedNewsong,
        PersonalizedMv,
        PersonalizedDjprogram] = await Promise.all([
        apiBanner(),
        apiRecommendResource({
          limit: 9,
        }),
        apiPersonalizedPrivatecontent(),
        apiPersonalizedNewsong({
          limit: 12,
        }),
        apiPersonalizedMv(),
        apiPersonalizedDjprogram(),
      ]);
      dispatch(setHomeRecommend({
        banners,
        playlist,
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
    <div className="domHome_content overflow-auto max-h-full flex-auto">
      <div className="domHome_recommend">
        <div className="domHome_item">
          {
          banners.length > 0 && <DomSwiper list={banners} coverSrc="imageUrl" />
        }
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="/home/playlist">
            推荐歌单 &gt;
          </Link>
          <div>
            {isLogin ? (
              <RecommendPlaylist playlist={playlist} />
            ) : <div>需要登录</div>}
          </div>
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="/privatecontent">
            独家放送 &gt;
          </Link>
          <RecommendPrivatecontent privatecontent={privatecontent} />
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="/home/playlist">
            最新音乐 &gt;
          </Link>
          <RecommendNewsong newsong={newsong} />
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="/home/playlist">
            推荐mv &gt;
          </Link>
          <RecommendMv mv={mv} />
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="/home/playlist">
            主播电台 &gt;
          </Link>
          <RecommendDjprogram djprogram={djprogram} />
        </div>
        <div className="domHome_item">
          <Link className="domHome_recommend_subtitle h1" to="https://look.163.com/hot?livetype=2">
            看看 &gt;
          </Link>
          <div className="domHome_recommend_kankan ui_grid rectangle_height col_4">
            {
            Object.keys(Array(4).fill(0))
              .map((item) => (
                <DOMkankan key={item} />
              ))
          }
          </div>
        </div>
        <div className="domHome_recommend_diy">
          <div className="gary">
            现在可以根据个人喜好，自由调整首页栏目顺序啦~
          </div>
          <br />
          <button type="button" className="btn">调整栏目顺序</button>
        </div>
      </div>
    </div>
  );
};
