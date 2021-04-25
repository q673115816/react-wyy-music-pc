import React, {
  memo, PureComponent, useMemo, useState,
} from 'react';
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

const DomMain = ({ item, coverSrc }) => (
  <a {...{ ...(item.url ? { href: item.url } : { onClick: (e) => e.preventDefault(), href: '#' }) }} className="block">
    <img src={item[coverSrc]} alt="" />
    <div className={classNames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
      {item.typeTitle}
    </div>
  </a>
);

export default memo(({ list = [], coverSrc = '' }) => {
  const [curr, setCurr] = useState(0);
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setCurr(next),
  };
  return (
    <div className="ui_swiper group">
      <Slider {...settings}>
        {
          list.map((item, index) => (
            <div
              className="cover overflow-hidden border rounded-lg transition relative"
              key={item[coverSrc]}
              style={{
                width: 1080 * 0.5,
              }}
            >
              <DomMain item={item} coverSrc={coverSrc} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
});
