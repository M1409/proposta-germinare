import { Values } from "./Values";
import "./style.scss";
import { WelcomeBanner, Typography } from "../../Components";
import { banner, mission } from "./Assets/Images";
import { Certificates } from "./Components";
import { ContentSpacer } from "../../Components";

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
        <section className="mission">
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
        <section>
          <Certificates />
        </section>
        <Values />
      </ContentSpacer>
    </>
  );
}
