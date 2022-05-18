import React, { FC, memo, useRef } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import Arrow from "./Arrow";
import Banner from "./Banner";
import "./Swiper.scss";
import { Banner as BannerProps } from "@/modules/services/types";

const Prev: FC<CustomArrowProps> = ({ onClick }) => (
  <Arrow onClick={onClick} className="left-1">
    <IconChevronLeft size={16} />
  </Arrow>
);

const Next: FC<CustomArrowProps> = ({ onClick }) => (
  <Arrow onClick={onClick} className="right-1">
    <IconChevronRight size={16} />
  </Arrow>
);

interface iProps {
  banners: BannerProps[];
}

const Swiper: FC<iProps> = ({ banners = [] }) => {
  const slider = useRef(null);
  const settings = {
    // className: 'slider variable-width',
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    // centerPadding: "160px",
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
    customPaging: (i) => (
      <div
        className={`customPaging`}
        onMouseEnter={() => slider.current.slickGoTo(i)}
      ></div>
    ),
  };
  return (
    <div className="ui_swiper group">
      <Slider {...settings} ref={slider}>
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
