import styles from './Certificates.module.scss'
import { LayoutSection, Typography } from '../../../../Components'
import backgroundSchool from './Assets/backgroundSchool.png'
import logoEscolasmebro from './Assets/logoEscolasmembro.png'
import logoEscolasmebro2 from './Assets/logoEscolasmembro2.png'
import criancaLogo from './Assets/criancasLogo.png'
import publicaFederal from './Assets/publicaFederal.png'
import Arrow from './Assets/Arrow.png'
import cebas from './Assets/cebas.png'
import Arrow4 from './Assets/Arrow4.svg'

import {useWindowDimensions} from '../../../../hooks'




export function Certificates() {
  const { width } = useWindowDimensions()
  return (

    <LayoutSection
      src={backgroundSchool}
      color="rgb(1, 22, 137, 80%)"
      height="fit-content"
    >
      <div className={styles.certificatesContainer}>
          <Typography
            variant="TypographySubtitle"
            color="white"
            style={{ paddingTop: "63px", color: "white", marginLeft: width <=768 ? '40px' : '340px' }}
          >
            Certificados
          </Typography>
          <div className={styles.containerCards}>
            <input type="checkbox" className={styles.switch} id="switch" />
            <label className={styles.flipContainer} htmlFor="switch">
              <div className={styles.flipper}>
                <div className={styles.front}>
                  <div className={styles.certificado}>
                    <div className={styles.teste}>
                      <h2>
                        PROGRAMA DAS ESCOLAS ASSOCIADAS A UNESCO NO BRASIL
                      </h2>
                      <div className={styles.flex}>
                        <img
                          src={logoEscolasmebro2}
                          alt="Logo escola membro"
                          style={{ width: "90px" }}
                          className={styles.img}
                        />
                        <img
                          src={logoEscolasmebro}
                          alt="Logo escola membro"
                          style={{ width: "50px" }}
                        />
                      </div>
                      <img
                        src={Arrow}
                        alt="Seta"
                        className={styles.arrow}
                        style={{ width: "28px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.certificado2}>
                    <div className={styles.contrario}>
                      O programa ?? uma das principais iniciativas da UNESCO no
                      campo da Educa????o. O PEA re??ne escolas que priorizam em
                      seu projeto pedag??gico temas ligados: <br />
                      <ul>
                        <li className={styles.li}>?? sustentabilidade,</li>
                        <li className={styles.li}>?? cultura de paz,</li>
                        <li className={styles.li}>?? ??tica,</li>
                        <li className={styles.li}>ao respeito,</li>
                        <li className={styles.li}>?? diversidade,</li>
                        <li className={styles.li}>?? multiculturalidade,</li>
                        <li className={styles.li}>entre outros.</li>
                      </ul>
                      <div className={styles.cFlex}>
                        <img src={Arrow4} alt="Seta" />
                        <p>Voltar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <input type="checkbox" className={styles.switch2} id="switch2" />
            <label className={styles.flipContainer2} htmlFor="switch2">
              <div className={styles.flipper2}>
                <div className={styles.front}>
                  <div className={styles.certificado}>
                    <div className={styles.teste}>
                      <h2>
                        CONSELHO MUNICIPAL DOS DIREITOS DA CRIAN??A E DO
                        ADOLESCENTE (CMDCA)
                      </h2>
                    </div>
                    <img
                      src={criancaLogo}
                      alt="Logo crian??as"
                      style={{
                        width: "105px",
                        marginLeft: "75px",
                        marginTop: "20px",
                      }}
                    />
                    <img
                      src={Arrow}
                      alt="Seta"
                      className={styles.arrow2}
                      style={{ width: "28px", marginLeft: "205px" }}
                    />
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.certificado2}>
                    <div className={styles.contrario}>
                      Entre outras fun????es, o CMDCA ?? respons??vel pelo
                      registro das entidades assistenciais (ONGs) que atendam
                      as crian??as e adolescentes, pelo processo de escolha dos
                      membros do Conselho Tutelar e controle do Fundo
                      Municipal de Direitos da Crian??a e do Adolescente. A
                      Germinare faz parte do CMDCA desde 2014.

                      <div className={styles.cFlex} style={{ marginTop: '40px' }}>
                        <img src={Arrow4} alt="Seta" />
                        <p>Voltar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <input type="checkbox" className={styles.switch3} id="switch3" />
            <label className={styles.flipContainer3} htmlFor="switch3">
              <div className={styles.flipper3}>
                <div className={styles.front}>
                  <div className={styles.certificado}>
                    <div className={styles.teste}>
                      <h2>UTILIDADE P??BLICA FEDERAL</h2>
                    </div>
                    <img
                      src={publicaFederal}
                      alt="Logo p??blica Federal"
                      style={{
                        width: "100px",
                        marginLeft: "75px",
                        marginTop: "25px",
                      }}
                    />
                    <img
                      src={Arrow}
                      alt="Seta"
                      className={styles.arrow}
                      style={{ width: "28px", marginLeft: "205px" }}
                    />
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.certificado2}>
                    <div className={styles.contrario}>
                      <span>
                        De acordo com esta certifica????o, as entidades de
                        Utilidade P??blica podem oferecer aos doadores - pessoas
                        jur??dicas tributadas com base no LUCRO REAL (exclu??das,
                        portanto as tributadas com base no lucro presumido, no
                        lucro arbitrado e no SIMPLES) - o benef??cio da redu????o
                        de seu Imposto de Renda e da Contribui????o Social sobre o
                        Lucro L??quido -
                      </span>

                      <div className={styles.cFlex}>
                        <img src={Arrow4} alt="Seta" />
                        <p>Voltar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <input type="checkbox" className={styles.switch4} id="switch4" />
            <label className={styles.flipContainer4} htmlFor="switch4">
              <div className={styles.flipper4}>
                <div className={styles.front}>
                  <div className={styles.certificado}>
                    <div className={styles.teste}>
                      <h2>
                        CERTIFICA????O DE ENTIDADES BENEFICIENTES DE ASSIST??NCIA
                        SOCIAL NA ??REA DE EDUCA????O
                      </h2>
                    </div>
                    <img
                      src={cebas}
                      alt="Logo CEBAS"
                      style={{
                        width: "145px",
                        marginLeft: "60px",
                        marginTop: "24px",
                      }}
                    />
                    <img
                      src={Arrow}
                      alt="Seta"
                      className={styles.arrow}
                      style={{ width: "28px", marginLeft: "205px" }}
                    />
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.certificado2}>
                    <div className={styles.contrario}>
                      Este certificado significa que a escola contribui de
                      maneira efetiva para o processo de inclus??o social no
                      pa??s por meio de ofertas de bolsas de estudo, integrais
                      ou parciais, constituindo-se em uma pol??tica p??blica de
                      acesso ?? Educa????o B??sica e Superior.

                      <div className={styles.cFlex} style={{ marginTop: '65px' }}>
                        <img src={Arrow4} alt="Seta" />
                        <p>Voltar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
    </LayoutSection >
  );
}