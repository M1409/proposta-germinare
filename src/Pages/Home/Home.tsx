import './style.scss'
import HomeMission from './Assets/Images/HomeMission.png'
import Carousel from './Components/Carousel/Carousel'
import { Typography } from '../../Components/Typography'
import { Button } from '../../Components/Button/Button'
import { BeliefSection } from './Components/BeliefSection'
import QrCode from './Assets/Images/QrCode.svg'
import QrCodeIlustration from './Assets/Images/QrCodeIlustration.svg'
import ContactForms from './ContactForms/ContactForms'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function Home() {

    const { height, width } = useWindowDimensions();


    return (
        <section>
            <Carousel />
            <div className='HomeMissionSection'>
                <section>
                    <div className='HomeTextSection'>
                        <Typography color='#2E3092' width='225px' variant='TypographySubtitle'>
                            Nossa Missão
                        </Typography>

                        <Typography width={width <= 768 ? '280px' : '529px'} variant='TypographyParagraph'>
                            Formar, de maneira efetiva, jovens administradores de empresa que tenham total aderência aos nossos valores, alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos.
                        </Typography>
                    </div>

                    <div className='HomeTextSection'>
                        <Typography color='#2E3092' width='320px' variant='TypographySubtitle'>
                            Projeto Acadêmico
                        </Typography>

                        <Typography width={width <= 768 ? '320px' : '529px'} variant='TypographyParagraph'>
                            O foco principal é formar de maneira efetiva jovens gestores e líderes para o mercado de trabalho, oferecendo ampla preparação com conteúdos dirigidos ao desenvolvimento de habilidades profissionais e a oportunidade de especialização escolhida entre os seguintes negócios: digital, financeiro, varejo, commodities e bens de consumo.
                        </Typography>
                    </div>
                </section>
                <img src={HomeMission} alt="" />
            </div>
            <BeliefSection />
            <div className='SupportSection'>
                <div className='SupportContainer'>
                    <div >
                        <Typography width={width <= 768 ? '280px' : '410px'} variant='TypographySubtitle' color='#2E3092'>
                            Como apoiar o projeto
                        </Typography>

                        <Typography width={width <= 768 ? '280px' : '381px'} variant='TypographyParagraph'>
                            Para apoiar, você pode fazer uma doação única ou mensalmente para a Escola Germinare pelo PicPay. Basta escolher uma das opções abaixo e escanear o QR Code que está ao lado.
                            Realize o scan pelo aplicativo PicPay.
                        </Typography>

                        <div className='SupportButtons'>
                            <Button variant='filled' width='162px' height='50px' >
                                Doação Única
                            </Button>

                            <Button variant='outlined' width='162px' height='50px' >
                                Doação Mensal
                            </Button>
                        </div>
                    </div>

                    <div className='SupportImgs'>
                        <img src={QrCode} alt="" />
                        <img src={QrCodeIlustration} alt="" />
                    </div>
                </div>
                <Typography width={width <= 768 ? '360px' : '829px'} variant='TypographyParagraph' id='SupportLegal'>
                    Caso seja Pessoa Jurídica ou queira fazer uma doação diretamente em nossa conta corrente, pedimos que por gentileza entre em contato conosco via instituto@germinare.org.br.
                </Typography>
            </div>

            <div className='FormsSection'>
                <Typography width={width <= 768 ? '280px' : '438px'} variant='TypographySubtitle' color='#2E3092'>
                    Formulário de Contato
                </Typography>
                <ContactForms />
            </div>
        </section>
    )
}