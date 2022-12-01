const sideCountEl = 7;
const radiusEl = 200;
const cxEl = 200;
const cyEl = 200;
// const generateEl = document.querySelector('#js-generate');
// const polygonEl = document.querySelector('#js-polygon');
// const resultEl = document.querySelector('#js-result');
// const svgEl = document.querySelector('#js-svg');

function pts(sideCount, radius) {
  const angle = 360 / sideCount;
  const vertexIndices = range(sideCount);
  const offsetDeg = 90 - (180 - angle) / 2;
  const offset = degreesToRadians(offsetDeg);

  return vertexIndices.map((index) => {
    return {
      theta: offset + degreesToRadians(angle * index) + 15,
      r: radius,
    };
  });
}

function range(count) {
  return Array.from(Array(count).keys());
}

function degreesToRadians(angleInDegrees) {
  return (Math.PI * angleInDegrees) / 180;
}

function polygon([cx, cy], sideCount, radius) {
  return pts(sideCount, radius)
    .map(({ r, theta }) => [cx + r * Math.cos(theta), cy + r * Math.sin(theta)])
    .join(" ");
}

function generatePolygon() {
  const sideCount = +sideCountEl;
  const radius = +radiusEl;
  const cx = +cxEl;
  const cy = +cyEl;
  const s = 2 * radius + 50;

  const res = polygon([cx, cy], sideCount, radius);
  const viz = polygon([s / 2, s / 2], sideCount, radius);

  return(res);
  //   svgEl.setAttribute('viewBox', `0 0 ${s} ${s}`);
  //   polygonEl.setAttribute('points', viz);
  //   resultEl.innerText = `<polygon points="${res}" />`;
}

function convertPoints(points) {
  function convertToInt(value) {
    return Math.floor(parseFloat(value));
  }

  return points.split(" ").map((it) => {
    s = it.split(",");

    return {
      coords: {
        cx: convertToInt(s[0]),
        cy: convertToInt(s[1]),
      },
    };
  });
}

const points = generatePolygon();
console.log(points)
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(convertPoints(
    "6.67910432047708,251.25457339269357 39.3939539587453,80.8123413477957 193.04843203236987,0.12084725316793765 351.9375825717642,69.94243196857661 396.4146344727586,237.7000181025502 292.98746048738747,377.06872166508276 119.53883215649745,383.1010662701332"
))

readline.question(`Seguir para conversão? (y,n)`, (c) => {
  if (c === "y") {
    console.log(convertPoints(points));
  }
  readline.close();
});

