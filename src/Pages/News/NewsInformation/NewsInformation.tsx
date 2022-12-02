import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContentSpacer } from "../../../Components";
import { News } from "../news";
import styles from './NewsInformation.module.scss'

export function NewsInformation() {
  const newsTitle = useParams()["news-title"];
  const currentNews = useMemo(() => {
    const { allNews } = require("../Assets/Data/data"); // importar dados do bd
    return (allNews as News[]).find(it => it.title == newsTitle);
  }, [newsTitle]);

  return (
    <ContentSpacer>
        <div className={styles.header}>
            Notícias
            {currentNews?.title}
            {currentNews?.section}
            {currentNews?.publishedAt}
        </div>
      <img src={currentNews?.img.src} alt={currentNews?.img.alt} />
      {currentNews?.description}
    </ContentSpacer>
  );
}
