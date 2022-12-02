import './style.scss'

export type TypographyProps = {
    variant?: 'TypographyParagraph' | 'TypographySubtitle' | 'TypographyTitle' | 'TypographySectionTitle' | 'TypographySmallImage'
    color?: '#2E3092' | 'white'  | '#323232'
    width?: string
    weight?:string
    size?:string
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant, color='#323232', width,weight,size, ...props}:TypographyProps){
    
    return (
        <p  className = {variant} style = {{color: color, width: width, fontWeight: weight, fontSize:size}} {...props}> {children} </p>
    )
}