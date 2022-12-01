
import { Typography } from "../Typography";
import styles from './WhiteCard.module.scss'

export type WhiteCardProps = {
    content:string
    width?:string
    height?:string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function WhiteCard({content,width,children, height,...props}:WhiteCardProps){
    return(
        <div className={styles.WhiteCard}>
            <div className={styles.WhiteCardIcon}>
                {children}
            </div>
            <Typography color="#2E3092" variant="TypographyParagraph" className={styles.WhiteCardText} width = {width}>
                {content}
            </Typography>
        </div>
    )
}