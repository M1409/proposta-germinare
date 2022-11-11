import styles from './Footer.module.scss'
import { Typography } from '../Typography'
import ifb from '../../Assets/Images/ifb.svg'
import iinsta from '../../Assets/Images/iinsta.svg'
import itk from '../../Assets/Images/itk.svg'
import iyt from '../../Assets/Images/iyt.svg'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContainer}>
                <div>
                    <p className={styles.title} id={styles.nameTitle}><span>Instituto Germinare</span> <span id={styles.titleLine}>-</span> <span>Escola de Negócios</span></p>
                    <p className={styles.contact}>
                        Rua Irineu José Bordon, 335<br></br> São Paulo, SP - Brasil - 05120-060<br></br>
                        (11) 3623-6000
                    </p>
                </div>
                <div className={styles.socialContainer}>
                    <p className={styles.title}>Redes Sociais</p>
                    <div className={styles.icons}>
                        <a target='_blank' href="https://www.facebook.com/germinareoficial"><img src={ifb} alt='Facebook' /></a>
                        <a target='_blank' href="https://www.instagram.com/escolagerminare/"><img src={iinsta} alt="Instagram" /></a>
                        <a target='_blank' href="https://www.tiktok.com/@escolagerminare?_t=8XH9B4CndUk&_r=1"><img src={itk} alt="Tik Tok" /></a>
                        <a target='_blank' href="https://www.youtube.com/channel/UCtfT0wIFhW2jyCMR0ZtBuzg"><img src={iyt} alt="Youtube" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.posFooter}>
                <p>Instituto J&F © 2022. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}