import './style.scss'

export type TypographyProps = {
    variant?: 'TypographyParagraph' | 'TypographySubtitle' | 'TypographyTitle'
    color?: '#2E3092' | 'white'
    width?: string
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant, color, width, ...props}:TypographyProps){
    
    return (
        <p  className = {variant} style = {{color: color, width: width}} {...props}> {children} </p>
    )
}