import css from './index.module.scss';
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.min.css";


export const Carousel = ({data}) => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination]
  });

  return (
    <>
      <div>Carousel</div>
      {/* <p>{data}</p> */}


    </>
  );
}