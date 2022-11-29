export function ConnectDots({ cx, cy, fill, brightness = 100 }) {
  return (
    <circle
      r="5px"
      cx={`${cx}px`}
      cy={`${cy}px`}
      fill={fill}
      style={{ filter: `brightness(${brightness}%)` }}
    />
  );
}

export function ValueConfig({
  start,
  end,
  curve1,
  curve2,
  curve3,
  curve4,
  curve5,
  fill,
  label,
  x = 30,
}) {
  const id = Math.random().toString();
  const relativeD = ` M ${start.cx} ${start.cy} C ${curve1.cx} ${curve1.cy} ${curve2.cx} ${curve2.cy} ${end.cx} ${end.cy} Q ${curve3.cx} ${curve3.cy} ${start.cx} ${start.cy} Z`;
  const relativeDText = ` M ${start.cx} ${start.cy} C ${curve4.cx} ${curve4.cy} ${curve5.cx} ${curve5.cy} ${end.cx} ${end.cy} `;

  return (
    <g>
      <path d={relativeD} fill={fill} />
      <path d={relativeDText} fill="none" id={id} />
      <text x={`${x}px`}>
        <textPath
          xlinkHref={`#${id}`}
          style={{ fill: "white", fontSize: "13.5px" }}
        >
          {label}
        </textPath>
      </text>
    </g>
  );
}

function pts(sideCount, radius, c = 0) {
  const angle = 360 / sideCount;
  const vertexIndices = range(sideCount);
  const offsetDeg = 90 - (180 - angle) / 2;
  const offset = degreesToRadians(offsetDeg);

  return vertexIndices.map((index) => {
    return {
      theta: offset + degreesToRadians(angle * index) + c,
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

function polygon([cx, cy], sideCount, radius, c = 0) {
  return pts(sideCount, radius, c)
    .map(({ r, theta }) => [cx + r * Math.cos(theta), cy + r * Math.sin(theta)])
    .join(" ");
}

function convertPoints(points) {
  function convertToInt(value) {
    return Math.floor(parseFloat(value));
  }

  return points.split(" ").map((it) => {
    let s = it.split(",");

    return {
      cx: convertToInt(s[0]),
      cy: convertToInt(s[1]),
    };
  });
}

let values = [
  {
    name: "Atitude de Dono",
    fill: "#1585B4",
    coords: {},
    x: 35,
  },
  {
    name: "Determinação",
    fill: "#79AB5C",
    coords: {},
    x: 45,
  },
  {
    name: "Disciplina",
    fill: "#EF933B",
    coords: {},
    x: 55,
  },
  {
    name: "Disponibilidade",
    fill: "#E86339",
    coords: {},
    x: 40,
  },
  {
    name: "Simplicidade",
    fill: "#46A261",
    coords: {},
    x: 48,
  },
  {
    name: "Franqueza",
    fill: "#D5202A",
    coords: {},
    x: 50,
  },
  {
    name: "Humildade",
    fill: "#1B9BC7",
    coords: {},
    x: 55,
  },
];

convertPoints(polygon([200, 200], 7, 100)).forEach((it, index) => {
  values[index].coords["start"] = it;
});

convertPoints(polygon([200, 200], 7, 160, 1.4)).forEach((it, index) => {
  values[index].coords["end"] = it;
});

convertPoints(polygon([200, 200], 7, 180, 0.6)).forEach((it, index) => {
  values[index].coords["curve1"] = it;
});

convertPoints(polygon([200, 200], 7, 200, 0.8)).forEach((it, index) => {
  values[index].coords["curve2"] = it;
});

convertPoints(polygon([200, 200], 7, 140, 1.00)).forEach((it, index) => {
  values[index].coords["curve3"] = it;
});

convertPoints(polygon([200, 200], 7, 200, 1)).forEach((it, index) => {
  values[index].coords["curve4"] = it;
});

convertPoints(polygon([200, 200], 7, 150, 1.6)).forEach((it, index) => {
  values[index].coords["curve5"] = it;
});

export function Values() {
  

  return (
      <svg width="400px" height="400px" >
        {values.map((it) => (
          <ValueConfig
            {...it.coords}
            fill={it.fill}
            label={it.name}
            x={it?.x}
          />
        ))}
        <text  fontSize="20px">
          <tspan x="150" y="200">Clique em</tspan>
          <tspan  x="160" y="220">um valor</tspan>
        </text>
      </svg>
  );
}
