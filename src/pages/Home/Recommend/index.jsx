import React, { memo, useEffect, useState } from 'react';
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
import { setHomeRecommend } from '@/reducers/home/actions';
import DomSwiper from '@/components/Swiper';
import { IconChevronRight } from '@tabler/icons';
import DOMkankan from '@/components/AdLookRectangle';

import DomLoading from '@/components/Loading';
import RecommendPlaylist from './playlist';
import RecommendPrivatecontent from './Privatecontent';
import RecommendNewsong from './Newsong';
import RecommendDjprogram from './Djprogram';
import RecommendMv from './Mv';

export default memo(() => {
  const {
    banners,
    playlist,
    privatecontent,
    newsong,
    mv,
    djprogram,
  } = useSelector(({ home }) => home.recommend);
  const { isLogin } = useSelector(({ common }) => common);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleInit = async () => {
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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (loading) {
    return (
      <div className="flex-center w-full h-full">
        <DomLoading />
      </div>
    );
  }
  return (
    <div className="domHome_content overflow-auto max-h-full flex-auto">
      <div className="domHome_recommend">
        <div className="domHome_item">
          <DomSwiper list={banners} coverSrc="imageUrl" />
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="/home/playlist"
          >
            推荐歌单
            <IconChevronRight size={24} />
          </Link>
          <div>
            {isLogin ? (
              <RecommendPlaylist playlist={playlist} />
            ) : <div>需要登录</div>}
          </div>
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="/privatecontent"
          >
            独家放送
            <IconChevronRight size={24} />
          </Link>
          <RecommendPrivatecontent privatecontent={privatecontent} />
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="/home/playlist"
          >
            最新音乐
            <IconChevronRight size={24} />
          </Link>
          <RecommendNewsong newsong={newsong} />
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="/home/playlist"
          >
            推荐mv
            <IconChevronRight size={24} />
          </Link>
          <RecommendMv mv={mv} />
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="/home/playlist"
          >
            主播电台
            <IconChevronRight size={24} />
          </Link>
          <RecommendDjprogram djprogram={djprogram} />
        </div>
        <div className="domHome_item">
          <Link
            className="domHome_recommend_subtitle h1 inline-flex items-center"
            to="https://look.163.com/hot?livetype=2"
          >
            看看
            <IconChevronRight size={24} />
          </Link>
          <div className="domHome_recommend_kankan grid grid-cols-4 gap-5">
            {
            Object.keys(Array(4).fill(0))
              .map((item) => (
                <DOMkankan key={item} />
              ))
          }
          </div>
        </div>
        <div className="domHome_recommend_diy">
          <div className="text-gray-500">
            现在可以根据个人喜好，自由调整首页栏目顺序啦~
          </div>
          <br />
          <button
            type="button"
            className="btn ui_themeColor border rounded-sm border-current"
          >
            调整栏目顺序
          </button>
        </div>
      </div>
    </div>
  );
});
