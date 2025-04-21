import css from './index.module.scss';
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";


export const Carousel = ({data}) => {
  const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  ...
}));

  return (
    <>
      <div>Carousel</div>
      {/* <p>{data}</p> */}


    </>
  );
}