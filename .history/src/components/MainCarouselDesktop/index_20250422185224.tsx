import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import React from 'react';
import "swiper/css/effect-fade";


export const MainCarouselDesktop = ({data, mainIndex, onIndexChange}) => {

  // const swiper = useSwiper();

  return (
    <div className={css.wrap}>
      <Swiper
        initialSlide={mainIndex}
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={50}
        effect={"fade"}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        onSlideChange={(Swiper) => {
          console.log("slide change", Swiper);
          const activeIndex = Swiper.activeIndex;
          onIndexChange(activeIndex);
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
          // setSwiper(swiper);
        }}
      >
        {data.map((type) => (
          <SwiperSlide key={type.id} className="swiper-slide">
            <div className={css.slideWrap}>
              <div className={css.circle}></div>
              <div className={css.period}>
                <span className={css.firstDate}>{type.firstDate}</span>
                <span className={css.secondDate}>{type.secondDate}</span>
              </div>
              <div className={css.title}>{type.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.pages}>
        <span>0{mainIndex + 1}</span>
        <span>/</span>
        <span>0{data.length}</span>
      </div>

      {/* <button
        onClick={() => {
          swiper.slideNext();
          console.log("mainIndex", mainIndex);
          console.log("swiper btn", swiper);
        }}
      >
        next
      </button> */}
      {/* <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button> */}
    </div>
  );
}
