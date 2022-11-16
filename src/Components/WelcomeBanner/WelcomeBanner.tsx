import { LayoutSection } from "../LayoutSection"
import { Typography } from "../Typography"
import img from './img.png'
import './WelcomeBanner.module.scss'


export function WelcomeBanner(){
    return (
        <>
        <LayoutSection src = {img} height = '569px' >
            
            <Typography variant="typography-title" color = "white"> Conheça mais sobre o projeto acadêmico! </Typography>
        </LayoutSection>

        </>

    )
}