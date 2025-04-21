import React from 'react';
import css from './index.module.scss';

export const Carousel = ({data}) => {
  return (
    <>
      <div>Carousel</div>
    </>
};


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
//           {data.map((type) => (
//             <div key={type.id} className="swiper-slide">
//               <div className={css.slideWrap}>
//                 <div className={css.period}>
//                   <span className={css.firstDate}>{type.firstDate}</span>
//                   <span className={css.secondDate}>{type.secondDate}</span>
//                 </div>

//                 <div className={css.title}>{type.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>
//     </>
//   );
// }