import { LayoutSection } from "../../../../Components"
import ImpactPhrase_background from './Assets/Images/ImpactPhrase_background.png'
import ze_mineiro from './Assets/Images/ze_mineiro.png'
import { Typography } from "../../../../Components"
import styles from './ImpactPhrase.module.scss'

import useWindowDimensions from "../../../../hooks/useWindowDimensions"

export function ImpactPhrase() {

    const {width} = useWindowDimensions()


    return (
        <LayoutSection src={ImpactPhrase_background} color='rgba(1, 22, 137, 0.8)' height='fit-content'>
            <div className={styles.ImpactPhraseSection}>
                <img src={ze_mineiro} alt="zé mineiro" />
                <div>
                    <div className={styles.ImpactPhraseContainer}>
                        <div className={styles.ImpactPhraseDivider}></div>
                        <div>
                            <Typography color='white' variant='TypographySubtitle' weight="500" width={width <=769 ? '300px' : '542px'} id= {styles.ImpactPhrase}>
                                “A pessoa para vencer na vida precisa de garra, determinação e pontualidade”.
                            </Typography>
                            <Typography color='white' variant='TypographyParagraph' weight="500" width="309px">
                                José “Zé Mineiro” Batista, fundador da JBS
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSection>
    )
}