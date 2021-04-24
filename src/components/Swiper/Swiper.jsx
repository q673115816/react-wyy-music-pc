import React, { memo, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import classNames from 'classnames';
import './Swiper.scss';

const PrevArrow = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-1 inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto"
  >
    <IconChevronLeft size={16} />
  </button>
));

const NextArrow = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-1 inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto"
  >
    <IconChevronRight size={16} />
  </button>
));

export default memo(({ list = [], coverSrc = '' }) => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    // adaptiveHeight: true,
    draggable: false,
    autoplay: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="ui_swiper group">
      <Slider {...settings}>
        {
          list.map((item, index) => (
            <div
              className="cover overflow-hidden"
              key={item[coverSrc]}
              style={{
                width: 540,
              }}
            >
              {
                item.url
                  ? (
                    <a href={item.url}>
                      <img src={item[coverSrc]} alt="" />
                      <div className={classNames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
                        {item.typeTitle}
                      </div>
                    </a>
                  )
                  : (
                    <button type="button">
                      <img src={item[coverSrc]} alt="" />
                      <div className={classNames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
                        {item.typeTitle}
                      </div>
                    </button>
                  )
              }
            </div>
          ))
        }
      </Slider>
    </div>
  );
});
