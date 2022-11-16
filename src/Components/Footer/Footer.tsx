import styles from './Footer.module.scss'
import { Typography } from '../Typography'
import { ifb, iinsta, itk, iyt } from '../../Assets/Images/index'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContainer}>
                <div>
                    <h6 className={styles.title} id={styles.nameTitle}><span>Instituto Germinare</span> <span id={styles.titleLine}>-</span> <span>Escola de Negócios</span></h6>
                    <h6 className={styles.contact}>
                        Rua Irineu José Bordon, 335<br></br> São Paulo, SP - Brasil - 05120-060<br></br>
                        (11) 3623-6000
                    </h6>
                </div>
                <div className={styles.socialContainer}>
                    <h6 className={styles.title}>Redes Sociais</h6>
                    <ul className={styles.icons}>
                        <li><a target='_blank' href="https://www.facebook.com/germinareoficial"><img src={ifb} alt='Facebook' /></a></li>
                        <li><a target='_blank' href="https://www.instagram.com/escolagerminare/"><img src={iinsta} alt="Instagram" /></a></li>
                        <li><a target='_blank' href="https://www.tiktok.com/@escolagerminare?_t=8XH9B4CndUk&_r=1"><img src={itk} alt="Tik Tok" /></a></li>
                        <li><a target='_blank' href="https://www.youtube.com/channel/UCtfT0wIFhW2jyCMR0ZtBuzg"><img src={iyt} alt="Youtube" /></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.posFooter}>
                <p>Instituto J&F © 2022. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
