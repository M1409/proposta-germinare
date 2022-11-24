import { LayoutSection } from "../../../../Components/LayoutSection"
import { Typography } from "../../../../Components/Typography"
import { WhiteCard } from "../../../../Components/WhiteCard"
import Beliefs from './Assets/Images/Beliefs.png'
import eye from './Assets/Images/eye.svg'
import box from './Assets/Images/box.svg'
import people from './Assets/Images/people.svg'
import bag from './Assets/Images/case.svg'
import pen from './Assets/Images/pen.svg'
import hands from './Assets/Images/hands.svg'
import target from './Assets/Images/target.svg'
import sunny from './Assets/Images/sunny.svg'
import styles from './BeliefSection.module.scss'
import useWindowDimensions from "../../../../hooks/useWindowDimensions"


export function BeliefSection() {

    const { width } = useWindowDimensions();


    const cards = [
        {
            "content": "Foco no Detalhe",

            "icon": eye
        },
        {
            "content": "Pessoa Certa no Lugar Certo",
            "icon": people
        },
        {
            "content": "Qualidade nas Entregas",
            "icon": box
        },
        {
            "content": "Nada Resiste ao Trabalho",
            "icon": bag
        },
        {
            "content": "Mão na Massa",
            "icon": pen
        },
        {
            "content": "Liderar pelo Exemplo",
            "icon": hands
        },
        {
            "content": "Foco no Resultado",
            "icon": target
        },
        {
            "content": "Melhorar a Cada Dia",
            "icon": sunny
        },
    ]

    return (
        <LayoutSection src={Beliefs} color='rgba(1, 22, 137, 0.8)' height={width <= 768 ? '1000px' : '576px'} id="BeliefBackGround">
            <div className={styles.BeliefSectionTitle}>
                <Typography color="white" variant="TypographySubtitle">
                    Nossas Crenças
                </Typography>
            </div>

            <div className={styles.BeliefCards}>
                {cards.map(card => (
                    <WhiteCard content={card.content}>
                        <img src={card.icon} alt={card.content} />
                    </WhiteCard>
                ))}
            </div>
        </LayoutSection>
    )
}