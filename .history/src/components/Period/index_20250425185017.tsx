import React from "react";
import css from "./index.module.scss";
import { TweenLite } from "gsap";

export const Period = ({firstDate, secondDate}) => {

  const [firstD, setFirstD] = React.useState(1999);
  const [secondD, setSecondD] = React.useState(1999);

  const firstElement = document.getElementById("firstDate");


  React.useEffect(() => {

    if (firstD !== firstDate && secondD !== secondDate) {
      console.log("firstD", firstD);
      console.log("secondD", secondD);

      console.log("firstDate", firstDate);
      console.log("secondDate", secondDate);

      gsap.to({ d: 110 }, 2, {
        d: 90,
        roundProps: "d",
        ease: Linear.easeNone,
        onUpdate: function () {
          $("#gsapBox").html(this.target.d);
        },
      });
    }


    

    setFirstD(firstDate);
    setSecondD(secondDate);
  });

    return (
      <>
        <div className={css.period}>
          <span className={css.firstDate} id="firstDate">{firstD}</span>
          <span className={css.secondDate}>{secondD}</span>
        </div>
      </>
    );
}
