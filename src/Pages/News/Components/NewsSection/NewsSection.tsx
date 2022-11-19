import styles from './NewsSection.module.scss'

export type NewsCardsProps = {
  newsElements: {
    url: string;
    title: string;
    section: string;
    sectionIcon: string;
    imgSrc: string;
    imgHeight: string;
  }[];
}

const colors= {
  Varejo: '#E86339',
  Escola: '#2E3092',
  Tecnologia: '#11C76F',
  Finanças: '#008646',
}

export function NewsCards({ newsElements, ...props }: NewsCardsProps) {
  return (
    <>
      <div className={styles.NewsSectionAllContent}>
        <div className={styles.NewsSectionCardsContent}>
          {newsElements.map(({ url, title, section, imgSrc, imgHeight, sectionIcon }, index) => {
            return (
            <div key={index} >
              <a href={url} className={styles.NewsSectionRemoveLinkConfig}>
                <img src={imgSrc} height={imgHeight} className={styles.NewsSectionImages}></img>
                <div className={styles.NewsSectionDivTexts}>
                  <div className={styles.NewsSectionArea}>
                    <img src={sectionIcon}></img>
                    {section === 'Escola' ?
                    <p  className={styles.NewsSectionCenterText} style={{color: `${colors[section]}`}}>{section + ' da Família'}</p> 
                    :
                    //@ts-ignore
                    <p  className={styles.NewsSectionCenterText} style={{color: `${colors[section]}`}}>{section}</p>
                    }
                  </div>
                  <p className={styles.NewsSectionTextTitle}>{title}</p>
                </div>
              </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}



