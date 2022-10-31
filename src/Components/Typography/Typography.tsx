import './style.scss'

export type TypographyProps = {
    variant?: 'typography-paragraph' | 'typography-subtitle' | 'typography-title'
}   & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export function Typography({children,variant,...props}:TypographyProps){
    return (
        <p {...props} className = {variant}> {children} </p>
    )
}