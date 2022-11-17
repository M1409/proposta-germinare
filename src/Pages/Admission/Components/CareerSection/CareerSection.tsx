import styles from './CareerSection.module.scss'
import { Typography } from "../../../../Components/Typography"
import { mainbg, chevron } from "./Assets/Images"
export default function CareerSection() {
    return (
        <div>
            <section className={styles.mainSection}>
                <div style={{ backgroundImage: `url(${mainbg})` }} className={styles.titleContainer}>
                    <Typography variant='typography-subtitle' color='white'>Está na hora de escolher a<br></br>
                        <span style={{ color: '#407BFF' }}>SUA CARREIRA</span></Typography>
                    <div className={styles.backgroundShadow}></div>
                </div>
                
                <div className={styles.careerContainer}>
                    <div>
                        <h3>Gestor de Negócios</h3>
                        <Typography variant='typography-paragraph' >
                            Formar, de maneira efetiva, jovens administradores de empresa que tenham total aderência aos nossos valores, alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos.
                        </Typography>
                        <img src={chevron} alt="Seta indicativa para acessar o conteúdo" />
                    </div>
                    <div>
                        <h3>Programador</h3>
                        <Typography variant='typography-paragraph' >
                            Formar, com excelência, jovens Especialistas em Tecnologias Digitais que tenham total aderência aos nossos valores, alta capacidade crítica, analítica e cognitiva, com competências para desenvolver soluções tecnológicas inovadoras a fim de produzir resultados superlativos.
                        </Typography>
                        <img src={chevron} alt="Seta indicativa para acessar o conteúdo" />
                    </div>
                </div>
            </section>
        </div>
    )
}