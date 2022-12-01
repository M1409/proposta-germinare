import { Typography } from "../../../../Components"
import styles from './FamilySchool.module.scss'
import icon_home from './Assets/Images/icon_home.svg'
import icon_graduation from './Assets/Images/icon_graduation.svg'
import icon_book from './Assets/Images/icon_book.svg'

type FamilySchoolCards = {
    icon: string,
    title: string,
    description: string
}


export default function FamilySchool() {


    const FamilySchoolCards: FamilySchoolCards[] = [{
        icon: icon_home,
        title: '1. Visitas',
        description: 'Uma agenda personalizada e exclusiva, onde poderemos aproximar e fortalecer ainda mais a relação entre escola e família.'
    },
    {
        icon: icon_graduation,
        title: '2. Formação',
        description: 'Vamos compartilhar temas presentes no cotidiano da educação e formação do cidadão do futuro, por meio de atividades virtuais e presenciais.'
    },
    {
        icon: icon_book,
        title: '3. Coletivo de leituras',
        description: 'Ler é interpretar e refletir em um debate vivo. Vamos nos encontrar para compartilhar percepções e experiências.'
    },

]

    return (
        <div>
            <Typography color="#2E3092" variant="TypographySubtitle">
                Germinare: a Escola da Família
            </Typography>
            <Typography variant="TypographyParagraph">
                Venha nos conhecer um pouco mais! Entenda as 3 etapas desse novo curso:
            </Typography>

            <section className={styles.FamilySchoolCardsContainer}>
                {FamilySchoolCards.map(card => (
                    <div className={styles.FamilySchoolCards}>
                        <img src={card.icon} alt="" />
                        <Typography color="#2E3092" variant="TypographySubtitle" size="24px">
                            {card.title}
                        </Typography>
                        <Typography variant="TypographyParagraph">
                            {card.description}
                        </Typography>
                    </div>
                ))}

            </section>
        </div>
    )

}