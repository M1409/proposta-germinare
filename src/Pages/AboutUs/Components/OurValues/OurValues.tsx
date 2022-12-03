export function Value({
  fill,
  label,
  rotate,
  translate,
  x = "60px",
  h = "30px",
}: {
  fill: string;
  label: string;
  rotate?: string;
  translate?: string;
  x?: string;
  h?: string;
}) {
  const relativeD = " M 0 90 c 90 -110 90 -120 220 10 q -110 -50 -220 -10";
  // const abosluteD=" M 0 90 C 90 -20 90 -30 220 100 Q 110 50 0 90 "
  // const relativeD=" M 0 90 c 90 -110 90 -120 220 10 q -110 -50 -220 -10 "
  const id = Math.random().toString();
  return (
    <g style={{ transform: `translate(${translate})` }}>
      <g style={{ transform: `rotate(${rotate})` }}>
        <path d={relativeD} fill={fill} />
        <path
          id={id}
          d={relativeD}
          fill={"none"}
          style={{ transform: `translate(0,${h})` }}
        />
        <text x={x}>
          <textPath xlinkHref={`#${id}`} style={{ fill: "white" }}>
            {label}
          </textPath>
        </text>
      </g>
    </g>
  );
}

function triangular(x: number) {
  return Math.max(1 - Math.abs(x), 0);
}

function findY(x: number) {
  if (x > 100) {
    return 200 - x;
  }
  return x;
}

// function renderDots(points: any) {
//   let x = 100;
//   let y = findY(x);

//   return (
//     <g>
//       <ConnectDots cx={`${x}px`} cy={`${y}px`} />
//       {points.slice(1).map((it: any) => {
//         x += 30;

//         return <ConnectDots cx={`${x}px`} cy={`${y}px`} />;
//       })}
//     </g>
//   );
// }

export function ConnectDots({ cx, cy, fill }: { cx: number; cy: number, fill: string }) {
  return <circle r="5px" cx={`${cx}px`} cy={`${cy}px`} fill={fill}></circle>;
}
const values = [
  {
    name: "Atitude de Dono",
    fill: "#1585B4",
    coords1: {
      cx: 290,
      cy: 243,
    },
    coords2: { cx: 6, cy: 251 }
  },
  {
    name: "Determinação",
    fill: "#79AB5C",
    coords1: {
      cx: 222,
      cy: 297,
    },
    coords2: { cx: 39, cy: 80 }
  },
  {
    name: "Disciplina",
    fill: "#EF933B",
    coords1: {
      cx: 137,
      cy: 278,
    },
    coords2: { cx: 193, cy: 0 }
  },
  {
    name: "Disponibilidade",
    fill: "#E86339",
    coords1: {
      cx: 100,
      cy: 200,
    },
    coords2: { cx: 351, cy: 69 }
  },
  {
    name: "Simplicidade",
    fill: "#46A261",
    coords1: {
      cx: 137,
      cy: 121,
    },
    coords2: { cx: 396, cy: 237 }
  },
  {
    name: "Franqueza",
    fill:"#D5202A",
    coords1: {
      cx: 222,
      cy: 102,
    },
    coords2: { cx: 292, cy: 377 }
  },
  {
    name: "Humildade",
    fill:"#1B9BC7",
    coords1: {
      cx: 290,
      cy: 156,
    },
    coords2: { cx: 119, cy: 383 }

  },
];



export function OurValues() {

    const p = `
    6.67910432047708,251.25457339269357 39.3939539587453,80.8123413477957 193.04843203236987,0.12084725316793765 351.9375825717642,69.94243196857661 396.4146344727586,237.7000181025502 292.98746048738747,377.06872166508276 119.53883215649745,383.1010662701332
    `
  return (
    <div>
      <svg width="400px" height="400px">
      <polygon fill="red" points={p} />
        <circle r="100px" cx="200px" cy="200px" fill="gray"></circle>
        {/* <polygon points="290,243 222,297 137,278 100,200 137,121 222,102 290,156" /> */}

        {
            values.map(it => <g><ConnectDots {...it.coords1} fill={it.fill}/><ConnectDots {...it.coords2} fill={it.fill}/></g>)
        }

{/* <polygon fill="lime" points="100.27962028188199,207.47300935864246 131.982726222908,126.6948128170174 214.90422661761738,101.11691737748714 286.60254037844385,149.99999999999994 293.08737486442044,236.53410243663944 229.4755174410904,295.5572805786141 143.66799419363778,282.62387743159945" /> */}

{/* <polygon fill="red" points={p} /> */}


        {/* <polygon points="290.0968867902419,243.38837391175582 222.25209339563142,297.49279121818233 137.65101981412664,278.183148246803 100,200 137.65101981412664,121.81685175319703 222.2520933956315,102.50720878181765 290.0968867902419,156.61162608824418" /> */}
        {/* <ConnectDots cx="174px" cy="104px"/>
        <ConnectDots cx="266px" cy="125px"/>
        <ConnectDots cx="300px" cy="190px"/>
        <ConnectDots cx="200px" cy="300px"/>
        <ConnectDots cx="100px" cy="200px"/> */}
        {/* {renderDots(values)} */}
        {/* <ConnectDots cx="165px" cy="100px" />
        <ConnectDots cx="200px" cy="100px" />
        <line
          x1="170px"
          y1="200px"
          x2="200px"
          y2="200px"
          style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
        ></line> */}
      </svg>
    </div>
    // <div>
    //   <div style={{ margin: "60px" }}></div>
    //   <div>
    //   <svg width="600px" height="600px">
    //     <Value fill="#1585B4" label="Atitude de dono" translate="50px" x="70px" h="26px"/>
    //     <Value
    //       fill="#79AB5C"
    //       label="Determinação"
    //       rotate="50deg"
    //       translate="250px, -50px"

    //     />
    //     <Value
    //       fill="#EF933B"
    //       label="Disciplina"
    //       rotate="108deg"
    //       translate="415px, 140px"
    //       x="90px"
    //       h="25px"
    //     />
    //     <Value
    //       fill="#E86339"
    //       label="Disponibilidade"
    //       rotate="155deg"
    //       translate="415px, 335px"
    //     />
    //     <Value
    //       fill="#46A261"
    //       label="Simplicidade"
    //       rotate="208deg"
    //       translate="230px, 460px"
    //     />
    //     <Value
    //       fill="#D5202A"
    //       label="Franqueza"
    //       rotate="258deg"
    //       translate="28px, 412px"
    //     />
    //     <Value
    //       fill="#1B9BC7"
    //       label="Humildade"
    //       rotate="308deg"
    //       translate="-50px, 195px"
    //     />
    //   </svg>
    //   <img src="" alt="" />
    //   </div>

    //   <svg width="220px" height="100px">
    //     <path
    //       d="
    //             M 0 90
    //             C 90 -20 90 -30 220 100
    //             Q 110 50 0 90 "
    //       fill="#46A261"
    //     />
    //   </svg>
    //   <div style={{ margin: "20px" }}></div>
    //   <svg width="220px" height="100px">
    //     <path
    //       d="

    //             M 0 90
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //       fill="blue"
    //       opacity="0.3"
    //     />

    //     <path
    //       d="
    //             M 0 90
    //             C 90 -20 90 -30 220 100
    //             Q 110 50 0 90 "
    //       fill="red"
    //       opacity="0.3"
    //     />
    //   </svg>
    //   <div style={{ margin: "180px" }}></div>
    //   <svg width="500px" height="500px">
    //     <g>
    //       <path
    //         id="owner-atitude-color"
    //         d="
    //             M 60 120
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //         fill="#1585B4"
    //         style={{ transform: "translate(0, 5px)" }}
    //       />
    //       <path
    //         id="owner-atitude-text"
    //         d="
    //             M 60 120
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //         fill="none"
    //         style={{ transform: "translate(5px, 30px)" }}
    //       />
    //       <path
    //         id="determination-color"
    //         d="
    //             M 180 40
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //         fill="#79AB5C"
    //         strokeWidth="5px"
    //         style={{ transform: "rotate(52deg) translate(0, -180px)" }}
    //       />
    //       <path
    //         id="determination-text"
    //         d="
    //         M 180 40
    //         c 90 -90 90 -120 220 10
    //         q -110 -50 -220 -10 "
    //         fill="none"
    //         style={{ transform: "rotate(52deg) translate(0px, -160px)" }}
    //       />
    //     </g>
    //     <g style={{ transform: "translate(490px, 160px)" }}>
    //       <g style={{ transform: "rotate(105deg)" }}>
    //         <path
    //           d="
    //             M 0 120
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //           fill="#EF933B"
    //         />
    //         <path
    //           d="
    //             M 120 40
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //           fill="#E86339"
    //           strokeWidth="5px"
    //           style={{ transform: "rotate(52deg) translate(0px, -130px)" }}
    //         />
    //       </g>
    //     </g>

    //     <g style={{ transform: "translate(30px, 430px)" }}>
    //       <g style={{ transform: "rotate(260deg)" }}>
    //         <path
    //           d="
    //             M 0 120
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //           fill="#D5202A"
    //         />
    //         <path
    //           d="
    //             M 120 40
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //           fill="#1B9BC7"
    //           strokeWidth="5px"
    //           style={{ transform: "rotate(52deg) translate(0px, -130px)" }}
    //         />
    //       </g>
    //     </g>
    //     <g style={{ transform: "translate(270px, 530px)" }}>
    //       <path
    //         d="
    //             M 0 120
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //         fill="#46A261"
    //         style={{ transform: "rotate(205deg)" }}
    //       />
    //     </g>

    //     {/* <path d="
    //             M 100 30
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //             fill="#79AB5C"

    //             style={{transform: "rotate(25deg)"}}

    //             /> */}
    //     {/* <path d="
    //             M 170 -80
    //             c 90 -110 90 -120 220 10
    //             q -110 -50 -220 -10 "
    //             fill="#79AB5C" style={{transform: "rotate(32deg)"}} /> */}

    //     <text x="60px">
    //       <textPath xlinkHref="#determination-text" style={{ fill: "white" }}>
    //         Determinação
    //       </textPath>
    //     </text>
    //     <text x="60px">
    //       <textPath xlinkHref="#owner-atitude-text" style={{ fill: "white" }}>
    //         Atitude de dono
    //       </textPath>
    //     </text>
    //   </svg>
    // </div>
  );
}

const a = ["x", "y"];
