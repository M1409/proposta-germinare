import {
  repasseValores,
  vendaDoces,
  reformaGerminare,
  swiftTecnologia,
} from "./Images";

export const latestNews = {
  title: "Últimas notícias",
  news: [
    {
      id: Math.round(Math.random() * 10),
      title: "Hackaton das lojas Swift",
      section: "tecnologia",
      img: {
        src: swiftTecnologia,
        height: "200px",
        alt: "sdadas",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi veniam accusantium dolorum et, autem possimus impedit omnis deserunt facere odio esse, voluptatem expedita, ab commodi ad itaque! Esse, quas.",
      publishedAt: "30-11-2022",
    },
    {
      id: Math.round(Math.random() * 10),
      title: "Reforma do Instituto",
      section: "germinare",
      img: {
        src: reformaGerminare,
        height: "250px",
        alt: "dasdsdf",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi veniam accusantium dolorum et, autem possimus impedit omnis deserunt facere odio esse, voluptatem expedita, ab commodi ad itaque! Esse, quas.",
      publishedAt: "30-11-2022",
    },
    {
      id: Math.round(Math.random() * 10),
      title: "Dia das crianças na Germinare",
      section: "varejo",
      img: {
        src: vendaDoces,
        height: "300px",
        alt: "csa",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi veniam accusantium dolorum et, autem possimus impedit omnis deserunt facere odio esse, voluptatem expedita, ab commodi ad itaque! Esse, quas.",
      publishedAt: "30-11-2022",
    },
    {
      id: Math.round(Math.random() * 10),
      title: "Repassando os valores Germinare",
      section: "escolaDaFamilia",
      img: {
        src: repasseValores,
        height: "250px",
        alt: "fdsdf",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi veniam accusantium dolorum et, autem possimus impedit omnis deserunt facere odio esse, voluptatem expedita, ab commodi ad itaque! Esse, quas.",
      publishedAt: "30-11-2022",
    },
  ],
};

export const allNews = { ...latestNews, title: "Banco de notícias" };
