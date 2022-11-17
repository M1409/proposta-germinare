import './style.scss'
import { PLStatement } from './Components'

const documents = [
    {
        url: 'http://www.escolagerminare.org.br/pdf/2010.pdf',
        year: 2010,
    },
    {
        url: "http://www.escolagerminare.org.br/pdf/2011.pdf",
        year: 2011,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Demonstrativo-Instituto2012.pdf",
        year: 2012,
    },
    {
        url: "http://www.escolagerminare.org.br/pdf/2013.pdf",
        year: 2013,
    },
    {
        url: "http://www.escolagerminare.org.br/pdf/2014.pdf",
        year: 2014,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/152593-Demonstra%C3%A7%C3%B5es-financeiras-31-12-2015-Instituto-Germinare_CLIENTE.pdf",
        year: 2015,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Demonstrac%CC%A7o%CC%83es-financeiras-31-12-2016-Instituto-Germinare-com-parecer.pdf",
        year: 2016,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf",
        year: 2017,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf",
        year: 2018,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf",
        year: 2019,
    },
    {
        url: "http://www.escolagerminare.org.br/wp-content/uploads/2015/08/1171-21_Relatorio-de-Auditoria-_Germinare_2020-3.pdf",
        year: 2020,
    },
]

export default function Governance() {
    return (
        <div className='PLStatement-all-container'>
        <p>O modelo de Governança Corporativa da Escola Germinare, instituição sem fins lucrativos, visa atender aos mais altos padrões de organizações públicas ou privadas como forma de orientar nossa atuação a partir das boas práticas do setor educacional. Nossas ações e nosso plano diretivo são orientados com base em nossa missão, crença e valores. Buscamos contribuir com a sociedade, oferecendo ensino de alta qualidade com o propósito de formar líderes em negócios, que serão os futuros gestores do nosso país. Além do ensino gratuito, os alunos recebem refeições diárias, uniforme e todo o material didático.</p>
        <p>Como forma de manter a transparência junto a sociedade e apoiadores, publicamos abaixo os demonstrativos financeiros da Escola Germinare:</p>
        <PLStatement documents={documents}/>
        </div>
    )
}