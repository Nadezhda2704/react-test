import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from 'react';


export const InfoDateCarousel = ({dates}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={css.wrap}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={80}
        slidesPerView="auto"
        navigation={{ prevEl, nextEl }}
        autoplay = {{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
            autoplay: null
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
