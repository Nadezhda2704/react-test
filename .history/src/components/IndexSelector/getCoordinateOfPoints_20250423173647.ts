export const getCoordinatesOfPoints = (r: number, n: number) => {
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    const x = r * Math.cos(angle) + r/2;
    const y = r * Math.sin(angle) + r / 2;
    points.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }
  return points;
}