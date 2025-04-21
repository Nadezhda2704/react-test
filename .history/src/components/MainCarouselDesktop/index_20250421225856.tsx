import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';


export const MainCarouselDesktop = ({data}) => {

  return (
    <>
      <div>Carousel</div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
