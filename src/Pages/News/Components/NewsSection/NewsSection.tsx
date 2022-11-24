import styles from "./NewsSection.module.scss";
import { iretail, icomputer, ifamily, ifinances } from "./Assets/Images";

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

export type NewsCardProps = {
  url: string;
  title: string;
  section: Sections;
  img: {
    src: string;
    alt: string;
    height?: string;
  };
};

export type NewsCardsProps = {
  news: NewsCardProps[];
};

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

export function NewsCard({
  url,
  title,
  section,
  img: { src, alt, height },
}: NewsCardProps) {
  const { color, name, icon } = sections[section];
  return (
    <div>
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
        <a href={url}>
          <p className={styles.NewsSectionTextTitle}>{title}</p>
        </a>
      </div>
    </div>
  );
}

export function NewsCards({ news, ...props }: NewsCardsProps) {
  const firstColumn = news.filter((_, index) => (index % 2) - 1);
  const secondColumn = news.filter((_, index) => index % 2);

  return (
    <div className={styles.NewsContainerWrapper}>
      <div className={styles.NewsSectionCardsContent}>
        {firstColumn.map((news) => (
          <NewsCard {...news} />
        ))}
      </div>
      <div className={styles.NewsSectionCardsContent}>
        {secondColumn.map((news) => (
          <NewsCard {...news} />
        ))}
      </div>
    </div>
  );
}
