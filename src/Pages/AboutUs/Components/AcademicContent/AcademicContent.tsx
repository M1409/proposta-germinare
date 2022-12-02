import { Typography } from "../../../../Components"
import styles from './AcademicContent.module.scss'

export type AcademicContentProps = {
    title: string
    chips: string[]
    description: string
    descriptionWidth?: string
    src?: string
}

export default function AcademicContent({ title, chips, description, src, descriptionWidth, ...props }: AcademicContentProps) {
    return (
        <div className={styles.AcademicContentContainer}>
            <div>
                <Typography variant="TypographySubtitle" color="#2E3092">
                    {title}
                </Typography>

                <div className={styles.ChipsContainer}>
                    {chips.map((chip,index) => (
                        <div className={styles.Chip} key = {index}>
                            <Typography variant="TypographyParagraph" color="#2E3092" weight="700">
                                {chip}
                            </Typography>
                        </div>
                    ))}
                </div>

                <div>
                    <Typography variant="TypographyParagraph" width={descriptionWidth}>
                        {description}
                    </Typography>
                </div>
            </div>

            <img src={src} alt="academias germinare" />

        </div>
    )


}