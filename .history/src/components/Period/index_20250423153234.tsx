import css from "./index.module.scss";

export const MainCarouselDesktop = ({firstDate, secondDate}) => {
    return (
      <>
        <div className={css.period}>
            <span className={css.firstDate}>{type.firstDate}</span>
            <span className={css.secondDate}>{type.secondDate}</span>
        </div>
      </>
    );
}
