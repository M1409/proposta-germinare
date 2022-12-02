import { useRef, useState } from "react";
import styles from "./Values.module.scss";
import { Typography } from "../../../../Components";

export default function ConnectDots({ cx, cy, fill, brightness = 100 }) {
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
  coords: { start, end, curve1, curve2, curve3, curve4, curve5 },
  fill,
  name,
  description,
  x = 30,
  onClick,
}) {
  const id = Math.random().toString();
  const relativeD = ` M ${start.cx} ${start.cy} C ${curve1.cx} ${curve1.cy} ${curve2.cx} ${curve2.cy} ${end.cx} ${end.cy} Q ${curve3.cx} ${curve3.cy} ${start.cx} ${start.cy} Z`;
  const relativeDText = ` M ${start.cx} ${start.cy} C ${curve4.cx} ${curve4.cy} ${curve5.cx} ${curve5.cy} ${end.cx} ${end.cy} `;

  return (
    <g onClick={() => {onClick({ name: name, description: description });}}>
      <path d={relativeD} fill={fill} />
      <path d={relativeDText} fill="none" id={id} />
      <text x={`${x}px`}>
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
    description:
      "\tComprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo que faz e não desiste nunca. Está sempre disponível e dá o exemplo. Indigna-se, não se conforma, não fica quieto nem se omite quando vê algo que não funciona bem ou possa ser melhorado. É atento aos gastos e à economia de cada centavo. Está engajado com a cultura da organização.",
  },
  {
    name: "Determinação",
    fill: "#79AB5C",
    coords: {},
    x: 45,
    description:
      "\tÉ obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas em prol de um objetivo comum. Tem senso de urgência, atitude de dono e não desiste nunca.",
  },
  {
    name: "Disciplina",
    fill: "#EF933B",
    coords: {},
    x: 55,
    description:
      "\tCumpre o combinado, é pontual com horário e seus compromissos. Executa suas tarefas de forma disciplinada. É focado, pragmático, otimiza o tempo, atividades e recursos. Entrega resultados, não cria justificativas e desculpas.",
  },
  {
    name: "Disponibilidade",
    fill: "#E86339",
    coords: {},
    x: 40,
    description:
      "\tÉ receptivo, acessível, disponível, não tem dia e não tem hora, está sempre pronto e tem o trabalho como prioridade. Está aberto ao novo, às mudanças e motivado para novos desafios.",
  },
  {
    name: "Simplicidade",
    fill: "#46A261",
    coords: {},
    x: 48,
    description:
      "\tFaz as coisas acontecerem de forma simples e prática, é mão na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas.",
  },
  {
    name: "Franqueza",
    fill: "#D5202A",
    coords: {},
    x: 50,
    description:
      "\tÉ direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões mesmo quando contrária aos demais. Sabe dizer não.",
  },
  {
    name: "Humildade",
    fill: "#1B9BC7",
    coords: {},
    x: 55,
    description:
      "\tSabe ouvir, é atencioso, considera a opinião dos outros, não importa quem fez, importa que fizemos. Não tem vergonha de perguntar nem de dizer que não sabe. Não é arrogante nem vaidoso e age com respeito. Não se preocupa com status nem se acha dono da verdade. Prioriza o nós e não o eu.",
  },
];

const coordsConfigurations = [
  {
    name: "start",
    radius: 100,
    c: 0,
  },
  {
    name: "end",
    radius: 160,
    c: 1.4,
  },
  {
    name: "curve1",
    radius: 180,
    c: 0.6,
  },
  {
    name: "curve2",
    radius: 200,
    c: 0.8,
  },
  {
    name: "curve3",
    radius: 140,
    c: 1,
  },
  {
    name: "curve4",
    radius: 200,
    c: 1,
  },
  {
    name: "curve5",
    radius: 150,
    c: 1.6,
  },
];

function defineCoordinates([cx, cy], sideNumber, configurations) {
  configurations.forEach((coord) => {
    convertPoints(polygon([cx, cy], sideNumber, coord.radius, coord.c)).forEach(
      (it, index) => {
        values[index].coords[coord.name] = it;
      }
    );
  });
}

defineCoordinates([200, 200], 7, coordsConfigurations);

export function Values() {
  const descriptionContainerRef = useRef(null)
  const [currentValue, setCurrentValue] = useState({
    name: "Nossos valores",
    description: `\tOs valores da J&F são o mais fiel espelho dos valores, comportamentos e atitudes dos fundadores. Representam o que há de mais importante e relevante, e o que os diferencia sob o ponto de vista de atitudes e comportamentos. Portanto, deixam claro o que a J&F espera de cada líder.
    \tEssa clareza permite aos líderes formar verdadeiros times compostos de pessoas regidas pelos mesmos valores, comportamentos e atitudes. É importante garantir que os colaboradores se reconheçam nesses valores. Afinal, não se muda os valores de alguém.
    `,
  });

  function changeCurrentValue({name, description}){
    descriptionContainerRef.current.style.opacity = 0;
    setTimeout(() => {
      setCurrentValue({name, description})
      descriptionContainerRef.current.style.opacity = 100;
    },500)
  }

  return (
    <div className={styles.ValueContainer}>
      <div>
        <svg className={styles.ValueSvg} viewBox="0 0 400 400">
          {values.map((it) => (
            <ValueConfig {...it} onClick={changeCurrentValue} />
          ))}
          <text fontSize="20px">
            <tspan x="150" y="200">
              Clique em
            </tspan>
            <tspan x="160" y="220">
              um valor
            </tspan>
          </text>
        </svg>
      </div>
      <div ref={descriptionContainerRef} className={styles.ValueDescriptionContainer}>
        <Typography variant='TypographySectionTitle' color='#2E3092' width='250px'>{currentValue.name}</Typography>
        <Typography variant='TypographyParagraph' color='#323232' width='700px'>{currentValue.description}</Typography>
      </div>
    </div>
  );
}
