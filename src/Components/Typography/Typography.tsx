import './style.scss'

export type TypographyProps = {
    variant?: 'TypographyParagraph' | 'TypographySubtitle' | 'TypographyTitle'
    color?: '#2E3092' | 'white'  | 'black'
    width?: string
    weight?:string
    size?:string
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant, color='black', width,weight,size, ...props}:TypographyProps){
    
    return (
        <p  className = {variant} style = {{color: color, width: width, fontWeight: weight, fontSize:size}} {...props}> {children} </p>
    )
}