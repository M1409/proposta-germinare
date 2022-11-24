import styles from "./Card.module.scss";
import { iretail, icomputer, ifamily, ifinances } from "./Assets/Images";
import { Link } from "react-router-dom";

export type Sections =
  | "germinare"
  | "escolaDaFamilia"
  | "varejo"
  | "tecnologia"
  | "financas";

export type SectionsInfo = Record<
  Sections,
  { name: string; color: string; icon: string }
>;

export type CardProps = {
  url: string;
  title: string;
  section: Sections;
  img: {
    src: string;
    alt: string;
    height?: string;
  };
} & React.HTMLProps<HTMLDivElement>;;

const sections: SectionsInfo = {
  varejo: {
    name: "Varejo",
    color: "#E86339",
    icon: iretail,
  },
  germinare: {
    name: "Germinare",
    color: "#2E3092",
    icon: ifamily,
  },
  escolaDaFamilia: {
    name: "Escola da Família",
    color: "#2E3092",
    icon: ifamily,
  },
  tecnologia: {
    name: "Tecnologia",
    color: "#11C76F",
    icon: icomputer,
  },
  financas: {
    name: "Finanças",
    color: "#008646",
    icon: ifinances,
  },
};

export function Card({
  url,
  title,
  section,
  img: { src, alt, height },
  ...props
}: CardProps) {
  const { color, name, icon } = sections[section];
  return (
    <div {...props}>
      <img
        className={styles.NewsSectionImages}
        src={src}
        alt={alt}
        style={{ height: height }}
      />
      <div className={styles.NewsSectionDivTexts}>
        <div className={styles.NewsSectionArea}>
          <img src={icon} />
          <p style={{ color: color }}>{name}</p>
        </div>
        <Link to={url} >
          <p className={styles.NewsSectionTextTitle}>{title}</p>
        </Link>
      </div>
    </div>
  );
}
