import css from "./index.module.scss";

export const IndexSelector = ({ title, mainIndex, total }) => {
  const arr = new Array(total).fill('');

  console.log("arr", arr);

  return (
    <>
      <div className={css.circle}>
        {arr.map((item, index) => <button>{index}</button>)}
        </div>

      <div className={css.title}>{title}</div>
    </>
  );
};
