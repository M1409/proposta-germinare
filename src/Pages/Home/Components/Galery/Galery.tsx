import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "./Assets/Images";
import styles from "./Galery.module.scss";
import { Typography } from "../../../../Components/Typography";
import lgZoom from "lightgallery/plugins/zoom";
import ifull_screen from "./Assets/Images/ifull_screen.svg";

export default function Galery() {
  const galery = [
    { image: img1, title: "Praça" },
    { image: img2, title: "Jardim" },
    { image: img4, title: "Exterior" },
    { image: img5, title: "Escola Germinare" },
    { image: img6, title: "Ar livre" },
    { image: img7, title: "Ping Pong" },
    { image: img8, title: "Entrada" },
    { image: img9, title: "Hall Principal" },
    { image: img10, title: "Laboratório Equipado" },
  ];
  return (
    <div className={styles.galeryContainer}>
      <LightGallery mode="lg-fade" plugins={[lgZoom]} download={false}>
        {galery.map((item) => (
          <a
            data-src={item.image}
            data-sub-html={`<h4>${item.title}</h4> <p> Instituto Germinare - Escola de Negócios</p>`}
          >
            <div className={styles.galeryItem}>
              <img
                src={item.image}
                alt={`${item.title}`}
                className={styles.mainImage}
              />
              <div className={styles.titleContainer}>
                <Typography color="white">{item.title}</Typography>
              </div>
              <img
                src={ifull_screen}
                alt="Tela cheia"
                className={styles.fullScreen}
              />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
