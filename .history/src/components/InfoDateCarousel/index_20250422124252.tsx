import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import React from 'react';


export const InfoDateCarousel = ({dates}) => {

  const [activeIndex, setactiveIndex] = React.useState(0);

  return (
    <div className={css.wrap}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(Swiper) => {
          console.log("slide change", Swiper.activeIndex);
          setactiveIndex(Swiper.activeIndex);
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dates.map((date) => (
          <SwiperSlide key={date.id} className="swiper-slide">
            <div className={css.slideWrap}>
              <div className={css.date}>{date.date}</div>
              <div className={css.text}>{date.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
