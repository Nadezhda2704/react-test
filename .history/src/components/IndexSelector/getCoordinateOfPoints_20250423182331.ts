export const getCoordinatesOfPoints = (r: number, n: number) => {
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n - ( 2 * Math.PI ) / n;
    const x = r * Math.cos(angle) + r;
    const y = r * Math.sin(angle) + r;
    points.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }
  return points;
}