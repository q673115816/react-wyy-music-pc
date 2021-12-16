import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { setHomeDj } from "@/reducers/home/slice";
import Slider from "react-slick";
import { IconChevronLeft, IconChevronRight, IconChartBar } from "@tabler/icons";
import {
  apiDjBanner,
  apiDjCatelist,
  apiDjCategoryRecommend,
  apiDjPersonalizeRecommend,
  apiDjRadioHot,
} from "@/api";
import Swiper from "@/components/Swiper";
import Loading from "@/components/Loading";

import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import Item from './Item'

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

const Category = ({ catelist = [] }) => {
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
    <div className="px-10 mt-9">
      <Slider {...settings}>
        <Link to="TopList">
          <div className="flex flex-col items-center">
            <div className="rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor">
              <IconChartBar stroke={1} />
            </div>
            <div className="text-gray-500 mt-2">排行榜</div>
          </div>
        </Link>
        {catelist.map((item) => (
          <Link to={`/dj-category/${item.name}/${item.id}`} key={item.id}>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor">
                <img className="w-8 h-8" src={item.pic56x56Url} alt="" />
              </div>
              <div className="text-gray-500 mt-2">{item.name}</div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

const navs = ["创作翻唱", "声之剧场", "音乐故事", "情感调频", "声音恋人"];

export default memo(function DJ() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { DjBanner, category, catelist, DjPersonalizeRecommend, result } =
    useAppSelector(({ home }) => home.dj);

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
        声音恋人,
      ] = await Promise.all([
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
      dispatch(
        setHomeDj({
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
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  if (loading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <div className="pb-16 ui_w1100">
        <div className={style.banner}>
          {DjBanner.length > 0 && <Swiper list={DjBanner} coverSrc="pic" />}
        </div>
        <Category catelist={catelist} />
        <div className="space-y-8 mt-8">
          <div>
            <div className="h1">电台个性推荐</div>
            <div className="mt-4 grid grid-cols-5 gap-5">
              {DjPersonalizeRecommend.slice(0, 5).map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </div>
          {navs.map((name) => (
            <div key={name}>
              <Link className="h1" to={`/dj-category/${name}`}>
                {name}
                &gt;
              </Link>
              <div className="mt-4 grid grid-cols-5 gap-5">
                {result[name].slice(0, 5).map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
