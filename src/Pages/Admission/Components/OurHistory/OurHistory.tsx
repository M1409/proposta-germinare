import styles from './OurHistory.module.scss'
import { LayoutSection } from "../../../../Components/LayoutSection"
import { bg, mother, principal, teacher } from "./Assets/Images"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery'
import { Typography } from '../../../../Components/Typography';
import { useEffect, useState } from 'react';
import useWindowDimensions from './Assets/Hooks/WindowDimension';
export default function OurHistory() {
    const { width } = useWindowDimensions()
    const [slides, setSlides] = useState(3)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "2%",
        slidesToShow: slides,
        speed: 500,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6000,
        pauseOnHover: true
        
    };
    useEffect(()=>{
        if(width<=1080){
            setSlides(1)
        } else{
            setSlides(3)
        }
    }, [width])
    return (
        <LayoutSection src={bg} color='rgba(0, 25, 80, .85)' height="630px">
            <Typography color='white' variant='TypographySubtitle' id={styles.title}>Nossas histórias</Typography>
            <div className={styles.mainSection}>
                <Slider {...settings} className={styles.slider} >
                    <div className={styles.sliderItem} id='admission-slider-item'>
                        <div style={{ backgroundImage: `url(${mother})`, backgroundPositionY: '25%' }} id={styles.img}></div>
                        <h6>Andrea Bottinelli <br></br> Mãe de um ex-aluno</h6>
                        <p>“Meu filho se formou ano passado e ocupa aos 19 anos o cargo de distrital, ele é meu orgulho.”
                        </p>
                    </div>
                    <div className={styles.sliderItem} id='admission-slider-item'>
                        <div style={{ backgroundImage: `url(${teacher})` }} id={styles.img}></div>
                        <h6>Roberto Nascimento<br></br> Professor da Escola</h6>
                        <p id='teste'>“Me sinto maravilhado por participar do projeto e acredito na capacidade destes jovens.”
                        </p>
                    </div>
                    <div className={styles.sliderItem} id='admission-slider-item'>
                        <div style={{ backgroundImage: `url(${principal})`}} id={styles.img}></div>
                        <h6>Maria Odete <br></br> Diretora da Escola</h6>
                        <p>“Me orgulho muito dos cidadãos que formamos na Germinare.”
                        </p>
                    </div>
                </Slider>
            </div>
        </LayoutSection>
    )
}