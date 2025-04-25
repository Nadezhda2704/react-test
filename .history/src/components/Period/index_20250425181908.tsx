import React from "react";
import css from "./index.module.scss";

export const Period = ({firstDate, secondDate}) => {
  React.useEffect(() => {
    console.log("firstDate", firstDate);
    console.log("secondDate", secondDate);
  });

    return (
      <>
        <div className={css.period}>
            <span className={css.firstDate}>{firstDate}</span>
            <span className={css.secondDate}>{secondDate}</span>
        </div>
      </>
    );
}
