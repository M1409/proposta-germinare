import styles from './Carousel.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bg from './Assets/Images/bg.png'
import { Typography } from '../../../../Components/Typography';
import Button from '../../../../Components/Button/Button';
import c2 from './Assets/Images/c2.png'
import c3 from './Assets/Images/c3.png'
import c4 from './Assets/Images/c4.png'
import $ from 'jquery';
import { useEffect } from 'react';
import './animation.scss'
export default function Carousel() {
  const data = [
    {
      image: bg,
      content: {
        title: "Há mais de uma década ",
        bigtitle: "FORMANDO GESTORES",
        buttonContent: "Inscreva-se",
      },
    },
    {
      image: c2,
      content: {
        title: "Veja como foi nosso ",
        bigtitle: "ENCONTRO DE VALORES",
        buttonContent: "Saiba mais",
      },
    },
    {
      image: c3,
      content: {
        title: "Faça parte do mercado de ",
        bigtitle: "TECNOLOGIA",
        buttonContent: "Inscreva-se",
      },
    },
    {
      image: c4,
      content: {
        title: "Assista a nossa retrospectiva de ",
        bigtitle: "12 ANOS DE HISTÓRIA",
        buttonContent: "Assistir",
      },
    }
  ]
  const activeAnimation = ()=>{
    const tp = $(`.typography-title`)
    const bt = $(`.button-filled`)
    tp.removeClass('animation-typography')
    bt.removeClass('animation-button')
    setTimeout(()=>{
      tp.addClass('animation-typography')
      bt.addClass('animation-button')
    }, 100)
  }
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    beforeChange: activeAnimation,
    autoplay: true,
    autoplaySpeed: 6000
  };
  const slides = () =>
    data.map((item, index) => (
      <div>
        <div style={{ backgroundImage: `url(${item.image})`, width: '100%' }} className={styles.main}>
          <span className={styles.darkbg}>
            <div className={styles.carousel_content}>
              <Typography id={`${index - 1}`} variant='TypographyTitle' color='white'>{item.content.title} <br></br>
                <span style={{ color: '#4057D8' , textTransform: 'capitalize'}}>{item.content.bigtitle}</span></Typography>
                <Button id={`${index - 1}`} variant='button-filled'>{item.content.buttonContent}</Button>
            </div>
          </span>
        </div>
      </div>
    ))
    useEffect(activeAnimation, [])
  return (
    <>
    <div>
      <Slider {...settings} className={styles.slider}>
        {slides()}
      </Slider>
    </div>
    </>
  )
}