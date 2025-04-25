import React, { useRef } from "react";
import css from "./index.module.scss";
import { TweenLite } from "gsap";

export const Period = ({firstDate, secondDate}) => {

  const secondDateRef = useRef(null);
  const valueRef = useRef({ val: 1990 });


  const [firstD, setFirstD] = React.useState(1999);
  const [secondD, setSecondD] = React.useState(1999);


  React.useEffect(() => {

    if (firstD !== firstDate && secondD !== secondDate) {
      console.log("firstD", firstD);
      console.log("secondD", secondD);

      console.log("firstDate", firstDate);
      console.log("secondDate", secondDate);

      // TweenLite.to({ d: 110 }, 2, {
      //   d: 90,
      //   roundProps: "d",
      //   ease: Linear.easeNone,
      //   onUpdate: function () {
      //     $("#gsapBox").html(this.target.d);
      //   },
      // });

      gsap.to(firstDate, {
        val: firstD,
        duration: 2,
        ease: "power1.inOut",
        onUpdate: () => {
          if (secondDateRef.current) {
            secondDateRef.current.textContent = Math.round(
              valueRef.current.val
            );
          }
        },
      });
    }


    

    setFirstD(firstDate);
    setSecondD(secondDate);
  });

    return (
      <>
        <div className={css.period}>
          <span className={css.firstDate} ref={secondDateRef}>
            {firstD}
          </span>
          <span className={css.secondDate}>{secondD}</span>
        </div>
      </>
    );
}
