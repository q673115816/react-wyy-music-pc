import React, { memo } from 'react';
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
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
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

export default memo(({ list = [], coverSrc = '' }) => (
  <div className="ui_swiper group">
    <Swiper
      navigation={{
        prevEl: '.ui_swiper_prev',
        nextEl: '.ui_swiper_next',
      }}
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
          <SwiperSlide
            className="cover overflow-hidden"
            key={item[coverSrc]}
          >
            {
              item.url
                ? (
                  <a href={item.url}>
                    <img src={item[coverSrc]} alt="" />
                    <div className={classnames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
                      {item.typeTitle}
                    </div>
                  </a>
                )
                : (
                  <button type="button">
                    <img src={item[coverSrc]} alt="" />
                    <div className={classnames('typeTitle px-3 py-2', item.titleColor === 'blue' ? 'bg-blue-500' : 'bg-red-600')}>
                      {item.typeTitle}
                    </div>
                  </button>
                )
            }
          </SwiperSlide>
        ))

      }
      <span className="opacity-0 group-hover:opacity-100 ui_swiper_prev flex-center text-white w-8 h-8 absolute inset-y-0 m-auto left-2 rounded-full bg-black bg-opacity-50 z-10">
        <IconChevronLeft size={16} />
      </span>
      <span className="opacity-0 group-hover:opacity-100 ui_swiper_next flex-center text-white w-8 h-8 absolute inset-y-0 m-auto right-2 rounded-full bg-black bg-opacity-50 z-10">
        <IconChevronRight size={16} />
      </span>
      <div className="sub_page flex py-3 justify-center" />
    </Swiper>
  </div>
));
