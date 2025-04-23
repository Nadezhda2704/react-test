import { getCoordinatesOfPoints } from "./getCoordinateOfPoints";
import css from "./index.module.scss";

export const IndexSelector = ({ title, total, mainIndex, onIndexChange }) => {
  const arr = new Array(total).fill('');

  const size = 530;
  const points = getCoordinatesOfPoints(size / 2, total);

  return (
    <div className={css.wrap}>
      <div className={css.circle}>
        {arr.map((item, index) => (
          <div
            key={index}
            className={`${css.button} ${
              index == mainIndex ? css.buttonActive : ""
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

      <div
        className={css.title}
        style={{
          left: `${points[0].x}px`,
          top: `${points[0].y}px`,
        }}
      >
        {title}
      </div>
    </div>
  );
};
