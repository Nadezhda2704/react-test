import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import "swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';


export const InfoDateCarousel = ({dates}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={css.wrap}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{ prevEl, nextEl }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
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

      <div className={css.prev} ref={(node) => setPrevEl(node)}></div>
      <div className={css.next} ref={(node) => setNextEl(node)}></div>
    </div>
  );
}
