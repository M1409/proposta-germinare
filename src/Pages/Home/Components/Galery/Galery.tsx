import img from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.JPG'
import img4 from '../../Assets/img4.JPG'
import img5 from '../../Assets/img5.JPG'
import styles from './Galery.module.scss'
import { Typography } from '../../../../Components/Typography'
export default function Galery(){
    const galery = [{image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}]
    return(
        <div className={styles.galeryContainer}>
        {galery.map((item)=>(
            <div className={styles.galeryItem}>
                <img src={item.image} alt="" />
                <div className={styles.titleContainer}>
                    <Typography color='white'>{item.title}</Typography>
                </div>
            </div>
        ))}
        </div>
    )
}