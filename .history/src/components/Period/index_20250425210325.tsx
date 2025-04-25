import React from 'react';
import css from './index.module.scss';
import gsap from 'gsap';

export const Period = ({ firstDate, secondDate }) => {
  
  const [firstD, setFirstD] = React.useState(1999);
  const [secondD, setSecondD] = React.useState(1999);

  const firstElement = document.getElementById('firstDate');
  const secondElement = document.getElementById('secondDate');

  React.useEffect(() => {
    if (firstD !== firstDate && secondD !== secondDate) {
      gsap.from(firstElement, {
        textContent: firstD,
        duration: 2,
        snap: { textContent: 1 },
      });

      gsap.from(secondElement, {
        textContent: secondD,
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
        <span className={css.secondDate} id="secondDate">
          {secondDate}
        </span>
      </div>
    </>
  );
};
