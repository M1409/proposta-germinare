import styles from "./CardsWrapper.module.scss";
import { Card, CardProps } from "../index";

export type CardsWrapperProps = {
  news: CardProps[];
} & React.HTMLProps<HTMLDivElement>;;

export function CardsWrapper({ news, ...props }: CardsWrapperProps) {
  const defineColumns = (news: CardProps[]): CardProps[][] => {
    const firstColumn: CardProps[] = [];
    const secondColumn: CardProps[] = [];
    news.forEach((it, index) => {
      if ((index % 2) - 1) {
        firstColumn.push(it);
      } else {
        secondColumn.push(it);
      }
    });
    return [firstColumn, secondColumn];
  };
  const newsColumns = defineColumns(news);

  return (
    <div className={styles.NewsContainerWrapper} {...props}>
      {newsColumns.map((column, index) => (
        <div key={index} className={styles.NewsSectionCardsContent}>
          {column.map((news, index) => (
            <Card key={index} {...news} />
          ))}
        </div>
      ))}
    </div>
  );
}
