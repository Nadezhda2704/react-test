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
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        onSlideChange={(Swiper) => {
          console.log("slide change", Swiper.activeIndex);
          setactiveIndex(Swiper.activeIndex);
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dates.map((date) => (
          <SwiperSlide key={date.id} className="swiper-slide">
            <div className={css.slideWrap}>
              <div className={css.title}>{date.title}</div>
              <div className={css.text}>{date.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className={css.pages}>
        <span>{activeIndex + 1}</span>
        <span>/</span>
        <span>{data.length}</span>
      </div> */}
    </div>
  );
}
