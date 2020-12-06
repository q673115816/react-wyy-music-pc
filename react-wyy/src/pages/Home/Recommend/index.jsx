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
import Lazyload from 'react-lazyload';
import DomSwiper from '@/components/DomSwiper';

import kankanimg from '@img/kankan.jpg';

import DOMtingting from '@/components/AdLook';

import RecommendPlaylist from './playlist';
import RecommendPrivatecontent from './Privatecontent';
import RecommendNewsong from './Newsong';
import RecommendDjprogram from './Djprogram';
import RecommendMv from './Mv';

const kankan = 'https://look.163.com/hot?livetype=2';

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
        apiRecommendResource(),
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
    <div className="domHome_recommend">

      <div className="domHome_item">
        {
          banners.length > 0 && <DomSwiper list={banners} coverSrc="imageUrl" />
        }
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/home/playlist">
          推荐歌单 &gt;
        </Link>
        <div>
          {isLogin ? (
            <RecommendPlaylist playlist={playlist} />
          ) : <div>需要登录</div>}
        </div>
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/privatecontent">
          独家放送 &gt;
        </Link>
        <RecommendPrivatecontent privatecontent={privatecontent} />
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/home/playlist">
          最新音乐 &gt;
        </Link>
        <RecommendNewsong newsong={newsong} />
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/home/playlist">
          推荐mv &gt;
        </Link>
        <RecommendMv mv={mv} />
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/home/playlist">
          主播电台 &gt;
        </Link>
        <RecommendDjprogram djprogram={djprogram} />
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to={kankan}>
          听听 &gt;
        </Link>
        <div className="domHome_recommend_tingting ui_grid_square">
          {
            Object.keys(Array(5).fill(0))
              .map((item) => <DOMtingting key={item} />)
          }
        </div>
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to={kankan}>
          看看 &gt;
        </Link>
        <div className="domHome_recommend_kankan">
          {
            Object.keys(Array(4).fill(0))
              .map((item) => (
                <div className="item" key={item}>
                  <div className="cover">
                    <Link to={kankan}>
                      <Lazyload>
                        <img className="containimg" src={kankanimg} alt="" />
                      </Lazyload>
                      <span className="playCount">playCount</span>
                      <span className="artist">artist</span>
                    </Link>
                  </div>
                  <div className="artist text-overflow gary">
                    <Link to={kankan}>name</Link>
                  </div>
                </div>
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
  );
};
