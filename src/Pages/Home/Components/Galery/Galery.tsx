import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import img from './Assets/Images/img1.jpeg'
import styles from './Galery.module.scss'
import { Typography } from '../../../../Components/Typography'
import lgZoom from 'lightgallery/plugins/zoom';
import ifull_screen from './Assets/Images/ifull_screen.svg'
export default function Galery(){
    const galery = [{image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}, {image: img, title: 'Ambiente'}]
    return(
        <div className={styles.galeryContainer}>
        <LightGallery mode="lg-fade"  plugins={[lgZoom]} download={false}>
            {galery.map((item)=>(
                <a data-src={item.image} data-sub-html={`<h4>${item.title}</h4> <p> Instituto Germinare - Escola de Negócios</p>`}>
                    <div className={styles.galeryItem}>
                        <img src={item.image} alt={`${item.title}`} className={styles.mainImage}/>
                        <div className={styles.titleContainer}>
                            <Typography color='white'>{item.title}</Typography>
                        </div>
                        <img src={ifull_screen} alt="Tela cheia" className={styles.fullScreen}/>
                    </div>
                </a>
            ))}
        </LightGallery>
        </div>
    )
}