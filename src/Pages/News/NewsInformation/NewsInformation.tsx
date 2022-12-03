import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContentSpacer, Typography } from "../../../Components";
import { News } from "../news";
import styles from "./NewsInformation.module.scss";
import { sections } from "../Sections";
export function NewsInformation() {
  const { newsTitle }  = useParams();
  const currentNews = useMemo(() => {
    const { allNews } = require("../Assets/Data/data"); // importar dados do bd
    return (allNews.news as News[]).find((it) => it.title == newsTitle);
  }, [newsTitle]);
  const {color, name} = currentNews ? sections[currentNews.section] : {color: 'black', name: 'Seção indefinida'}


  return (
    <ContentSpacer>
      <article className={styles.NewsInformationContainer}>
        <div className={styles.header}>
          <h2>Notícias</h2>
          <h1>{currentNews?.title}</h1>
          <h3 style={{color: color}}>{name}</h3>
          <h4>Publicado em {currentNews?.publishedAt.replaceAll('-','/')}</h4>
        </div>
        <section className={styles.content}>
            <img src={currentNews?.img.src} alt={currentNews?.img.alt} />
            <Typography variant="TypographyParagraph" style={{whiteSpace:"pre-wrap"}}>
                {currentNews?.description}
            </Typography>
        </section>
      </article>
    </ContentSpacer>
  );
}
