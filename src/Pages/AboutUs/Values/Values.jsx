import { useState } from "react";

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
  coords: {
    start,
    end,
    curve1,
    curve2,
    curve3,
    curve4,
    curve5,
  },
  fill,
  name,
  description,
  x = 30,
  setCurrentValue
}) {
  const id = Math.random().toString();
  const relativeD = ` M ${start.cx} ${start.cy} C ${curve1.cx} ${curve1.cy} ${curve2.cx} ${curve2.cy} ${end.cx} ${end.cy} Q ${curve3.cx} ${curve3.cy} ${start.cx} ${start.cy} Z`;
  const relativeDText = ` M ${start.cx} ${start.cy} C ${curve4.cx} ${curve4.cy} ${curve5.cx} ${curve5.cy} ${end.cx} ${end.cy} `;

  return (
    <g>
      <path d={relativeD} fill={fill} />
      <path d={relativeDText} fill="none" id={id} />
      <text x={`${x}px`} onClick={()=>{setCurrentValue({name:name, description: description})}}>
        <textPath
          xlinkHref={`#${id}`}
          style={{ fill: "white", fontSize: "13.5px" }}
        >
          {name}
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
    description: "Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo que faz e não desiste nunca. Está sempre disponível e dá o exemplo. Indigna-se, não se conforma, não fica quieto nem se omite quando vê algo que não funciona bem ou possa ser melhorado. É atento aos gastos e à economia de cada centavo. Está engajado com a cultura da organização."
  },
  {
    name: "Determinação",
    fill: "#79AB5C",
    coords: {},
    x: 45,
    description: "É obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas em prol de um objetivo comum. Tem senso de urgência, atitude de dono e não desiste nunca."
  },
  {
    name: "Disciplina",
    fill: "#EF933B",
    coords: {},
    x: 55,
    description: "Cumpre o combinado, é pontual com horário e seus compromissos. Executa suas tarefas de forma disciplinada. É focado, pragmático, otimiza o tempo, atividades e recursos. Entrega resultados, não cria justificativas e desculpas."
  },
  {
    name: "Disponibilidade",
    fill: "#E86339",
    coords: {},
    x: 40,
    description: "É receptivo, acessível, disponível, não tem dia e não tem hora, está sempre pronto e tem o trabalho como prioridade. Está aberto ao novo, às mudanças e motivado para novos desafios."
  },
  {
    name: "Simplicidade",
    fill: "#46A261",
    coords: {},
    x: 48,
    description: "Faz as coisas acontecerem de forma simples e prática, é mão na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas."
  },
  {
    name: "Franqueza",
    fill: "#D5202A",
    coords: {},
    x: 50,
    description: "É direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões mesmo quando contrária aos demais. Sabe dizer não."
  },
  {
    name: "Humildade",
    fill: "#1B9BC7",
    coords: {},
    x: 55,
    description: "Sabe ouvir, é atencioso, considera a opinião dos outros, não importa quem fez, importa que fizemos. Não tem vergonha de perguntar nem de dizer que não sabe. Não é arrogante nem vaidoso e age com respeito. Não se preocupa com status nem se acha dono da verdade. Prioriza o nós e não o eu."
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
  const [currentValue, setCurrentValue] = useState({
    name: "Nossos valores",
    description: ""
  })
  return (
    <div style={{display: "flex", margin: "0 auto", justifyContent: "space-around"}}>
      <svg width="400px" height="400px" >
        {values.map((it) => (
          <ValueConfig
            {...it}
            setCurrentValue={setCurrentValue}
          />
        ))}
        <text  fontSize="20px">
          <tspan x="150" y="200">Clique em</tspan>
          <tspan  x="160" y="220">um valor</tspan>
        </text>
      </svg>
      <div style={{display: "flex", flexDirection: "column", width: "400px"}}>
          <h1>{currentValue.name}</h1>
          <p>{currentValue.description}</p>
      </div>
    </div>
  );
}
