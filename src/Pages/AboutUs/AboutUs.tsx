import './style.scss'
import { AcademicsTabs } from './Components/Tabs/Tabs'
import { ImpactPhrase } from './Components/ImpactPhrase'
import FamilySchool from './Components/FamilySchool/FamilySchool'
export function AboutUs() {
    return (
        <>
            <AcademicsTabs/>
            <FamilySchool/>
            <ImpactPhrase/>
        </>
    )
}