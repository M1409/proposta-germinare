import "./style.scss";
import { WelcomeBanner, Typography, ContentSpacer } from "../../Components";
import { banner, mission } from "./Assets/Images";
import { AcademicsTabs, ImpactPhrase, FamilySchool, Values, Certificate } from "./Components";



export function AboutUs() {
    return (
        <>
            <WelcomeBanner
                bannerSrc={banner}
                title="Há 12 anos formando líderes e gestores em negócios"
                titleWidth="60%"
                id="aboutUsWelcomeBanner"
            ></WelcomeBanner>
            <ContentSpacer id="aboutUs">
                <section className="mission section">
                    <div>
                        <Typography variant="TypographySubtitle" color="#2E3092">
                            Nossa Missão
                        </Typography>
                        <Typography variant="TypographyParagraph">
                            Fundada em 2009, a escola Germinare é uma entidade sem fins
                            lucrativos que tem por princípio a busca pela construção de uma
                            sociedade mais justa através do conhecimento. Isto porque nasceu
                            da crença de que a educação é o principal pilar de desenvolvimento
                            e transformação de qualquer indivíduo ou comunidade.<br></br>
                            <br></br>O projeto foi fundado com a missão de formar líderes em
                            negócios, preparados de maneira efetiva, por meio de uma{" "}
                            <strong>
                                educação de alta qualidade conectada com a realidade empresarial
                            </strong>
                            . O ensino é voltado para o desenvolvimento de habilidades de{" "}
                            <strong>
                                liderança, orientação para resultados, capacidade de inovação e
                                visão sistêmica
                            </strong>
                            .
                        </Typography>
                    </div>
                    <img src={mission} alt="alunos da escola" />
                </section>
                <section style={{ marginTop: '90px', marginBottom: '70px' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <Typography variant="TypographySubtitle" color="#2E3092">
                            O que são Academias Germinare?
                        </Typography>

                        <Typography variant="TypographyParagraph" id="AcademicDescription" width="90%">
                            A escola Germinare, por meio de um currículo inovador, proporciona o diploma de Técnico em Administração de Empresas ao concluir o Ensino Médio. Para isso, dividimos as disciplinas em áreas do conhecimento, as Academias Germinare.

                            <br />
                            <br />

                            Assim como todos os trabalhos com bons resultados, há um grupo de pessoas diferentes contribuindo com os seus melhores atributos para concluir o objetivo da equipe. No caso das Academias, temos a parceria de seis empresas do Grupo J&F: <strong> Banco Original, Friboi, Flora, Seara, PicPay e Swift</strong>.

                        </Typography>
                    </div>
                    <AcademicsTabs />
                </section>

                <div style={{ marginBottom: '70px' }}>
                    <FamilySchool />
                </div>
                <Values />
            </ContentSpacer>
            <ImpactPhrase />
        </>
    );
}
