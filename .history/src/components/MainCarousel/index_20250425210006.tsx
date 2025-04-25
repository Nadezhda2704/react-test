import css from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const MainCarousel = ({ data, mainIndex, onIndexChange }) => {
  return (
    <div className={css.wrap}>
      <Swiper
        initialSlide={mainIndex}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSlideChange={(Swiper) => {
          onIndexChange(Swiper.activeIndex);
        }}
        modules={[Navigation]}
      >
        {data.map((type) => (
          <SwiperSlide key={type.id} className="swiper-slide">
            <div className={css.slideWrap}></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.pages}>
        <span>0{mainIndex + 1}</span>
        <span>/</span>
        <span>0{data.length}</span>
      </div>
    </div>
  );
};
