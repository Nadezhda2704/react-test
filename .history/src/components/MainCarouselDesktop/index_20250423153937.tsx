import css from './index.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
import "swiper/swiper-bundle.css";
// import "swiper/css/effect-fade";

// import "swiper/swiper.less";
// import "swiper/swiper.scss";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper-bundle.min/css";

// import './styles.css';

// import "swiper/css/effect-fade";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';
// import "swiper/css"


export const MainCarouselDesktop = ({data, mainIndex, onIndexChange}) => {

  return (
    <div className={css.wrap}>
      <Swiper
        initialSlide={mainIndex}
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
          console.log("slide change", Swiper);
          const activeIndex = Swiper.activeIndex;
          onIndexChange(activeIndex);
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        modules={[Navigation, Pagination]}
      >
        {data.map((type) => (
          <SwiperSlide key={type.id} className="swiper-slide">
            <div className={css.slideWrap}>
              <div className={css.circle}></div>
              
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
    </div>
  );
}
