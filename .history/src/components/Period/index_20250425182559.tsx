import React from "react";
import css from "./index.module.scss";

export const Period = ({firstDate, secondDate}) => {

  const [firstD, setFirstD] = React.useState(1999);
  const [secondD, setSecondD] = React.useState(1999);


  React.useEffect(() => {
    console.log("firstDate", firstDate);
    console.log("secondDate", secondDate);
  });

    return (
      <>
        <div className={css.period}>
          <span className={css.firstDate}>{firstD}</span>
          <span className={css.secondDate}>{secondD}</span>
        </div>
      </>
    );
}
