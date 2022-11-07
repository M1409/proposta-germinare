import './style.scss'

export type TypographyProps = {
    variant?: 'typography-paragraph' | 'typography-subtitle' | 'typography-title'
    color?: 'blue' | 'white'
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant, color, ...props}:TypographyProps){
    
    return (
        <p {...props} className = {`${variant} ${color}`}> {children} </p>
    )
}