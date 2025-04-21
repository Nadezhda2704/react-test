import css from './index.module.scss';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';


export const MainCarouselDesktop = ({data}) => {

  let activeIndex;

  return (
    <>
      <div>Carousel</div>

      <div>
        <span>index{activeIndex}</span>
        <span>/</span>
        <span>all{data.length}</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(Swiper) => {
          console.log("slide change", Swiper.activeIndex);
          index = Swiper.activeIndex;
        }}
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
