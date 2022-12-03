import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import { Typography, LayoutSection } from "../../../../Components";
import styles from "./OurHistory.module.scss";
import { bg, mother, principal, teacher } from "./Assets/Images";
export default function OurHistory() {
  const { width } = useWindowDimensions();
  const settings = useMemo(() => {
    return {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "2%",
      slidesToShow: width > 1080 ? 3 : 1,
      speed: 500,
      initialSlide: 0,
      autoplay: true,
      arrows: false,
      dots: width > 1080 ? false : true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      customPaging: () => (
        <div
          className="carouselHomeDot"
          id="ourHistory"
        >
        </div>
      )
    };
  }, [width]);

  return (
    <LayoutSection src={bg} color="rgba(0, 25, 80, .85)" height="630px" >
      <Typography color="white" variant="TypographySubtitle" id={styles.title}>
        Nossas histórias
      </Typography>
      <div className={styles.mainSection}  id='admission'>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.sliderItem} id="admission-slider-item">
            <div
              style={{
                backgroundImage: `url(${mother})`,
                backgroundPositionY: "25%",
              }}
              id={styles.img}
            ></div>
            <h6>
              Andrea Bottinelli <br></br> Mãe de um ex-aluno
            </h6>
            <p>
              “Meu filho se formou ano passado e ocupa aos 19 anos o cargo de
              distrital, ele é meu orgulho.”
            </p>
          </div>
          <div className={styles.sliderItem} id="admission-slider-item">
            <div
              style={{ backgroundImage: `url(${teacher})` }}
              id={styles.img}
            ></div>
            <h6>
              Roberto Nascimento<br></br> Professor da Escola
            </h6>
            <p>
              “Me sinto maravilhado por participar do projeto e acredito na
              capacidade destes jovens.”
            </p>
          </div>
          <div className={styles.sliderItem} id="admission-slider-item">
            <div
              style={{ backgroundImage: `url(${principal})` }}
              id={styles.img}
            ></div>
            <h6>
              Maria Odete <br></br> Diretora da Escola
            </h6>
            <p>“Me orgulho muito dos cidadãos que formamos na Germinare.”</p>
          </div>
        </Slider>
      </div>
    </LayoutSection>
  );
}
