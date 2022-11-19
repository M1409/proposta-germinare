import './style.scss'
import { NewsCards } from './Components/NewsSection/index'
import repasseValores from './Assets/Images/repasseValores.svg'
import vendaDoces from './Assets/Images/vendaDoces.svg'
import reformaGerminare from './Assets/Images/reformaGerminare.svg'
import swiftTecnologia from './Assets/Images/swiftTecnologia.svg'
import Varejo from './Components/NewsSection/Assets/Images/storeIcon.svg';
import Tecnologia from './Components/NewsSection/Assets/Images/computerIcon.svg';
import Escola from './Components/NewsSection/Assets/Images/familyIcon.svg';
import Financas from './Components/NewsSection/Assets/Images/financesIcon.svg';

const newsElements = [{
    url: '/',
    title: 'Dia das crianças na Germinare',
    section: 'Varejo',
    sectionIcon: Varejo,
    imgSrc: vendaDoces,
    imgHeight: '300px',
}, {
    url: '/',
    title: 'Reforma do Instituto',
    section: 'Escola',
    sectionIcon: Escola,
    imgSrc: reformaGerminare,
    imgHeight: '300px',
},{
    url: '/',
    title: 'Hackaton das lojas Swift',
    section: 'Tecnologia',
    sectionIcon: Tecnologia,
    imgSrc: swiftTecnologia,
    imgHeight: '300px',
},{
    url: '/',
    title: 'Repassando os valores Germinare',
    section: 'Escola',
    sectionIcon: Escola,
    imgSrc: repasseValores,
    imgHeight: '300px',
}]

export function News() {
    return (
        <>
            <NewsCards newsElements={newsElements} />
        </>
    )
}