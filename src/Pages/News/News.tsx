import "./style.scss";
import { NewsCards, NewsCardsProps } from "./Components";
import repasseValores from "./Assets/Images/repasseValores.svg";
import vendaDoces from "./Assets/Images/vendaDoces.svg";
import reformaGerminare from "./Assets/Images/reformaGerminare.svg";
import swiftTecnologia from "./Assets/Images/swiftTecnologia.svg";

export function News() {
  const newsElements: NewsCardsProps = {
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
          height: "400px",
          alt: "dasdsdf"
        },
      },

      {
        url: "/",
        title: "Dia das crianças na Germinare",
        section: "varejo",
        img: {
          src: vendaDoces,
          height: "300px",
          alt: "csa"
        },
      },
      {
        url: "/",
        title: "Repassando os valores Germinare",
        section: "escolaDaFamilia",
        img: {
          src: repasseValores,
          height: "100px",
          alt: "fdsdf"
        },
      },
    ],
  };

  return (
    <>
      <NewsCards news={newsElements.news} />
    </>
  );
}
