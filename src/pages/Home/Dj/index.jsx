import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Lazyload from 'react-lazyload';
import './style.scss';
import DOMtingting from '@/components/AdLookSquare';
import { setHomeDj } from '@/redux/actions';

import {
  apiDjBanner, apiDjCategoryRecommend, apiDjPersonalizeRecommend, apiDjRadioHot,
} from '@/api';
import DomSwiper from '@/components/DomSwiper';

// import Swiper core and required components
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';

// install Swiper components
SwiperCore.use([
  Navigation,
  A11y]);

const DomDjNormal = ({ item = {} }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to={`/playlist/dj/${item.id}`}>
          <Lazyload overflow>
            <img className="ui_containimg" src={item.picUrl} alt="" />
          </Lazyload>
          <div className="lb">
            <span className="whitetext">{item.name}</span>
          </div>
          <div className="bottommask" />
        </Link>
      </div>
    </div>
    <div className="footer">
      <Link to={`/playlist/dj/${item.id}`} className="text-gray-600 hover:text-gray-900">{item.rcmdtext}</Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const {
    DjBanner,
    category,
    DjPersonalizeRecommend,
    创作翻唱,
    声之剧场,
    音乐故事,
    情感调频,
    声音恋人,
  } = useSelector(({ home }) => home.dj);
  const restlist = [
    ['创作翻唱', 创作翻唱],
    ['声之剧场', 声之剧场],
    ['音乐故事', 音乐故事],
    ['情感调频', 情感调频],
    ['声音恋人', 声音恋人]];

  const handleInit = async ({ dispatch }) => {
    try {
      const [
        DjBanner,
        category,
        DjPersonalizeRecommend,
        创作翻唱,
        声之剧场,
        音乐故事,
        情感调频,
        声音恋人] = await Promise.all([
        apiDjBanner(),
        apiDjCategoryRecommend(),
        apiDjPersonalizeRecommend(),
        apiDjRadioHot({
          cateId: 2001,
          limit: 6,
        }),
        apiDjRadioHot({
          cateId: 10001,
          limit: 6,
        }),
        apiDjRadioHot({
          cateId: 2,
          limit: 6,
        }),
        apiDjRadioHot({
          cateId: 3,
          limit: 6,
        }),
        apiDjRadioHot({
          cateId: 3001,
          limit: 6,
        }),
      ]);
      dispatch(setHomeDj({
        DjBanner: DjBanner.data,
        category: category.data,
        DjPersonalizeRecommend: DjPersonalizeRecommend.data,
        创作翻唱: 创作翻唱.djRadios,
        声之剧场: 声之剧场.djRadios,
        音乐故事: 音乐故事.djRadios,
        情感调频: 情感调频.djRadios,
        声音恋人: 声音恋人.djRadios,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit({ dispatch });
  }, []);

  // const random = (height) => Math.random() * height >> 0;
  // const randomrgb = () => `rgb(${random(255)},${random(255)},${random(255)})`;
  return (
    <div className="domHome_content overflow-auto max-h-full flex-auto">

      <div className="domHome_dj">
        <div className="domHome_dj_banner">
          {
          DjBanner.length > 0 && (
            <DomSwiper list={DjBanner} coverSrc="pic" />
          )
        }
        </div>
        <div className="domHome_item">
          {category.length > 0
          && (
            <div className="domHome_dj_nav">
              <Swiper
                navigation
                spaceBetween={40}
                slidesPerView="7"
                slidesPerGroup="8"
              >
                <SwiperSlide className="item">
                  <Link to="/">
                    <div className="inner">
                      <div className="btn">
                        <i className="ico" />
                      </div>
                      <div className="name">
                        排行榜
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                {
                  category.map((item) => (
                    <SwiperSlide className="item" key={item.categoryId}>
                      <Link to="/">
                        <div className="inner">
                          <div className="btn">
                            <i className="ico" />
                          </div>
                          <div className="name gary">{item.categoryName}</div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          )}
        </div>
        <div className="domHome_item">
          <div className="domHome_linktitle h1">电台个性推荐</div>
          <div className="domHome_dj_list ui_grid square row_1">
            {
            DjPersonalizeRecommend
              .map((item) => (
                <DomDjNormal item={item} key={item.id} />
              ))
          }
          </div>
        </div>
        {
        restlist.map((subitem) => (
          <div key={subitem[0]} className="domHome_item">
            <Link className="domHome_linktitle h1" to="/">
              {subitem[0]}

              &gt;
            </Link>
            <div className="domHome_dj_list ui_grid square row_1">
              {
                subitem[1]
                  .map((item) => (
                    <DomDjNormal item={item} key={item.id} />
                  ))
              }
            </div>
          </div>
        ))
      }
      </div>

    </div>
  );
};
