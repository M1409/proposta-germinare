import { LayoutSection } from "../LayoutSection"
import { Typography } from "../Typography"
import styles from './WelcomeBanner.module.scss'
import { Breadcrumbs } from "../Breadcrumbs"

export type WelcomeBannerProps = {
    bannerSrc:string
    titleWidth: string
    title: string
}


export function WelcomeBanner({bannerSrc,titleWidth,...props}:WelcomeBannerProps) {
    return (
        <LayoutSection src={bannerSrc} height='400px' {...props} shadow>
            <div className={styles.WelcomeContainer}>
                <Typography variant="TypographyTitle" color="white" width={titleWidth}>{props.title} </Typography>
                <Breadcrumbs crumbInitialColor="white" />
            </div>
        </LayoutSection>
    )
}