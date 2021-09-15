import React, {
  memo,
  MouseEventHandler,
  ReactNode,
} from 'react';
import Slider from 'react-slick';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import classNames from 'classnames';
import './Swiper.scss';

interface iArrowProps {
  onClick?: MouseEventHandler,
  className?: string,
  children?: ReactNode
}

const Arrow = memo<iArrowProps>(({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames("absolute inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto", className)}
  >
    {children}
  </button>
))

const PrevArrow = memo<iArrowProps>((props) => (
  <Arrow {...props} className="left-1">
    <IconChevronLeft size={16} />
  </Arrow>
))

const NextArrow = memo<iArrowProps>((props) => (
  <Arrow {...props} className="right-1">
    <IconChevronRight size={16} />
  </Arrow>
))


interface iBannerProps {
  item: iItemProps,
  children: ReactNode
}

const Banner = memo<iBannerProps>(({ item, children }) => (
  <a {...{ ...(item.url ? { href: item.url } : { onClick: (e) => e.preventDefault(), href: '#' }) }} className="block">
    {children}
    <div className={classNames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
      {item.typeTitle}
    </div>
  </a>
));

interface iProps<T> {
  list: T[],
  coverSrc: keyof T
}

interface iItemProps {
  url: string,
  titleColor: string,
  typeTitle: string,
  imageUrl: string,
  [key: string]: string // ...
}

export default memo<iProps<iItemProps>>(({ list = [], coverSrc = '' }) => {
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
              <Banner item={item} ><img src={item[coverSrc]} alt="banner" /></Banner>
            </div>
          ))
        }
      </Slider>
    </div>
  );
});
