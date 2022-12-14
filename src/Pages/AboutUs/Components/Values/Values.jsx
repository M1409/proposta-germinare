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
      "\tComprometido com o resultado, conhece com profundidade aquilo que faz e tem a vis??o do todo. Age com obstina????o, disciplina e foco no detalhe. ?? m??o na massa, busca sempre ser o melhor naquilo que faz e n??o desiste nunca. Est?? sempre dispon??vel e d?? o exemplo. Indigna-se, n??o se conforma, n??o fica quieto nem se omite quando v?? algo que n??o funciona bem ou possa ser melhorado. ?? atento aos gastos e ?? economia de cada centavo. Est?? engajado com a cultura da organiza????o.",
  },
  {
    name: "Determina????o",
    fill: "#79AB5C",
    coords: {},
    x: 45,
    description:
      "\t?? obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas em prol de um objetivo comum. Tem senso de urg??ncia, atitude de dono e n??o desiste nunca.",
  },
  {
    name: "Disciplina",
    fill: "#EF933B",
    coords: {},
    x: 55,
    description:
      "\tCumpre o combinado, ?? pontual com hor??rio e seus compromissos. Executa suas tarefas de forma disciplinada. ?? focado, pragm??tico, otimiza o tempo, atividades e recursos. Entrega resultados, n??o cria justificativas e desculpas.",
  },
  {
    name: "Disponibilidade",
    fill: "#E86339",
    coords: {},
    x: 40,
    description:
      "\t?? receptivo, acess??vel, dispon??vel, n??o tem dia e n??o tem hora, est?? sempre pronto e tem o trabalho como prioridade. Est?? aberto ao novo, ??s mudan??as e motivado para novos desafios.",
  },
  {
    name: "Simplicidade",
    fill: "#46A261",
    coords: {},
    x: 48,
    description:
      "\tFaz as coisas acontecerem de forma simples e pr??tica, ?? m??o na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas.",
  },
  {
    name: "Franqueza",
    fill: "#D5202A",
    coords: {},
    x: 50,
    description:
      "\t?? direto, sincero, verdadeiro e transparente em suas rela????es, sempre com respeito, de forma positiva, agregadora e acolhedora. N??o se omite, expressa suas opini??es mesmo quando contr??ria aos demais. Sabe dizer n??o.",
  },
  {
    name: "Humildade",
    fill: "#1B9BC7",
    coords: {},
    x: 55,
    description:
      "\tSabe ouvir, ?? atencioso, considera a opini??o dos outros, n??o importa quem fez, importa que fizemos. N??o tem vergonha de perguntar nem de dizer que n??o sabe. N??o ?? arrogante nem vaidoso e age com respeito. N??o se preocupa com status nem se acha dono da verdade. Prioriza o n??s e n??o o eu.",
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
    description: `\tOs valores da J&F s??o o mais fiel espelho dos valores, comportamentos e atitudes dos fundadores. Representam o que h?? de mais importante e relevante, e o que os diferencia sob o ponto de vista de atitudes e comportamentos. Portanto, deixam claro o que a J&F espera de cada l??der.
    \tEssa clareza permite aos l??deres formar verdadeiros times compostos de pessoas regidas pelos mesmos valores, comportamentos e atitudes. ?? importante garantir que os colaboradores se reconhe??am nesses valores. Afinal, n??o se muda os valores de algu??m.
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
        <Typography variant='TypographySectionTitle' color='#2E3092' width='250px' >{currentValue.name}</Typography>
        <Typography variant='TypographyParagraph' color='#323232' width='700px' style={{whiteSpace:"pre-wrap"}}>{currentValue.description}</Typography>
      </div>
    </div>
  );
}
