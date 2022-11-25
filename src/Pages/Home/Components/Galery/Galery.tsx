import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import img1 from './Assets/Images/img1.png'
import img2 from './Assets/Images/img2.png'
import img3 from './Assets/Images/img3.png'
import img4 from './Assets/Images/img4.png'
import img5 from './Assets/Images/img5.png'
import img6 from './Assets/Images/img6.png'
import img7 from './Assets/Images/img7.png'
import img8 from './Assets/Images/img8.png'
import img9 from './Assets/Images/img9.png'
import img10 from './Assets/Images/img10.png'
import styles from './Galery.module.scss'
import { Typography } from '../../../../Components/Typography'
import lgZoom from 'lightgallery/plugins/zoom';
import ifull_screen from './Assets/Images/ifull_screen.svg'

export default function Galery() {
    const galery = [{ image: img1, title: 'Praça' }, { image: img2, title: 'Jardim' }, { image: img3, title: 'Ambiente Escolar' }, { image: img4, title: 'Exterior' }, { image: img5, title: 'Escola Germinare' }, { image: img6, title: 'Ar livre' }, { image: img7, title: 'Ping Pong' }, { image: img8, title: 'Entrada' },{ image: img9, title: 'Hall Principal' },{ image: img10, title: 'Recreação' }]
    return (
        <div className={styles.galeryContainer}>
            <LightGallery mode="lg-fade" plugins={[lgZoom]} download={false}>
                {galery.map((item) => (
                    <a data-src={item.image} data-sub-html={`<h4>${item.title}</h4> <p> Instituto Germinare - Escola de Negócios</p>`}>
                        <div className={styles.galeryItem}>
                            <img src={item.image} alt={`${item.title}`} className={styles.mainImage} />
                            <div className={styles.titleContainer}>
                                <Typography color='white'>{item.title}</Typography>
                            </div>
                            <img src={ifull_screen} alt="Tela cheia" className={styles.fullScreen} />
                        </div>
                    </a>
                ))}
            </LightGallery>
        </div>
    )
}