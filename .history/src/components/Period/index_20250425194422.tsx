import React from "react";
import css from "./index.module.scss";
import gsap from "gsap";

export const Period = ({firstDate, secondDate}) => {

  const [firstD, setFirstD] = React.useState(1999);
  const [secondD, setSecondD] = React.useState(1999);

  const firstElement = document.getElementById("firstDate");

  // const changeObj = (selector: string, obj: Obj) => {
  //   const el: Element | null = document.querySelector(selector)!;
  //   // eslint-disable-next-line no-constant-binary-expression, valid-typeof
  //   if (typeof obj !== null) {
  //     el.innerHTML = "" + parseInt(obj.index.toString(), 10);
  //   }
  // };


  React.useEffect(() => {

    if (firstD !== firstDate && secondD !== secondDate) {
      console.log("firstD", firstD);
      console.log("secondD", secondD);

      console.log("firstDate", firstDate);
      console.log("secondDate", secondDate);

      gsap.from(firstElement, {
        textContent: firstD,
        duration: 2,
        snap: { textContent: 1 },
      });

       gsap.from(firstElement, {
         textContent: firstD,
         duration: 2,
         snap: { textContent: 1 },
       });

       setFirstD(firstDate);
       setSecondD(secondDate);
    }
  });

    return (
      <>
        <div className={css.period}>
          <span className={css.firstDate} id="firstDate">
            {firstDate}
          </span>
          <span className={css.secondDate}>{secondDate}</span>
        </div>
      </>
    );
}
