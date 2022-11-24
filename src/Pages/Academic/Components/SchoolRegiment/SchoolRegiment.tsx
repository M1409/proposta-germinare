import styles from "./SchoolRegiment.module.scss";
import { Typography } from "../../../../Components";
import { regiment, ipdf } from "../../Assets/Images";
import { Button } from "../../../../Components";
export function SchoolRegiment() {
  return (
    <section className={styles.container}>
      <Typography variant="TypographySubtitle" color="#2E3092">
        Regimento escolar e Código de conduta
      </Typography>
      <div className={styles.wrapper}>
        <div>
          <Typography variant="TypographyParagraph">
            Aqui no instituto, nós prezamos pelo bom convívio de todos, para que
            possamos ter uma ambiente harmônico e de constante aprendizado. Em
            virtude disto, é fundamental que tenhamos algumas normas para
            garantir que tudo isso seja cumprido.<br></br><br></br> Confira nossas normas
            escolares 2022:
          </Typography>
          <div className={styles.btnContainer}>
            <a href="http://www.escolagerminare.org.br/wp-content/uploads/2018/01/Regimento-Escolar-2022.pdf"  target='_blank' className={styles.pdfBtn}><img src={ipdf} alt="baixar pdf" /> Regimento Escolar 2022</a>
            <a href="http://www.escolagerminare.org.br/wp-content/uploads/2018/01/C%C3%B3digos-de-Conduta-e-Normas-Escolares-2022.pdf" target='_blank'  className={styles.pdfBtn}><img src={ipdf} alt="baixar pdf" /> Código de Conduta 2022</a>
          </div>
        </div>
        <img src={regiment} alt="menina arquivando papéis" />
      </div>
    </section>
  );
}
