import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';


export const InfoDateCarousel = ({dates}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={css.wrap}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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

      <button ref={prevRef}>previous</button>
      <button ref={nextRef}>next</button>
    </div>
  );
}
