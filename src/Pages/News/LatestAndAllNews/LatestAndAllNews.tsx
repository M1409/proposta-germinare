import { NewsSection } from "./Components";
import { banner } from "./Assets/Images";
import { WelcomeBanner, ContentSpacer } from "../../../Components";

export function LatestAndAllNews() {
  const {latestNews, allNews} = require('../Assets/Data/data') // importar dados do bd

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
