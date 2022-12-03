import styles from "./SuportSection.module.scss";
import { Typography, Button } from "../../../../Components";
import { QrCodeMonthly, QrCodeSingle } from "./Assets/Images";
import { ToggleButton } from "./ToggleButton";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../../hooks";
export function SuportSection() {
  const { width } = useWindowDimensions();
  const [monthly, setMonthly] = useState(false);
  useEffect(() => {
    $(`*[data-suportCodeMonthly=${monthly}]`).hide();
    $(`*[data-suportCodeMonthly=${!monthly}]`).fadeIn();
  }, [monthly]);
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
            escanear o QR Code que está ao lado. Realize o scan pelo aplicativo{" "}
            <strong className={styles.picpay}>PicPay</strong>. <br></br>
            <br></br>
            Caso seja Pessoa Jurídica ou queira fazer uma doação diretamente em
            nossa conta corrente, pedimos que por gentileza entre em contato
            conosco via{" "}
            <a
              href="mailto:instituto@germinare.org.br"
              style={{
                color: "#2E3092",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {" "}
              instituto@germinare.org.br{" "}
            </a>{" "}
            .
          </Typography>
          {width > 768 ? (
            <ToggleButton toggle={setMonthly}></ToggleButton>
          ) : (
            <div className={styles.SupportButtons}>
              <a href="https://app.picpay.com/profile/store/959123" target='_blank'><Button>Doações Únicas</Button></a>
              <a href="https://picpay.me/doegerminare" target='_blank'><Button>Doações Mensais</Button></a>
            </div>
          )}
        </div>
        <div className={styles.SupportImgs}>
          <img
            src={QrCodeMonthly}
            data-suportCodeMonthly={true}
            alt="homem sentado em um banco mexendo em um celular com o QRCode de doação"
          />
          <img
            src={QrCodeSingle}
            data-suportCodeMonthly={false}
            alt="homem sentado em um banco mexendo em um celular com o QRCode de doação"
          />
        </div>
      </div>
    </section>
  );
}
