import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContentSpacer } from "../../../Components";
import { News } from "../news";
import styles from "./NewsInformation.module.scss";

export function NewsInformation() {
  const { newsTitle } = useParams();
  const currentNews = useMemo(() => {
    const { allNews } = require("../Assets/Data/data"); // importar dados do bd
    return (allNews.news as News[]).find((it) => it.title == newsTitle);
  }, [newsTitle]);

  return (
    <ContentSpacer>
      <article>
        <div className={styles.header}>
          <h4>Notícias</h4>
          <h1>{currentNews?.title}</h1>

          {currentNews?.section}
          {currentNews?.publishedAt}
        </div>
        <img src={currentNews?.img.src} alt={currentNews?.img.alt} />
        {currentNews?.description}
      </article>
    </ContentSpacer>
  );
}
