import { AiOutlineEye } from "react-icons/ai";
import { Typography } from "../Typography";
import styles from './WhiteCard.module.scss'

export function WhiteCard(){
    return(
        <div className={styles.WhiteCard}>
            <AiOutlineEye className={styles.WhiteCardIcon}/>
            <Typography color="blue" variant="TypographyParagraph" className={styles.WhiteCardText}>
                Foco no Detalhe
            </Typography>
        </div>
    )
}