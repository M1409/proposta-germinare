import styles from "./News.module.scss";
import { NewsSection, NewsSectionProps } from "./Components";
import {
  repasseValores,
  vendaDoces,
  reformaGerminare,
  swiftTecnologia,
  banner,
} from "./Assets/Images";
import { WelcomeBanner, ContentSpacer } from "../../Components";

const latestNews: NewsSectionProps = {
  title: "Últimas notícias",
  news: [
    {
      url: "/",
      title: "Hackaton das lojas Swift",
      section: "tecnologia",
      img: {
        src: swiftTecnologia,
        height: "200px",
        alt: "sdadas",
      },
    },

    {
      url: "/",
      title: "Reforma do Instituto",
      section: "germinare",
      img: {
        src: reformaGerminare,
        height: "250px",
        alt: "dasdsdf",
      },
    },

    {
      url: "/",
      title: "Dia das crianças na Germinare",
      section: "varejo",
      img: {
        src: vendaDoces,
        height: "300px",
        alt: "csa",
      },
    },
    {
      url: "/",
      title: "Repassando os valores Germinare",
      section: "escolaDaFamilia",
      img: {
        src: repasseValores,
        height: "250px",
        alt: "fdsdf",
      },
    },
  ],
};

const allNews: NewsSectionProps = {...latestNews, title: "Banco de notícias"}

export function News() {
  return (
    <>
      <WelcomeBanner
        bannerSrc={banner}
        title="Um novo aprendizado a cada dia."
        titleWidth="590px"
      />
      <ContentSpacer>
        <NewsSection {...latestNews} style={{marginBottom: "60px"}}/>
        <NewsSection {...allNews} />
      </ContentSpacer>
    </>
  );
}
