import "./style.scss";
import { NewsCards, NewsCardProps } from "./Components";
import {
  repasseValores,
  vendaDoces,
  reformaGerminare,
  swiftTecnologia,
} from "./Assets/Images";

const latestNews: NewsCardProps[] = [
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
      height: "400px",
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
      height: "100px",
      alt: "fdsdf",
    },
  },
];

export function News() {
  return (
    <>
      <NewsCards news={latestNews} />
    </>
  );
}
