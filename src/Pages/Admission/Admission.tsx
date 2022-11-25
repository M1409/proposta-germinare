import './style.scss'
import { WelcomeBanner } from '../../Components/WelcomeBanner'
import { banner, ibook, icase, ilunch, imoney } from './Assets/Images'
import { Typography } from '../../Components/Typography'
import CareerSection from './Components/CareerSection/CareerSection'
import { WhiteCard } from '../../Components/WhiteCard'
import OurHistory from './Components/OurHistory/OurHistory'
export function Admission() {
    return (
        <>
            <WelcomeBanner bannerSrc={banner} title='Venha construir seu futuro. 
        Matricule-se!' titleWidth='75%' ></WelcomeBanner>
            <div className='mainContainer'>
                <Typography variant='TypographySubtitle' color='#2E3092'>Confira os convocados para a próxima fase!</Typography>
                <Typography variant='TypographyParagraph' style={{ marginTop: 30, marginBottom: 60 }}>As etapas do processo de seleção serão descritas no Manual do Candidato. Acompanhe-nos nas redes sociais para não perder as próximas atualizações! Os convocados para a quarta fase do nosso processo de admissão já estão disponíveis. Veja a <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/LISTA-40-ETAPA.pdf">lista dos convocados</a> e acesse a <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Manual-Escolas-6%C2%BA-ano-CERTO-4.pdf">área do candidato</a>.</Typography>
                <CareerSection></CareerSection>
                <Typography variant='TypographySubtitle' color='#2E3092'>Benefícios de ser aluno Germinare</Typography>
                <div style={{ display: 'flex', marginTop: 30, justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: 40 }} id='admission-whiteCard-container'>
                    <WhiteCard content='100% Gratuita'><img src={imoney} alt="Cifrão" /></WhiteCard>
                    <WhiteCard content='Ensino de Qualidade'><img src={ibook} alt="Livro" /></WhiteCard>
                    <WhiteCard content='Estágio nas Empresas'><img src={icase} alt="Mala" /></WhiteCard>
                    <WhiteCard content='Alimentação Saudável'><img src={ilunch} alt="Refeição" /></WhiteCard>
                </div>
            </div>
            <OurHistory></OurHistory>
        </>
    )
}