import './style.scss'

export type TypographyProps = {
    variant?: 'TypographyParagraph' | 'TypographySubtitle' | 'TypographyTitle'
    color: 'blue' | 'white'
    width?: string
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant, color, width, ...props}:TypographyProps){
    
    return (
        <p {...props} className = {variant} style = {{color: color, width: width}}> {children} </p>
    )
}