import React, { FC, memo } from "react";
import Slider from "react-slick";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import Arrow from "./Arrow";
import Banner from "./Banner";
import "./Swiper.scss";
import { Banner as BannerProps } from "@/modules/services/types";
import { iArrowProps } from "./types";
const Prev: FC<iArrowProps> = ({ onClick }) => (
  <Arrow onClick={onClick} className="left-1">
    <IconChevronLeft size={16} />
  </Arrow>
);

const Next: FC<iArrowProps> = ({ onClick }) => (
  <Arrow onClick={onClick} className="right-1">
    <IconChevronRight size={16} />
  </Arrow>
);

interface iProps {
  banners: BannerProps[];
}

const Swiper: FC<iProps> = ({ banners = [] }) => {
  const settings = {
    // className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    adaptiveHeight: true,
    draggable: false,
    // autoplay: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };
  return (
    <div className="ui_swiper group">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div
            className="cover overflow-hidden rounded-lg transition relative"
            key={banner.imageUrl}
          >
            <Banner banner={banner} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(Swiper);
