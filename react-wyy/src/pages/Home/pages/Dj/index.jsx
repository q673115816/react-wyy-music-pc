import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Lazyload from 'react-lazyload';

import DOMtingting from '@/components/AdLook';

import { setHomeDj } from '@/redux/actions';

import {
  apiDjBanner, apiDjCategoryRecommend, apiDjPersonalizeRecommend, apiDjRadioHot,
} from '@/api';

// import Swiper core and required components
import SwiperCore, {
  Navigation, Pagination, A11y,
  EffectCoverflow,
  Autoplay,
  Mousewheel,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Mousewheel,
  Autoplay]);

const DomDjNormal = ({ item = {} }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to="/">
          <Lazyload overflow>
            <img className="containimg" src={item.picUrl} alt="" />
          </Lazyload>
          <div className="lb">
            <div className="whitetext">{item.name}</div>
          </div>
        </Link>
      </div>
    </div>
    <div className="footer">
      <Link to="/">{item.rcmdtext}</Link>
    </div>
  </div>
);

export default () => {
  const disPatch = useDispatch();
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
  const handleInit = async () => {
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
      disPatch(setHomeDj({
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
    handleInit();
  }, []);

  return (
    <div className="domHome_dj">
      <div className="domHome_dj_banner">
        <Swiper effect="coverflow">
          {[1, 2, 3].map((i, el) => (
            <SwiperSlide>
              Slide
              {el}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper>
          {DjBanner.map((item) => (
            <SwiperSlide key={item.targetId}>
              <img className="containimg" src={item.pic} alt="" />
              <div className="typeTitle">{item.typeTitle}</div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      <div className="domHome_item">
        <div className="domHome_dj_nav">
          <Link to="/">排行榜</Link>
          {
            category.map((item) => (
              <Link to="/" key={item.categoryId}>
                <div className="item">
                  <div className="btn">
                    <i className="ico" />
                  </div>
                  <div className="name">{item.categoryName}</div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/">听听 &gt;</Link>
        <div className="domHome_dj_tingting ui_grid_square">
          {
            Object.keys(Array(5).fill(0))
              .map((item) => <DOMtingting key={item} />)
          }
        </div>
      </div>
      <div className="domHome_item">
        <div className="domHome_linktitle">电台个性推荐</div>
        <div className="domHome_dj_tingting ui_grid_square row_1">
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
            <Link className="domHome_linktitle" to="/">
              {subitem[0]}

              &gt;
            </Link>
            <div className="domHome_dj_tingting ui_grid_square row_1">
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
  );
};
