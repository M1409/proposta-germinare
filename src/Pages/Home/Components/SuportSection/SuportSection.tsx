import styles from './SuportSection.module.scss'
import { Typography, Button } from "../../../../Components";
import QrCode from "../../Assets/Images/QrCode.svg";
import QrCodeIlustration from "../../Assets/Images/QrCodeIlustration.svg";
export function SuportSection() {
  return (
    <section className={styles.SupportSection}>
      <div className={styles.SupportContainer}>
        <div>
          <Typography variant="TypographySubtitle" color="#2E3092">
            Como apoiar o projeto
          </Typography>
          <Typography variant="TypographyParagraph">
            Para apoiar, você pode fazer uma doação única ou mensalmente para a
            Escola Germinare pelo PicPay. Basta escolher uma das opções abaixo e
            escanear o QR Code que está ao lado. Realize o scan pelo aplicativo
            PicPay.
          </Typography>
          <div className={styles.SupportButtons}>
            <Button variant="filled" width="152px" height="50px">
              Doação Única
            </Button>
            <Button variant="outlined" width="152px" height="50px">
              Doação Mensal
            </Button>
          </div>
        </div>
        <div className={styles.SupportImgs}>
          <img src={QrCode} alt="" />
          <img src={QrCodeIlustration} alt="" />
        </div>
      </div>
      <Typography variant="TypographyParagraph" id="SupportLegal">
        Caso seja Pessoa Jurídica ou queira fazer uma doação diretamente em
        nossa conta corrente, pedimos que por gentileza entre em contato conosco
        via{" "}
        <a
          href="mailto:instituto@germinare.org.br"
          style={{ color: "#2E3092", fontWeight: 700, textDecoration: "none" }}
        >
          {" "}
          instituto@germinare.org.br{" "}
        </a>{" "}
        .
      </Typography>
    </section>
  );
}
