import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Lazyload from 'react-lazyload';
import { setHomeDj } from '@/reducers/home/actions';
import Slider from 'react-slick';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChartBar,
} from '@tabler/icons';
import {
  apiDjBanner,
  apiDjCatelist,
  apiDjCategoryRecommend,
  apiDjPersonalizeRecommend,
  apiDjRadioHot,
} from '@/api';
import DomSwiper from '@/components/Swiper';
import DomLoading from '@/components/Loading';

import './style.scss';
import classNames from 'classnames';

const DomDjNormal = memo(({ item = {} }) => (
  <div className="item">
    <div className="cover relative rounded border overflow-hidden">
      <Link to={`/playlist/dj/${item.id}`} className="ui_aspect-ratio-1/1">
        <Lazyload overflow resize>
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
));

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto"
  >
    <IconChevronLeft size={30} stroke={1} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto"
  >
    <IconChevronRight size={30} stroke={1} />
  </button>
);

const DomCategary = ({ catelist = [] }) => {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    draggable: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="domHome_dj_nav px-10 mt-9">
      <Slider {...settings}>
        <div className="item">
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
        </div>
        {
          catelist.map((item) => (
            <div className="item" key={item.id}>
              <Link to={`/dj-category/${item.name}/${item.id}`}>
                <div className="inner">
                  <div className="btn flex-center ui_themeColor">
                    <img className="w-8 h-8" src={item.pic56x56Url} alt="" />
                  </div>
                  <div className="name text-gray-500 mt-2">
                    {item.name}
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

const navs = [
  '创作翻唱',
  '声之剧场',
  '音乐故事',
  '情感调频',
  '声音恋人'];

export default memo(() => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {
    DjBanner,
    category,
    catelist,
    DjPersonalizeRecommend,
    result,
  } = useSelector(({ home }) => home.dj);

  const handleInit = async () => {
    try {
      const [
        DjBanner,
        category,
        catelist = [],
        DjPersonalizeRecommend,
        创作翻唱,
        声之剧场,
        音乐故事,
        情感调频,
        声音恋人] = await Promise.all([
        apiDjBanner(),
        apiDjCategoryRecommend(),
        apiDjCatelist(),
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
        catelist: catelist.categories,
        DjPersonalizeRecommend: DjPersonalizeRecommend.data,
        result: {
          创作翻唱: 创作翻唱.djRadios,
          声之剧场: 声之剧场.djRadios,
          音乐故事: 音乐故事.djRadios,
          情感调频: 情感调频.djRadios,
          声音恋人: 声音恋人.djRadios,
        },
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  if (loading) return <div className="flex-center w-full h-full"><DomLoading /></div>;
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
          <DomCategary catelist={catelist} />
        </div>
        <div className="domHome_item mt-8">
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
          navs.map((name) => (
            <div key={name} className="domHome_item mt-8">
              <Link className="domHome_linktitle h1" to={`/dj-category/${name}`}>
                {name}
                &gt;
              </Link>
              <div className="domHome_dj_list grid grid-cols-5 gap-5">
                {
                  result[name].slice(0, 5)
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
});
