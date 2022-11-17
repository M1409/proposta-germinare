import { LayoutSection } from "../../../../Components/LayoutSection"
import { Typography } from "../../../../Components/Typography"
import Beliefs from './Assets/Images/Beliefs.png'

export function BeliefSection() {
    return (
        <LayoutSection src={Beliefs} color='#011689' height='576px'>
            <div>
                <Typography color="white" variant="TypographySubtitle">
                    Nossas Crenças
                </Typography>
            </div>
        </LayoutSection>
    )

}