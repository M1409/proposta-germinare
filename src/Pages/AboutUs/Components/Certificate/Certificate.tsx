import styles from './Certificate.module.scss'
import { LayoutSection } from '../../../../Components'
import backgroundSchool from './Assets/backgroundSchool.png'
import logoEscolasmebro from './Assets/logoEscolasmembro.png'
import logoEscolasmebro2 from './Assets/logoEscolasmembro2.png'
import criancaLogo from './Assets/criancasLogo.png'
import publicaFederal from './Assets/publicaFederal.png'
import Arrow from './Assets/Arrow.png'
import cebas from './Assets/cebas.png'

export default function Certificate(){
    return (
        <div className={styles.certificatesContainer}>
            <LayoutSection src={backgroundSchool} color='rgb(1, 22, 137, 80%)' height='fit-content' shadow={false}>
                <div style={{width: '86%', margin: '0 auto'}}>
                <h1>Certificados</h1>
            <div className={styles.containerCards}>
                <div className={styles.certificado}>
                    <div className={styles.teste}>
                        <h2>PROGRAMA DAS ESCOLAS ASSOCIADAS A UNESCO NO BRASIL</h2>
                        <div className={styles.flex}>
                            <img src={logoEscolasmebro2} alt="Logo escola membro" style={{width: '90px'}} className={styles.img} />
                            <img src={logoEscolasmebro} alt="Logo escola membro" style={{width: '50px'}} />
                        </div>
                        <img src={Arrow} alt="Seta" className={styles.arrow} style={{width: '28px'}} />
                    </div>
                </div>
                <div className={styles.certificado}>
                    <div className={styles.teste}>
                        <h2>CONSELHO MUNICIPAL DOS DIREITOS DA CRIANÇA E DO ADOLESCENTE (CMDCA)</h2>
                    </div>
                    <img src={criancaLogo} alt="Logo crianças" style={{width: '105px', marginLeft: '75px'}} />
                    <img src={Arrow} alt="Seta" className={styles.arrow2} style={{width: '28px'}} />
                </div>
                <div className={styles.certificado}>
                    <div className={styles.teste}>
                        <h2>UTILIDADE PÚBLICA FEDERAL</h2>
                    </div>
                    <img src={publicaFederal} alt="Logo pública Federal" style={{width: '100px', marginLeft:'75px', marginTop: '20px'}} />
                    <img src={Arrow} alt="Seta" className={styles.arrow} style={{width: '28px'}} />
                </div>
                <div className={styles.certificado}>
                    <div className={styles.teste}>
                        <h2>CERTIFICAÇÃO DE ENTIDADES BENEFICIENTES DE ASSISTÊNCIA SOCIAL NA ÁREA DE EDUCAÇÃO</h2>
                    </div>
                    <img src={cebas} alt="Logo CEBAS" style={{width: '145px', marginLeft:'60px', marginTop: '20px'}} />
                    <img src={Arrow} alt="Seta" className={styles.arrow} style={{width: '28px'}} />
                </div>
            </div>
                </div>
            </LayoutSection>
        </div>
    )
}