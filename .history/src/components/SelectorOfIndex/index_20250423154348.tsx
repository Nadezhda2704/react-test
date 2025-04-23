import css from "./index.module.scss";

export const Period = ({ firstDate, secondDate }) => {
  return (
    <>
      <div className={css.period}>
        <span className={css.firstDate}>{firstDate}</span>
        <span className={css.secondDate}>{secondDate}</span>
      </div>
    </>
  );
};
