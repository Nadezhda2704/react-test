import { getCoordinatesOfPoints } from "./getCoordinateOfPoints";
import css from "./index.module.scss";

export const IndexSelector = ({ title, total, mainIndex, onIndexChange }) => {
  const arr = new Array(total).fill('');

  const size = 530;
  const points = getCoordinatesOfPoints(size / 2, total);
  console.log('points', points);
  console.log('points', points);

  console.log("arr", arr);

  return (
    <div className={css.wrap}>
      <div className={css.circle}>
        {arr.map((item, index) => (
          <div
            key={index}
            // button_active
            // className={css.button} className={`${
            //   index === mainIndex ? "button_active" : ""
            // }`}
            className={`${css.button} ${
              index == mainIndex ? "button_active" : ""
            }`}
            onClick={() => onIndexChange(index)}
            style={{
              left: `${points[index].x}px`,
              top: `${points[index].y}px`,
            }}
          >
            <div className={css.dot}></div>
            <div className={css.number}>{index + 1}</div>
          </div>
        ))}
      </div>

      <div className={css.title}>{title}</div>
    </div>
  );
};
