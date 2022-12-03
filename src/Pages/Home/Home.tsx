import './style.scss'
import { Error404 } from '../Error404/index'
import HomeMission from './Assets/Images/HomeMission.png'
import { Typography } from '../../Components/Typography'
import {Carousel, BeliefSection, SuportSection, ContactForms, CTATourVirtual} from './Components'
export function Home() {

    return (
        <section className='HomePage'>
            <Carousel />
            <div className='HomeMissionSection mainContainer'>
                <section>
                    <div className='HomeTextSection'>
                        <Typography color='#2E3092' width='225px' variant='TypographySubtitle'>
                            Nossa Missão
                        </Typography>

                        <Typography variant='TypographyParagraph'>
                            Formar, de maneira efetiva, jovens administradores de empresa que tenham total aderência aos nossos valores, alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos.
                        </Typography>
                    </div>

                    <div className='HomeTextSection'>
                        <Typography color='#2E3092' width='320px' variant='TypographySubtitle'>
                            Projeto Acadêmico
                        </Typography>

                        <Typography  variant='TypographyParagraph'>
                            O foco principal é formar de maneira efetiva jovens gestores e líderes para o mercado de trabalho, oferecendo ampla preparação com conteúdos dirigidos ao desenvolvimento de habilidades profissionais e a oportunidade de especialização escolhida entre os seguintes negócios: digital, financeiro, varejo, commodities e bens de consumo.
                        </Typography>
                    </div>
                </section>
                <img src={HomeMission} alt="" />
            </div>
            <BeliefSection />

            <div className="mainContainer">
                <CTATourVirtual />
                <SuportSection/>
                <div className='FormsSection'>
                    <Typography variant='TypographySubtitle' color='#2E3092'>
                        Formulário de Contato
                    </Typography>
                    <ContactForms />
                </div>
            </div>
        </section>
        
    )
}