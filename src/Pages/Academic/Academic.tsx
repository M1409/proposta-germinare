import { WelcomeBanner } from "../../Components/WelcomeBanner";
import { Typography } from "../../Components";
import { banner } from "./Assets/Images";
import { Academys, Internship, SchoolRegiment } from "./Components";
import "./style.scss";
export function Academic() {
  return (
    <>
      <WelcomeBanner
        bannerSrc={banner}
        title="Venha construir seu futuro. 
        Matricule-se!"
        titleWidth="75%"
      />
      <main className="mainContainer" id="academic">
        <section>
          <Typography variant="TypographySubtitle" color="#2E3092">
            Como funcionam nossos cursos?
          </Typography>
          <Typography variant="TypographyParagraph">
            A escola Germinare tem como missão formar{" "}
            <strong>jovens administradores de empresas e cidadãos</strong> por
            meio de uma educação única e inteiramente gratuita. É uma
            instituição aprovada pelo MEC – Ministério da Educação – e
            reconhecida pela UNESCO.<br></br>
            <br></br>O foco principal é formar de maneira efetiva jovens
            gestores e <strong>líderes para o mercado de trabalho</strong>,
            oferecendo ampla preparação com conteúdos dirigidos ao
            desenvolvimento de{" "}
            <strong>
              habilidades profissionais e a oportunidade de especialização
            </strong>{" "}
            escolhida entre os seguintes negócios: digital, financeiro, varejo,
            commodities e bens de consumo.
          </Typography>
        </section>
        <section>
            <Typography variant="TypographySubtitle" color="#2E3092">Disciplinas focadas em gestão de negócios</Typography>
            <Typography variant="TypographyParagraph">O Instituto Germinare, além de oferecer toda a base curricular do MEC, oferecendo matérias básicas como: português, matemática, história, física, química e biologia contém em sua estrutura <strong>matérias voltadas ao preparo do aluno como profissional</strong>, fazendo com que assim ele esteja preparado para o mercado de trabalho.</Typography>
            <Academys></Academys>
            <Internship></Internship>
        </section>
        <SchoolRegiment></SchoolRegiment>
      </main>
    </>
  );
}
