import { Title, TitleProps, CardsWrapper, CardsWrapperProps } from "../index";

export type NewsSectionProps = TitleProps & CardsWrapperProps;

export function NewsSection({ title, news, ...props }: NewsSectionProps) {
  return (
    <div {...props}>
      <Title title={title} style={{ marginBottom: "30px" }} />
      <CardsWrapper news={news} />
    </div>
  );
}
