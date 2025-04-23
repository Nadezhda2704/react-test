import { getCoordinatesOfPoints } from "./getCoordinateOfPoints";
import css from "./index.module.scss";

export const IndexSelector = ({ title, total, mainIndex, onIndexChange }) => {
  const arr = new Array(total).fill('');

  const size = 530;
  const points = getCoordinatesOfPoints(size / 2, total);

  console.log("arr", arr);

  return (
    <>
      <div className={css.circle}>
        {arr.map((item, index) => (
          <div 
            className={css.button} 
            onClick={() => onIndexChange(index)}
            style={{ left: `${points[index][0]}px`, top: `${points[index][1]}px` }}
            >{index}</div>
        ))}
      </div>

      <div className={css.title}>{title}</div>
    </>
  );
};
