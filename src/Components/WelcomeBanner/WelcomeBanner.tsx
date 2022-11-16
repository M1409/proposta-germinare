import { LayoutSection } from "../LayoutSection"
import { Typography } from "../Typography"
import styles from './WelcomeBanner.module.scss'
import { Breadcrumbs } from "../Breadcrumbs"

export type WelcomeBannerProps = {
    crumbColor:string
    bannerHeight:string
    bannerSrc:string
    titleWidth: string
}


export function WelcomeBanner({crumbColor,bannerHeight,bannerSrc,titleWidth,...props}:WelcomeBannerProps) {
    return (
        <LayoutSection src={bannerSrc} height={bannerHeight} {...props} >
            <div className={styles.WelcomeContainer}>
                <Typography variant="TypographyTitle" color="white" width={titleWidth}> Conheça mais sobre o projeto acadêmico! </Typography>
                <Breadcrumbs crumbColor={crumbColor} crumbInitialColor="white" />
            </div>
        </LayoutSection>
    )
}