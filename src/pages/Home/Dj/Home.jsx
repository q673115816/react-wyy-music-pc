import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Lazyload from 'react-lazyload';
import { setHomeDj } from '@/reducers/home/actions';

import {
  apiDjBanner,
  apiDjCatelist,
  apiDjCategoryRecommend,
  apiDjPersonalizeRecommend,
  apiDjRadioHot,
} from '@/api';
import DomSwiper from '@/components/Swiper';

// import Swiper core and required components
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  IconChartBar,
} from '@tabler/icons';

import './style.scss';
// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';

// install Swiper components
SwiperCore.use([
  Navigation,
  A11y]);

const DomDjNormal = ({ item = {} }) => (
  <div className="item">
    <div className="cover relative rounded border overflow-hidden ui_aspect-ratio-1/1">
      <Link to={`/playlist/dj/${item.id}`}>
        <Lazyload overflow>
          <img className="" src={item.picUrl} alt="" />
        </Lazyload>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom" />
        <div className="absolute left-0 bottom-0 max-w-full px-2 py-1 text-white truncate">
          {item.name}
        </div>
      </Link>
    </div>
    <div className="footer mt-2 text-sm">
      <Link
        to={`/playlist/dj/${item.id}`}
        className="text-gray-600 hover:text-black"
      >
        {item.rcmdtext}
      </Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const {
    DjBanner,
    category,
    catelist,
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
        // category,
        catelist = [],
        DjPersonalizeRecommend,
        创作翻唱,
        声之剧场,
        音乐故事,
        情感调频,
        声音恋人] = await Promise.all([
        apiDjBanner(),
        apiDjCatelist(),
        // apiDjCategoryRecommend(),
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
        // category: category.data,
        catelist: catelist.categories,
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

  // const random = (height) => Math.random() * height >> 0;
  // const randomrgb = () => `rgb(${random(255)},${random(255)},${random(255)})`;
  return (
    <div className="domHome_content px-8 overflow-auto max-h-full flex-auto">
      <div className="domHome_dj pb-16 ui_w1100">
        <div className="domHome_dj_banner">
          {
            DjBanner.length > 0 && (
              <DomSwiper list={DjBanner} coverSrc="pic" />
            )
          }
        </div>
        <div className="domHome_item">
          {catelist.length > 0
            && (
              <div className="domHome_dj_nav px-10 mt-2">
                <Swiper
                  navigation
                  spaceBetween={40}
                  slidesPerView="7"
                  slidesPerGroup="8"
                >
                  <SwiperSlide className="item">
                    <Link to="/home/dj/toplist">
                      <div className="inner">
                        <div className="btn flex-center ui_themeColor">
                          <IconChartBar stroke={1} />
                        </div>
                        <div className="name text-gray-500 mt-2">
                          排行榜
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  {
                    catelist.map((item) => (
                      <SwiperSlide className="item" key={item.id}>
                        <Link to={`/dj-category/${item.id}`}>
                          <div className="inner">
                            <div className="btn flex-center ui_themeColor">
                              <img className="w-8 h-8" src={item.pic56x56Url} alt="" />
                            </div>
                            <div className="name text-gray-500 mt-2">
                              {item.name}
                            </div>
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
          <div className="domHome_dj_list grid grid-cols-5 gap-5">
            {
              DjPersonalizeRecommend.slice(0, 5)
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
              <div className="domHome_dj_list grid grid-cols-5 gap-5">
                {
                  subitem[1].slice(0, 5)
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
