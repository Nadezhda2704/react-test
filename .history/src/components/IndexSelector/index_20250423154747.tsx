import css from "./index.module.scss";

export const IndexSelector = ({ title, mainIndex, total }) => {
  return (
    <>
      <div className={css.circle}></div>

      <div className={css.title}>{title}</div>
    </>
  );
};
