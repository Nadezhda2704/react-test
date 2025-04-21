import css from './index.module.scss';
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
// import "swiper/css";


export const Carousel = ({data}) => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination]
  });

  return (
    <>
      <div>Carousel</div>
      {/* <p>{data}</p> */}

      <div className="swiper">
        // Additional required wrapper
        <div className="swiper-wrapper">
          // Slides
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        // If we need pagination
        <div className="swiper-pagination"></div>
        // If we need navigation buttons
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        // If we need scrollbar
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </>
  );
}