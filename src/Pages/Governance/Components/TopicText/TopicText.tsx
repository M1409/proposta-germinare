import styles from './TopicText.module.scss'

export function TopicText() {
    return (
        <>     
            <div>
                <li className={styles.PLStatementTitleText}>Coleta de dados sensíveis e coleta de dados de menor</li>
                <p className={styles.PLStatementText}> Em alguns casos, podemos realizar a coleta de alguns dados pessoais considerados como sensíveis conforme definição da Lei Geral de Proteção de Dados (dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico) ou a coleta de algum dado pessoal que possa vir a revelar algum dado sensível. Nesses casos, apenas iremos realizar o tratamento desses dados de acordo com alguma das bases legais disponíveis no artigo 11 da LGPD.</p>
                <p className={styles.PLStatementText}> Além disso, durante a prestação de nossos serviços, podemos também coletar dados de menores de 12 anos. Nesses casos, sempre buscaremos a autorização de seu representante legal ou de um de seus pais, conforme regra presente no artigo 14 da LGPD.</p>
            </div>
            <div>
                <li className={styles.PLStatementTitleText}>A Escola Germinare compartilha meus dados com alguém?</li>
                <p className={styles.PLStatementText}>A Escola Germinare não compartilha, vende ou transfere seus dados pessoais para nenhuma empresa ou individuo, exceto nas seguintes hipóteses:
                    <li className={styles.PLStatementSubTopic}>Podemos compartilhar seus dados pessoais a fim de cumprir com as legislações vigentes (Por exemplo, compartilhamento de dados ao Ministério da Educação – MEC e a Secretária da Educação do Estado de São Paulo);</li>
                    <li className={styles.PLStatementSubTopic}>Podemos compartilhar seus dados pessoais para hospedagem em plataformas de tecnologia de nossos parceiros;</li>
                    <li className={styles.PLStatementSubTopic}>Garantir a disponibilidade de nossos serviços por meio de nosso site</li>
                </p>
            </div>
            <div>
                <li className={styles.PLStatementTitleText}>Por quanto tempo iremos reter seus dados?</li>
                <p className={styles.PLStatementText}>Nós manteremos seus dados pessoais somente pelo tempo que for necessário para cumprir com as finalidades para as quais os coletamos, inclusive para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes.</p>
                <p className={styles.PLStatementText}>Para determinar o período de retenção adequado para os dados pessoais, consideramos a quantidade, a natureza e a sensibilidade dos dados pessoais, o risco potencial de possíveis incidentes de segurança que possam ocorrer, a finalidade de processamento dos seus dados pessoais e se podemos alcançar tais propósitos através de outros meios, e os requisitos legais aplicáveis.</p>
            </div>
        </>
    )
}



