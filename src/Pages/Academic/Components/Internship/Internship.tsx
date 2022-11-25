import { Typography } from "../../../../Components";
import styles from './Internship.module.scss'
export function Internship() {
  return (
    <div className={styles.container}>
      <Typography variant="TypographySubtitle" style={{fontSize: 28, color: '#2E3092'}}>Estágios Remunerados</Typography>
      <Typography variant="TypographyParagraph" color="black" id={styles.internship}>Os <strong>alunos iniciam estágios já no segundo semestre do 9º ano</strong>, como forma de aplicar no mundo empresarial os conhecimentos adquiridos em sala de aula. Esta é uma das estratégias da escola para que que os alunos tomem conhecimentos e demandas do mundo real, interessem-se, entendam a importância e dediquem-se para superar as expectativas.</Typography>
    </div>
  );
}
