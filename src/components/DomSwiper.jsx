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
      lazy="true"
      observer="true"
      observeparents="true"
      observeslidechildren="true"
      autoplay
      loop="true"
      effect="coverflow"
      centeredSlides="true"
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
            <Link to="/">
              <img className="ui_coverimg" src={item[coverSrc]} alt="" />
              <div className={['typeTitle', item.titleColor === 'blue' ? 'blue' : null].join(' ')}>{item.typeTitle}</div>
            </Link>
          </SwiperSlide>
        ))

      }
      <div className="sub_page" />
    </Swiper>
  </div>
);
