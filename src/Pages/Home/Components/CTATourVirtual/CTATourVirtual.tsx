import { Typography } from '../../../../Components'
import {Link} from 'react-router-dom'
import styles from './CTATourVirtual.module.scss'
import { icon360, iconPlay, schoolImage } from './Assets/Images'

export function CTATourVirtual() {
  return (
    <>
    <Typography color='#2E3092' width='325px' variant='TypographySubtitle'>Tour Virtual 360°</Typography>
    <Link to='/home/tour-virtual'>
    <div className={styles.containerCTATourVirtual}>
            {/* <img src={iconPlay} className={styles.iconPlayTourVirtual}></img> */}
            <img className={styles.imgTourVirtual} src={schoolImage}></img>
            <div className={styles.blueDivTourVirtual}>
                <img className={styles.iconImg360Tour} src={icon360}></img>
                <Typography color='white' width='fit-content' variant='TypographySmallImage'>Conheça a escola</Typography>
            </div>
    </div>
    </Link>
    </>
  )
}
