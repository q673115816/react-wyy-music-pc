import React from 'react';
import { Link } from 'react-router-dom';
// import Swiper core and required components
import SwiperCore, {
  Navigation, Pagination, A11y,
  EffectCoverflow,
  Autoplay,
  Mousewheel,
  Lazy,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IconChevronLeft, IconChevronUpRight } from '@tabler/icons';
import classnames from 'classnames';
// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/effect-coverflow/effect-coverflow.scss';

// install Swiper components
SwiperCore.use([
  Lazy,
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Mousewheel,
  Autoplay]);

export default ({ list = [], coverSrc = '' }) => (
  <div className="ui_swiper">
    <Swiper
      navigation
      pagination={{
        clickable: true,
        el: '.sub_page',
      }}
      lazy
      autoplay
      loop
      centeredSlides
      observer="true"
      observeparents="true"
      observeslidechildren="true"
      effect="coverflow"
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: '67%',
        depth: 150,
        // modifier: 1.5,
        slideShadows: false,
      }}
    >
      {
        list.map((item) => (
          <SwiperSlide className="cover" key={item[coverSrc]}>
            {
              item.url
                ? (
                  <a href={item.url}>
                    <img src={item[coverSrc]} alt="" />
                    <div className={classnames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>{item.typeTitle}</div>
                  </a>
                )
                : (
                  <button type="button">
                    <img src={item[coverSrc]} alt="" />
                    <div className={classnames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>{item.typeTitle}</div>
                  </button>
                )
            }
          </SwiperSlide>
        ))

      }
      <div className="sub_page" />
    </Swiper>
  </div>
);
