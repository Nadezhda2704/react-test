export default getCoordinatesOfPoints = (r, n) => {
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    points.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }
  return points;
}