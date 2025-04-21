import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";


export const Carousel = ({data}) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <>
      <div>Carousel</div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((type) => (
          <SwiperSlide key={type.id} className="swiper-slide">
            <div className={css.slideWrap}>
              <div className={css.period}>
                <span className={css.firstDate}>{type.firstDate}</span>
                <span className={css.secondDate}>{type.secondDate}</span>
              </div>                
              <div className={css.title}>{type.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
