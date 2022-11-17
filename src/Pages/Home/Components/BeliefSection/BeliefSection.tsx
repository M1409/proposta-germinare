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

import styles from './BeliefSection.module.style.scss'

export function BeliefSection() {

    const cards = [
        {
            "content": "Foco no Detalhe",
            "width": "",
            "icon": eye
        },
        {
            "content": "Pessoa Certa no Lugar Certo",
            "width": "",
            "icon": people
        },
        {
            "content": "Qualidade nas Entregas",
            "width": "",
            "icon": box
        },
        {
            "content": "Nada Resiste ao Trabalho",
            "width": "",
            "icon": bag
        },
        {
            "content": "Mão na Massa",
            "width": "",
            "icon": pen
        },
        {
            "content": "Liderar pelo Exemplo",
            "width": "",
            "icon": hands
        },
        {
            "content": "Foco no Resultado",
            "width": "",
            "icon": target
        },
        {
            "content": "Melhorar a Cada Dia",
            "width": "",
            "icon": sunny
        },

    ]


    return (
        <LayoutSection src={Beliefs} color='rgba(1, 22, 137, 0.8)' height='576px'>
            <div style={{ textAlign: 'center' }}>
                <Typography color="white" variant="TypographySubtitle">
                    Nossas Crenças
                </Typography>
            </div>

            <div className={styles.CardsContainer}>
                {cards.map(card =>(
                    <WhiteCard content={card.content} width = {card.width}>
                        <img src={card.icon} alt={card.content} /> 
                    </WhiteCard>
                ))}
            </div>
        </LayoutSection>
    )
}