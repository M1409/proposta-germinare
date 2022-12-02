import { Typography } from "../../../../Components/Typography"
import styles from './TopicText.module.scss'

export function TopicText() {
    return (
        <div className={styles.marginBottomDiv}>
            <div className={styles.divAdjust}>
                <Typography variant='TypographyParagraph' color='#323232' id={styles.boldAdjust}><li>Coleta de dados sensíveis e coleta de dados de menor</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'>Em alguns casos, podemos realizar a coleta de alguns dados pessoais considerados como sensíveis conforme definição da Lei Geral de Proteção de Dados (dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico) ou a coleta de algum dado pessoal que possa vir a revelar algum dado sensível. Nesses casos, apenas iremos realizar o tratamento desses dados de acordo com alguma das bases legais disponíveis no artigo 11 da LGPD.</Typography>
                <Typography variant='TypographyParagraph' color='#323232'> Além disso, durante a prestação de nossos serviços, podemos também coletar dados de menores de 12 anos. Nesses casos, sempre buscaremos a autorização de seu representante legal ou de um de seus pais, conforme regra presente no artigo 14 da LGPD.</Typography>
            </div>
            <div className={styles.divAdjust}>
                <Typography variant='TypographyParagraph' color='#323232' id={styles.boldAdjust}><li>A Escola Germinare compartilha meus dados com alguém?</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'>A Escola Germinare não compartilha, vende ou transfere seus dados pessoais para nenhuma empresa ou individuo, exceto nas seguintes hipóteses:                </Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Podemos compartilhar seus dados pessoais a fim de cumprir com as legislações vigentes (Por exemplo, compartilhamento de dados ao Ministério da Educação – MEC e a Secretária da Educação do Estado de São Paulo);</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Podemos compartilhar seus dados pessoais para hospedagem em plataformas de tecnologia de nossos parceiros;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Garantir a disponibilidade de nossos serviços por meio de nosso site</li></Typography>
            </div>
            <div className={styles.divAdjust}>
                <Typography variant='TypographyParagraph' color='#323232' id={styles.boldAdjust}><li>Por quanto tempo iremos reter seus dados?</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'>Nós manteremos seus dados pessoais somente pelo tempo que for necessário para cumprir com as finalidades para as quais os coletamos, inclusive para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes.</Typography>
                <Typography variant='TypographyParagraph' color='#323232'>Para determinar o período de retenção adequado para os dados pessoais, consideramos a quantidade, a natureza e a sensibilidade dos dados pessoais, o risco potencial de possíveis incidentes de segurança que possam ocorrer, a finalidade de processamento dos seus dados pessoais e se podemos alcançar tais propósitos através de outros meios, e os requisitos legais aplicáveis.</Typography>
            </div>
        </div>
    )
}



