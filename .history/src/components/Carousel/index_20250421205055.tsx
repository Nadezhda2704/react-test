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


        {/* <SwiperSlide>
          <div>Slide 1</div>


        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 4</div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}


// export const Carousel = ({data}) => {
//   const [didMount, setDidMount] = React.useState(false);
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   // имитация конструктора
//   if (!didMount) {
//     console.log("constructor");
//   }

//   React.useEffect(() => {
//     console.log("componentDidMount"); // действия после монтирования компонента

//     const swiper = new Swiper(".swiper", {
//       pagination: {
//         el: ".swiper-pagination",
//       },

//       // Navigation arrows
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       modules: [Navigation, Pagination],
//     });

//     setDidMount(true); // устанавливаем, чтобы избежать повторного вызова функции, которая имитирует конструктор

//     return () => {
//       console.log("componentWillUnmount"); // действия при удалении компонента
//     };
//   }, []);

//   // отслеживаем все изменения компонента
//   React.useEffect(() => {
//     console.log("componentDidUpdate"); // действия при обновлении компонента
//   });


//   return (
//     <>
//       <div>Carousel</div>
//       {/* <p>{data}</p> */}

//       <div className="swiper">
//         <div className="swiper-wrapper">
//           {/* // Slides */}
//           
//         </div>
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>
//     </>
//   );
// }