import css from "./index.module.scss";

export const IndexSelector = ({ title, mainIndex, total }) => {
  const arr = new Array(total).map((item, index) => index)

  return (
    <>
      <div className={css.circle}>
        {}
      </div>

      <div className={css.title}>{title}</div>
    </>
  );
};
