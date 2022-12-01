import { LayoutSection } from "../../../../Components"
import ImpactPhrase_background from './Assets/Images/ImpactPhrase_background.png'
import ze_mineiro from './Assets/Images/ze_mineiro.png'
import { Typography } from "../../../../Components"

export function ImpactPhrase() {
    return (
        <>
            <LayoutSection src={ImpactPhrase_background} color='rgba(1, 22, 137, 0.8)' height='fit-content'>
                <img src={ze_mineiro} alt="" />

                <div>
                    <div>
                        <div></div>
                        <Typography color='white' variant='TypographySubtitle' weight="500">
                            “A pessoa para vencer na vida precisa de garra, determinação e pontualidade”.
                        </Typography>
                    </div>

                    <Typography color='white' variant='TypographyParagraph' weight="500">
                        José “Zé Mineiro” Batista, fundador da JBS
                    </Typography>
                </div>
            </LayoutSection>
        </>

    )
}